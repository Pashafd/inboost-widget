import { HubConnection } from "@microsoft/signalr";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./tsReduxHook";
import { useSignalR } from "./useSignalR";

export const useWebsocketConnect = (domainsIsDownloaded: boolean): HubConnection => {
    const dispatch = useAppDispatch();
    const listActiveChat = useAppSelector(state => state.pChatReducer.listChatInfo);
    const connection: HubConnection = useSignalR(domainsIsDownloaded);

    useEffect(() => {
        if (connection) {
            connection.start().catch(err => console.log(err));
            connection.on(
                "ReceiveQueueNotification",
                (phoneNum: string, chatId: string, countQueue: string) => {
                    const isChatIsAlreadyInList = listActiveChat.some(
                        x => x.phoneNum === phoneNum && x.lastUserChatId === chatId,
                    );

                    if (!isChatIsAlreadyInList) {
                        dispatch({
                            type: "ADD_TO_CHAT_QUEUE",
                            payload: { phoneNum, userName: "", avatarUrl: "", lastUserChatId: chatId },
                        });
                    }

                    dispatch({ type: "SET_QUEUE_MESSAGES", payload: countQueue });
                },
            );
        }
    }, [connection]);

    return connection;
};
