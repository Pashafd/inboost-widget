import { CloseNew } from "@/assets/closeNew";
import { Minimize } from "@/assets/minimize";
import { useAppSelector } from "@/hooks/tsReduxHook";
import { ChatInfo } from "@/store/reducer/chatReducer";
import React, { ReactElement, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import modules from "@/styles/global.module.scss";

export const MiniChatHeader = ({
    chatInfo,
    setChatBodyHeight,
    chatBodyHeight,
    chatWrapRef,
    setChatIsActive,
    active,
}: {
    chatInfo: ChatInfo;
    setChatBodyHeight: (arg0: number) => void;
    chatBodyHeight: number;
    chatWrapRef: React.RefObject<HTMLDivElement>;
    setChatIsActive: (arg0: boolean) => void;
    active: boolean;
}): ReactElement => {
    const dispatch = useDispatch();
    const mainUserInfo = useAppSelector(state => state.chat.usersInChat)?.find(
        user => user?.userPhoneNumber === chatInfo?.phoneNum,
    );
    const chatWrapElem = chatWrapRef.current;
    const [moveInfo, setMoveInfo] = useState({
        move: false,
        down: true,
    });

    useEffect(() => {
        chatWrapElem.ondragstart = () => false;
        const handleBreakDragAndDrop = () => {
            setMoveInfo({ ...moveInfo, move: false, down: true });
        };

        document.addEventListener("click", handleBreakDragAndDrop);
        return () => document.removeEventListener("click", handleBreakDragAndDrop);
    }, [chatWrapElem]);

    return (
        <div
            onMouseDown={(e: React.MouseEvent) => {
                if (moveInfo.down) {
                    const shiftX = e.clientX - chatWrapElem.getBoundingClientRect().left;
                    chatWrapElem.style.zIndex = 1000 + "";

                    const moveAt = (pageX: number) => {
                        const navbarWidth = 72;
                        const miniChatWidth = 400;
                        const isInOutOfWindow =
                            pageX - shiftX + miniChatWidth > document.body.clientWidth ||
                            pageX - shiftX <= navbarWidth;

                        if (!isInOutOfWindow) {
                            chatWrapElem.style.left = pageX - shiftX + "px";
                        }
                    };
                    moveAt(e.pageX);

                    const onMouseMove = (e: MouseEvent) => {
                        moveAt(e.pageX);
                    };

                    chatWrapElem.addEventListener("mousemove", onMouseMove);

                    document.onmouseup = function () {
                        chatWrapElem.removeEventListener("mousemove", onMouseMove);
                        chatWrapElem.onmouseup = null;
                        chatWrapElem.style.zIndex = "";
                    };
                }
            }}
            className={modules["chat-new__chat-header"]}
        >
            <div
                onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    setMoveInfo({ ...moveInfo, down: false });
                }}
                className={modules["chat-new__chat-flex"]}
            >
                <img
                    className={modules["chat-new__chat-avatar"]}
                    src={mainUserInfo?.userPhoto}
                    alt={`${mainUserInfo?.userName ?? ""} avatar`}
                />
                <a
                    className={modules["chat-new__chat-link"]}
                    href={`/clients/list/client/${window.btoa(chatInfo?.phoneNum)}`}
                >
                    {mainUserInfo?.userName ? mainUserInfo?.userName : "username"}
                </a>
            </div>

            <div
                onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    setMoveInfo({ ...moveInfo, down: false });
                }}
                className={modules["chat-new__chat-flex"]}
            >
                <button
                    onClick={() => {
                        setChatBodyHeight(450 === chatBodyHeight ? 0 : 450);
                        setChatIsActive(null === active ? null : false);
                    }}
                    className={modules["chat-new__chat-button"]}
                >
                    <Minimize />
                </button>

                <button
                    onClick={(e: React.MouseEvent) => {
                        e.stopPropagation();
                        dispatch({ type: "REMOVE_FROM_CHAT_QUEUE", payload: chatInfo });
                    }}
                    className={modules["chat-new__chat-button"]}
                >
                    <CloseNew />
                </button>
            </div>
        </div>
    );
};
