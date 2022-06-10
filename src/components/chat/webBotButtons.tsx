import { useAppSelector } from "@/hooks/tsReduxHook";
import { IBtnsGrid, BtnGridEnum } from "@/store/slices/chatSlice";
import { ReactElement, useEffect, useState } from "react";
import { DialogKeyboardButton, MultiLanguageValue } from "./chatIndex";

export const WebBotButtons = ({
    keyboard,
    clickButton,
}: {
    keyboard: DialogKeyboardButton[];
    clickButton: (message: MultiLanguageValue[]) => void;
}): ReactElement => {
    const interfaceLang = useAppSelector(state => state.pReducer.language);
    const [buttons, changeButtons] = useState<IBtnsGrid[]>([]);

    useEffect(() => {
        const buttonsList = keyboard
            ?.sort((a, b) => a?.buttonPosition?.orderCol - b?.buttonPosition?.orderCol)
            ?.map(btn => ({
                id: btn?.id,
                name: btn?.title?.find(l => l.lang === interfaceLang)?.value,
                width: {
                    [2]: BtnGridEnum.threeInRow,
                    [3]: BtnGridEnum.twoInRow,
                    [6]: BtnGridEnum.oneInRow,
                }[btn?.buttonPosition?.col as 2 | 3 | 6],
                text: btn?.title,
            }))
            ?.reduce((acc, cur) => {
                if (-1 !== acc.findIndex(x => x.id === cur)) {
                    return acc;
                }
                return [...acc, cur];
            }, []);

        changeButtons(buttonsList);
    }, [keyboard]);

    return (
        <div className='web-bot__keyboard'>
            {buttons?.map(btn => {
                return (
                    <button
                        key={btn.id}
                        onClick={() => clickButton(btn?.text)}
                        style={{ width: btn.width }}
                        className='text-truncate buttons-position__button'
                    >
                        <span
                            className={`buttons-position__button-text buttons-position__button-text${
                                {
                                    [BtnGridEnum.oneInRow]: "-1",
                                    [BtnGridEnum.twoInRow]: "-2",
                                    [BtnGridEnum.threeInRow]: "-3",
                                }[btn.width]
                            }`}
                        >
                            {btn.name}
                        </span>
                    </button>
                );
            })}
        </div>
    );
};
