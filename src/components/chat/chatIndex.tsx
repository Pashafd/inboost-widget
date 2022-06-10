import { useAppSelector } from "@/hooks/tsReduxHook";
import MyContext from "@/mainContext";
import { ChatInfo } from "@/store/reducer/chatReducer";
import { ReactElement, useContext, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { MiniChat } from "./miniChat";
import "../../styles/global.scss";

export enum Languages {
    UA = "UA",
    RU = "RU",
    EN = "EN",
}
export interface MultiLanguageValue {
    value: string;
    lang: Languages;
}
export interface DialogKeyboardButton {
    id: number;
    title: MultiLanguageValue[];
    orderCol?: number;
    row?: number;
    typeButton?: null;
    type?: string;
    withLog?: boolean;
    withTimeRepeatLimit?: boolean;
    to?: string | null;
    btnData?: number | string;
    rolesForLockedButtons?: string[];
    btnUrl?: string;
    isLinkButton: boolean;
    buttonPosition?: { orderCol: number; row: number; col: number };
    idButtonType?: number;
    allowedRoles?: string[];
    tags?: number[];
}

export const ChatIndex = (): ReactElement => {
    const dispatch = useDispatch();
    const connection = useContext(MyContext);
    const chatState = useAppSelector(state => state.pChatReducer.listChatInfo);
    const [currentChats, setCurrentChats] = useState<ChatInfo[]>([]);
    const chatWrapRef = useRef(null);
    const [indexOrder, setIndexOrder] = useState([103, 102, 101]);

    useEffect(() => {
        setCurrentChats(chatState.slice(0, 3));
    }, [chatState]);

    useEffect(() => {
        if (connection) {
            connection.on(
                "ReceiveMessageChat",
                (UserPhoneNumber: string, UserChatId: string, Message: string, isChatClosed: boolean) => {
                    const curMessage = { dateLog: new Date(), logText: Message, fromTo: "t" };
                    dispatch({
                        type: "SET_HISTORY_MESSAGES",
                        payload: {
                            phoneNum: UserPhoneNumber,
                            message: curMessage,
                            isChatClosed: !!isChatClosed,
                            lastUserChatId: UserChatId,
                        },
                    });

                    dispatch({
                        type: "SET_CHAT_CLOSED",
                        payload: {
                            phoneNum: UserPhoneNumber,
                            isChatClosed: !!isChatClosed,
                            lastUserChatId: UserChatId,
                        },
                    });
                },
            );

            connection.on("alertErrors", (err: string) => {
                console.log(err, "ERROR IN WEBSOCKET");
            });
        }
    }, [connection]);

    return (
        <div
            style={
                {
                    // left: `calc(100% - ${370 + currentChats.length * 20}px)`,
                    // bottom: `${currentChats.length * 8}px`,
                }
            }
            ref={chatWrapRef}
            className='chat-new__wrapper-chats'
        >
            {currentChats.map((chat, idx) => (
                <MiniChat
                    key={chat.phoneNum}
                    indexOrder={indexOrder}
                    index={idx}
                    setIndexOrder={setIndexOrder}
                    chatWrapRef={chatWrapRef}
                    chatInfo={chat}
                />
            ))}
        </div>
    );
};
