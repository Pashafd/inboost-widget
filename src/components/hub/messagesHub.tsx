import { MessageCircle } from "@/assets/messageCircle";
import React, { ReactElement, useState } from "react";
import { Viber } from "@/assets/viber";
import { Telegram } from "@/assets/telegram";
import { Instagram } from "@/assets/instagram";
import { Facebook } from "@/assets/facebook";
// import "./circle-menu.scss";
import { Web } from "@/assets/web";
import { MessageCircleActive } from "@/assets/messageCircleActive";
import "./messagesHub";

export const MessageHub = ({
    changeOpenModal,
    changeActive,
    active,
}: {
    changeOpenModal: (v: boolean) => void;
    changeActive: (v: boolean) => void;
    active: boolean;
}): ReactElement => {
    const [connectedMessenger] = useState(["instagram", "viber", "telegram", "facebook", "web"]);
    return (
        <div className={`message-hub${active ? " message-hub_active" : ""}`}>
            <div className='message-hub__icons'>
                {active
                    ? connectedMessenger.map(messenger => {
                          const icon = {
                              viber: <Viber />,
                              telegram: <Telegram />,
                              instagram: <Instagram />,
                              facebook: <Facebook />,
                              web: <Web />,
                          }[messenger];

                          return React.cloneElement(icon, { changeOpenModal: () => changeOpenModal(true) });
                      })
                    : null}
            </div>

            <div onClick={() => changeActive(!active)}>
                {active ? <MessageCircleActive /> : <MessageCircle />}
            </div>

            {/* <div className={`menu${active ? " menu-open" : ""}`}>
                <MessageCircle
                    onClick={() => changeActive(!active)}
                    active={active}
                    className='btn btn-main two'
                /> */}

            {/* {connectedMessenger.map(messenger => {
                    const icon = {
                        viber: <Viber />,
                        telegram: <Telegram />,
                        instagram: <Instagram />,
                        facebook: <Facebook />,
                        web: <Web />,
                    }[messenger];

                    return React.cloneElement(icon ?? <div></div>, {
                        changeOpenModal: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                            e.stopPropagation();
                            changeOpenModal(true);
                        },
                        className: "btn",
                    });
                })} */}
            {/* </div> */}
        </div>
    );
};
