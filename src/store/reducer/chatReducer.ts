export interface ChatInfo {
    phoneNum: string;
    userName: string;
    avatarUrl: string;
    lastUserChatId: string;
}
export interface ChatReducerState {
    listChatInfo: ChatInfo[];
}

const initialState: ChatReducerState = {
    listChatInfo: [],
};

export const chatReducer = (
    state = initialState,
    action: { type: string; payload: any },
): ChatReducerState => {
    switch (action.type) {
        case "ADD_TO_CHAT_QUEUE": {
            return Object.assign({}, state, {
                listChatInfo: state.listChatInfo.some(
                    x =>
                        x.phoneNum === action.payload.phoneNum &&
                        x.lastUserChatId === action.payload.lastUserChatId,
                )
                    ? state.listChatInfo.map(x =>
                          x.phoneNum === action.payload.phoneNum &&
                          x.lastUserChatId === action.payload.lastUserChatId
                              ? action.payload
                              : x,
                      )
                    : state.listChatInfo.concat(action.payload),
            });
        }
        case "REMOVE_FROM_CHAT_QUEUE":
            return Object.assign({}, state, {
                listChatInfo: state.listChatInfo.filter(
                    x =>
                        x.phoneNum !== action.payload.phoneNum &&
                        x.lastUserChatId !== action.payload.lastUserChatId,
                ),
            });

        default:
            return state;
    }
};
