import { ReactElement, useState } from "react";
import "./start-modal.scss";
import PhoneInput from "react-phone-number-input";
import "./input.scss";
import { Close } from "@/assets/close";
import { useAppDispatch, useAppSelector } from "@/hooks/tsReduxHook";
import { useConstructorApi } from "@/hooks/useApi";

export const StartModal = ({
    changeOpenModal,
    closeMenu,
}: {
    changeOpenModal: (v: boolean) => void;
    closeMenu: (v: boolean) => void;
    openModal: boolean;
}): ReactElement => {
    const dispatch = useAppDispatch();
    const api = useConstructorApi();
    const [value, changeValue] = useState("");
    const managerInfo = useAppSelector(state => state.managerInfoReducer);

    const startChat = async () => {
        // try {
        //     await api.post("WebBot/webhook", {
        //         userPhoneNumber: value,
        //         userName: managerInfo?.firstname ?? "user",
        //         action: "auth",
        //     });
        // } catch (err) {
        //     console.error(err);
        // }

        const curChatInfo = {
            userName: "OPERATOR",
            phoneNum: "",
            lastUserChatId: "",
            avatarUrl:
                "https://ru.freepik.com/premium-vector/call-center-operator-avatar-man-with-a-headset-flat-style-vector-illustration_24668054.htm",
        };

        dispatch({ type: "ADD_TO_CHAT_QUEUE", payload: curChatInfo });
        changeOpenModal(false);
        closeMenu(true);
    };

    return (
        <div onClick={() => changeOpenModal(false)} className='start-modal__overlay'>
            <Close />

            <div onClick={e => e.stopPropagation()} className='start-modal'>
                <h2 className='start-modal__title'>Вебчат з співробітником</h2>
                <p className='start-modal__text'>
                    Щоб почати спікування з співробітником, вкажіть свій номер телефону:
                </p>
                <PhoneInput
                    placeholder='+38 ___ __ __'
                    defaultCountry='UA'
                    value={value}
                    onChange={changeValue}
                    initialValueFormat='national'
                />
                <button
                    onClick={() => {
                        startChat();
                    }}
                    className='start-modal__button'
                >
                    почати
                </button>
            </div>
        </div>
    );
};
