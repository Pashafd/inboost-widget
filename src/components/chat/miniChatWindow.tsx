import { ChatInfo } from "@/store/reducer/chatReducer";
import { IChatMessage } from "@/store/slices/chatSlice";
import { ReactElement } from "react";
import { MiniChatWindowMessage } from "./miniChatMessage";

export const MiniChatWindow = ({
    history,
    chatInfo,
}: {
    history: IChatMessage[];
    chatInfo: ChatInfo;
}): ReactElement => {
    return (
        <>
            {history.map((message, index) => {
                const anotherUser =
                    new Date(history[index - 1]?.dateMessage).getDay() !==
                    new Date(history[index]?.dateMessage).getDay();

                return 0 < message?.messageText?.length ? (
                    <MiniChatWindowMessage
                        key={index}
                        message={message}
                        chatInfo={chatInfo}
                        needAvatar={history[index + 1]?.userPhoneNumber !== history[index]?.userPhoneNumber}
                        newDateMessage={anotherUser}
                    />
                ) : null;
            })}
        </>
    );
};
