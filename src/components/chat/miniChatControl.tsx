import { useLocaleText } from "@/hooks/useLocaleText";
import { ReactElement } from "react";
import { ButtonDownSvg } from "../../assets/buttonDownSvg";
import modules from "@/styles/global.module.scss";

export const MiniChatControl = ({
    active,
    setChatIsActive,
    scrollToBot,
    showBtn,
    children,
    start,
}: {
    active: boolean;
    setChatIsActive: (arg0: boolean) => void;
    scrollToBot: () => void;
    showBtn: boolean;
    start?: () => void;
    children?: ReactElement;
}): ReactElement => {
    const { t } = useLocaleText();
    return (
        <div className={modules["chat-control"]}>
            {showBtn ? <ButtonDownSvg onClick={scrollToBot} className={modules["chat-new__down"]} /> : null}
            {children ? children : null}

            <div className={modules["chat-control__wrap"]}>
                <p className={modules["chat-control__label"]}>
                    {active ? t("InfoToEndOnlineChat") : t("InfoToStartOnlineChat")}
                </p>
                <button
                    onClick={() => {
                        if (!active) {
                            start();
                        }
                        setChatIsActive(!active);
                    }}
                    className={`${modules["chat-control__button"]}${
                        active ? ` ${modules["chat-control__button_active"]}` : ""
                    }`}
                >
                    {active ? t("ButtonToEndOnlineChat") : t("ButtonToStartOnlineChat")}
                </button>
            </div>
        </div>
    );
};
