/* eslint-disable no-unsafe-optional-chaining */
import { MultiLanguageValue } from "@/components/chat/chatIndex";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosInstance, AxiosResponse } from "axios";

export enum BtnGridEnum {
    oneInRow = "100%",
    twoInRow = "calc(50% - 10px / 2)",
    threeInRow = "calc(33.3% - 10px / 3)",
}
export type BtnGridEnumKeys = BtnGridEnum.oneInRow | BtnGridEnum.twoInRow | BtnGridEnum.threeInRow;
export interface IBtnsGrid {
    id: string | number;
    name: string;
    width: BtnGridEnumKeys;
    text?: MultiLanguageValue[];
}
export interface IBackEndModelButtonsGrid {
    id: number | string;
    column: 6 | 3 | 2;
}
export interface IChatSessions {
    dateClosedChat: string;
    dateStartChat: string;
    idSession: number;
    nodeId: string;
    operatorChatId: string;
    operatorPhoneNumber: string;
    userChatId: string;
    userPhoneNumber: string;
}
export interface IChatMessage {
    dateMessage: Date;
    idSession?: number;
    messageText: string;
    typeMessage: number;
    userPhoneNumber: string;
}

export interface BookingUserInfo {
    lastName: string;
    userName: string;
    userPhoneNumber: string;
    IdRole: null | [string];
    userPhoto: string;
}
interface IChatInitialState {
    usersInChat: BookingUserInfo[];
    chatHistory: { userPhoneNumber: string; history: IChatMessage[] | null }[];
}

const initialState: IChatInitialState = {
    usersInChat: [],
    chatHistory: null,
};

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        addNewMessage: (state, action: PayloadAction<{ userPhoneNumber: string; message: IChatMessage }>) => {
            state.chatHistory = state.chatHistory.map(chat =>
                chat.userPhoneNumber === action.payload.userPhoneNumber
                    ? { ...chat, history: [...chat.history, action.payload.message] }
                    : chat,
            );
        },
        addNewUser: (state, action: PayloadAction<BookingUserInfo>) => {
            if (!state.usersInChat.find(user => user.userPhoneNumber === action.payload.userPhoneNumber)) {
                state.usersInChat.push(action.payload);
            } else {
                state.usersInChat = state.usersInChat.map(user =>
                    user.userPhoneNumber === action.payload.userPhoneNumber ? action.payload : user,
                );
            }
        },
    },
    extraReducers: builder => {
        builder.addCase(findInfoForUser.fulfilled, (state, action: PayloadAction<BookingUserInfo>) => {
            if (action.payload) {
                state.usersInChat.push(action.payload);
            }
        });
        builder.addCase(
            fetchHistory.fulfilled,
            (state, action: PayloadAction<{ userPhoneNumber: string; history: IChatMessage[] }>) => {
                if (action.payload) {
                    if (Array.isArray(state?.chatHistory)) {
                        state.chatHistory = [
                            ...state.chatHistory?.filter(
                                chat => chat?.userPhoneNumber !== action.payload.userPhoneNumber,
                            ),
                            action.payload,
                        ];
                    } else {
                        state.chatHistory = [action.payload];
                    }
                }
            },
        );
    },
});

export const { addNewMessage, addNewUser } = chatSlice.actions;
export default chatSlice.reducer;

// actions
export const findInfoForUser = createAsyncThunk(
    "chat/findInfo",
    async ({ userPhoneNumber, api }: { api: AxiosInstance; userPhoneNumber: string }) => {
        try {
            const response: AxiosResponse<BookingUserInfo> = await api.post("booking_settings/getUser", {
                userPhone: userPhoneNumber,
            });
            return response.data;
        } catch (err) {
            console.error(err);
            return null;
        }
    },
);
export const fetchHistory = createAsyncThunk(
    "chat/fetchHistory",
    async ({ userPhoneNumber, api }: { api: AxiosInstance; userPhoneNumber: string }, { dispatch }) => {
        try {
            const sessions: AxiosResponse<IChatSessions[]> = await api.get(
                `ChatHistory/sessions/${userPhoneNumber}`,
            );
            // let tempHistory: IChatMessage[] = [];
            const uniqPhoneNumber: string[] = [];

            const promises = sessions.data?.map(session => {
                return api.get(`ChatHistory/messages/${session?.idSession}`);
            });

            const history: AxiosResponse<IChatMessage[]>[] = await Promise.all(promises);

            history?.forEach(item => {
                item?.data?.forEach(element => {
                    if (!uniqPhoneNumber.includes(element.userPhoneNumber)) {
                        uniqPhoneNumber.push(element.userPhoneNumber);
                        dispatch(findInfoForUser({ api, userPhoneNumber: element.userPhoneNumber }));
                    }
                });
            });

            return { userPhoneNumber, history: history?.flatMap(x => x.data) };
        } catch (err) {
            console.error(err);
            return null;
        }
    },
);
