import { useAppDispatch, useAppSelector } from "@/hooks/tsReduxHook";
import { useConstructorApi } from "@/hooks/useApi";
import MyContext from "@/mainContext";
import { ChatInfo } from "@/store/reducer/chatReducer";
import { addNewMessage, fetchHistory, findInfoForUser, IChatMessage } from "@/store/slices/chatSlice";
import { SmallLoaderV1 } from "@/ui/loaders/smallLoader";
import React, { ReactElement, useContext, useEffect, useRef, useState } from "react";
import { DialogKeyboardButton, MultiLanguageValue } from "./chatIndex";
import { MiniChatControl } from "./miniChatControl";
import { MiniChatHeader } from "./miniChatHeader";
import { MiniChatInput } from "./miniChatInput";
import { MiniChatWindow } from "./miniChatWindow";
import { WebBotButtons } from "./webBotButtons";
import modules from "@/styles/global.module.scss";

export const MiniChat = ({
    chatInfo,
    chatWrapRef,
    setIndexOrder,
    indexOrder,
    index,
}: {
    chatInfo: ChatInfo;
    chatWrapRef: React.RefObject<HTMLDivElement>;
    setIndexOrder: (arg0: number[]) => void;
    indexOrder: number[];
    index: number;
}): ReactElement => {
    const api = useConstructorApi();
    const dispatch = useAppDispatch();
    const connection = useContext(MyContext);
    const chatElem = useRef(null);
    const historyRef = useRef(null);
    const [chatIsActive, setChatIsActive] = useState(null);
    const [chatBodyHeight, setChatBodyHeight] = useState(0);
    const managerInfo = useAppSelector(state => state.managerInfoReducer);
    const history = useAppSelector(state => state.chat.chatHistory)?.find(
        chat => chat?.userPhoneNumber === chatInfo?.phoneNum,
    )?.history;
    const interfaceLang = useAppSelector(state => state.pReducer.language);
    const [keyboard, changeKeyboard] = useState<DialogKeyboardButton[]>([]);

    useEffect(() => {
        setChatBodyHeight(0 === index ? 450 : 0);
    }, [index]);

    useEffect(() => {
        dispatch(fetchHistory({ api, userPhoneNumber: chatInfo?.phoneNum }));
        dispatch(findInfoForUser({ api, userPhoneNumber: chatInfo?.phoneNum }));
        return () => {
            dispatch({
                type: "SET_CHAT_CLOSED",
                payload: {
                    phoneNum: chatInfo?.phoneNum,
                    isChatClosed: false,
                    lastUserChatId: chatInfo?.lastUserChatId,
                },
            });
        };
    }, []);

    useEffect(() => {
        if (connection) {
            connection.on("WebToUserFile", (url: string, typeMessage: number) => {
                const curMessage: IChatMessage = {
                    dateMessage: new Date(),
                    messageText: url,
                    userPhoneNumber: managerInfo?.phoneNumber,
                    typeMessage,
                };

                dispatch(addNewMessage({ userPhoneNumber: chatInfo?.phoneNum, message: curMessage }));
            });
            connection.on(
                "buildWebBot",
                (userChatId: string, message: string, replyKeyboardMarkup: DialogKeyboardButton[]) => {
                    console.log({ userChatId, message, replyKeyboardMarkup }, "BUILD WEB BOT");

                    const curMessage: IChatMessage = {
                        dateMessage: new Date(),
                        messageText: message,
                        userPhoneNumber: "0000000000",
                        typeMessage: 1,
                    };
                    dispatch(addNewMessage({ userPhoneNumber: chatInfo?.phoneNum, message: curMessage }));
                    changeKeyboard(replyKeyboardMarkup);
                },
            );
        }
    }, [connection]);

    const sendMessage = async (message: string) => {
        const curMessage: IChatMessage = {
            dateMessage: new Date(),
            messageText: message,
            userPhoneNumber: managerInfo?.phoneNumber,
            typeMessage: 1,
        };

        try {
            dispatch(addNewMessage({ userPhoneNumber: chatInfo?.phoneNum, message: curMessage }));
            await api.post("WebBot/webhook", {
                userPhoneNumber: managerInfo?.phoneNumber + "",
                userName: managerInfo?.firstname,
                action: "text",
                text: message,
                lang: interfaceLang,
            });
        } catch (err) {
            console.error(err);
        }
    };
    const sendFile = async ({ fileName, fileContent }: { fileName: string; fileContent: string }) => {
        try {
            await api.post("WebBot/webhook", {
                userPhoneNumber: managerInfo?.phoneNumber + "",
                userName: managerInfo?.firstname,
                action: "text",
                lang: interfaceLang,
                fileBase64: fileContent,
                fileName,
            });
        } catch (err) {
            console.error(err);
        }
    };
    const scrollToBot = () => {
        const allMessages = document.querySelectorAll("#message");
        const lastMessage = allMessages[allMessages.length - 1];

        lastMessage.scrollIntoView({
            behavior: "smooth",
            block: "end",
        });
    };
    const start = async () => {
        try {
            await api.post("WebBot/webhook", {
                userPhoneNumber: managerInfo?.phoneNumber + "",
                userName: managerInfo?.firstname,
                action: "chatInit",
                lang: interfaceLang,
                chat: {
                    toUserChatId: chatInfo?.lastUserChatId,
                    toUserPhoneNumber: chatInfo?.phoneNum,
                },
            });
        } catch (err) {
            console.error(err);
        }
    };
    const clickButton = async (buttonText: MultiLanguageValue[]) => {
        try {
            await api.post("WebBot/webhook", {
                userPhoneNumber: managerInfo?.phoneNumber + "",
                userName: managerInfo?.firstname,
                action: "text",
                lang: interfaceLang,
                buttonText,
                text: null,
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div
            onClick={
                {
                    [1]: () => setIndexOrder([102, 103, 101]),
                    [2]: () => setIndexOrder([101, 102, 103]),
                    [3]: () => setIndexOrder([103, 102, 101]),
                }[index]
            }
            style={{ height: chatBodyHeight + 60 + "px", zIndex: indexOrder[index] }}
            ref={chatElem}
            className={modules["chat-new__chat-wrap"]}
        >
            <MiniChatHeader
                chatWrapRef={chatWrapRef}
                setChatBodyHeight={setChatBodyHeight}
                chatBodyHeight={chatBodyHeight}
                setChatIsActive={setChatIsActive}
                active={chatIsActive}
                chatInfo={chatInfo}
            />

            <div style={{ height: chatBodyHeight }} className={modules["chat-new__chat-body"]}>
                <div ref={historyRef} className={modules["chat-new__history"]}>
                    {history ? <MiniChatWindow history={history} chatInfo={chatInfo} /> : null}
                </div>

                {!history ? <SmallLoaderV1 /> : null}

                {0 !== chatBodyHeight ? (
                    <MiniChatControl
                        scrollToBot={scrollToBot}
                        setChatIsActive={setChatIsActive}
                        active={chatIsActive}
                        showBtn={true}
                        start={start}
                    >
                        <>
                            {chatIsActive ? (
                                <MiniChatInput sendFile={sendFile} sendMessage={sendMessage} />
                            ) : null}
                            <WebBotButtons clickButton={clickButton} keyboard={keyboard} />
                        </>
                    </MiniChatControl>
                ) : null}
            </div>
        </div>
    );
};
