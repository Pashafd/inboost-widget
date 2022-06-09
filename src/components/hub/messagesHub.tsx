import { MessageCircle } from "@/assets/messageCircle";
import React, { ReactElement, useState } from "react";
import { MessageCircleActive } from "@/assets/messageCircleActive";
import { Viber } from "@/assets/viber";
import { Telegram } from "@/assets/telegram";
import { Instagram } from "@/assets/instagram";
import { Facebook } from "@/assets/facebook";
import "../../styles/message-hub.scss";
import { Web } from "@/assets/web";

export const MessageHub = ({ changeOpenModal }: { changeOpenModal: (v: boolean) => void }): ReactElement => {
    const [active, changeActive] = useState(false);
    const [connectedMessenger] = useState(["viber", "telegram", "instagram", "facebook", "web"]);
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
        </div>
    );
};
