import { useAppSelector } from "@/hooks/tsReduxHook";
import { ChatInfo } from "@/store/reducer/chatReducer";
import { IChatMessage } from "@/store/slices/chatSlice";
import { ReactElement, useEffect, useRef } from "react";
import { DocumentSvg } from "../../assets/documentSvg";
import FileSaver from "file-saver";

export const MiniChatWindowMessage = ({
    message,
    needAvatar,
    newDateMessage,
    chatInfo,
}: {
    message: IChatMessage;
    needAvatar: boolean;
    newDateMessage: boolean;
    chatInfo: ChatInfo;
}): ReactElement => {
    const messageRef = useRef(null);
    const token = useAppSelector(state => state.pReducer.bearerToken);
    const userFromMessageInfo = useAppSelector(state => state.chat.usersInChat)?.find(
        user => user.userPhoneNumber === message?.userPhoneNumber,
    );
    const fileName = message?.messageText.substring(message?.messageText?.lastIndexOf("/") + 1);
    const messageCorrect =
        {
            [1]: message?.messageText,
            [2]: (
                <button onClick={() => downloadFile(message?.messageText)} className='chat-new__message-file'>
                    <p>Файл</p>
                    <DocumentSvg />
                </button>
            ),
            [3]: (
                <a href={message?.messageText}>
                    <img className='chat-new__message-image' src={message?.messageText} />
                </a>
            ),
        }[message?.typeMessage as 1 | 2 | 3] ?? "message";

    useEffect(() => {
        if (messageRef.current) {
            setTimeout(
                () =>
                    messageRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "end",
                    }),
                0,
            );
        }
    }, [messageRef]);

    const downloadFile = async (url: string) => {
        try {
            const response = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
            const file = await response.blob();
            FileSaver.saveAs(file, fileName);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            {newDateMessage ? (
                <div className='chat-new__date-message'>
                    <div className='chat-new__date-inner'>
                        {new Date(message?.dateMessage).toLocaleDateString("uk", {
                            day: "numeric",
                            month: "numeric",
                            year: "numeric",
                        })}
                    </div>
                </div>
            ) : null}

            <div
                ref={messageRef}
                id='message'
                style={{
                    paddingRight: `${!needAvatar ? "38px" : "0px"}`,
                    flexDirection: "row",
                }}
                className={`client-chat__message session-${message?.idSession}`}
                data-date={message?.dateMessage}
            >
                <img
                    className={`content-header__avatar${
                        message?.userPhoneNumber === chatInfo?.phoneNum ? " content-header__avatar-user" : ""
                    }`}
                    style={{ display: `${needAvatar ? "block" : "none"}`, width: "32px", height: "32px" }}
                    src={userFromMessageInfo?.userPhoto}
                />
                <div
                    style={{
                        flexDirection:
                            message?.userPhoneNumber === chatInfo?.phoneNum ? "row-reverse" : "row",
                    }}
                    className='chat-new__message-wrap'
                >
                    <>
                        <div
                            className={`chat-new__message chat-new__message_${
                                message?.userPhoneNumber === chatInfo?.phoneNum ? "f" : "t"
                            }`}
                        >
                            {message?.userPhoneNumber !== chatInfo?.phoneNum ? (
                                <span className='chat-new__message-name'>
                                    {`${userFromMessageInfo?.userName ?? ""} ${
                                        userFromMessageInfo?.lastName ?? ""
                                    }`}
                                </span>
                            ) : null}

                            <div>
                                {messageCorrect}

                                <div className='chat-new__message_date'>
                                    {new Date(message?.dateMessage).toLocaleString("uk", {
                                        hour: "numeric",
                                        minute: "numeric",
                                    })}
                                </div>
                            </div>
                        </div>
                    </>
                </div>
            </div>
        </>
    );
};
