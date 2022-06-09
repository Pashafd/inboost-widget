import { Languages } from "@/components/chat/chatIndex";
import { LocalTextInterface, setTexts } from "@/store/slices/localeSlice";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./tsReduxHook";
import { useConstructorApi } from "./useApi";

//  "af", "sq", "ar-SA", "ar-IQ", "ar-EG", "ar-LY", "ar-DZ", "ar-MA", "ar-TN", "ar-OM",
//  "ar-YE", "ar-SY", "ar-JO", "ar-LB", "ar-KW", "ar-AE", "ar-BH", "ar-QA", "eu", "bg",
//  "be", "ca", "zh-TW", "zh-CN", "zh-HK", "zh-SG", "hr", "cs", "da", "nl", "nl-BE", "en",
//  "en-US", "en-EG", "en-AU", "en-GB", "en-CA", "en-NZ", "en-IE", "en-ZA", "en-JM",
//  "en-BZ", "en-TT", "et", "fo", "fa", "fi", "fr", "fr-BE", "fr-CA", "fr-CH", "fr-LU",
//  "gd", "gd-IE", "de", "de-CH", "de-AT", "de-LU", "de-LI", "el", "he", "hi", "hu",
//  "is", "id", "it", "it-CH", "ja", "ko", "lv", "lt", "mk", "mt", "no", "pl",
//  "pt-BR", "pt", "rm", "ro", "ro-MO", "ru", "ru-MI", "sz", "sr", "sk", "sl", "sb",
//  "es", "es-AR", "es-GT", "es-CR", "es-PA", "es-DO", "es-MX", "es-VE", "es-CO",
//  "es-PE", "es-EC", "es-CL", "es-UY", "es-PY", "es-BO", "es-SV", "es-HN", "es-NI",
//  "es-PR", "sx", "sv", "sv-FI", "th", "ts", "tn", "tr", "uk", "ur", "ve", "vi", "xh",
//  "ji", "zu"

export const useGetTexts = (): void => {
    const interfaceLang = useAppSelector(state => state.pReducer.language);
    const domain = useAppSelector(state => state.pReducer.domains.constructorApiDomain);
    const [isSended, setIsSended] = useState(false);
    const dispatch = useDispatch();
    const api = useConstructorApi();

    useEffect(() => {
        const browserLang = {
            ["uk"]: Languages.UA,
            ["uk-UA"]: Languages.UA,
            ["UA"]: Languages.UA,
            ["ru"]: Languages.RU,
            ["ru-MI"]: Languages.RU,
            ["ru-RU"]: Languages.RU,
            ["RU"]: Languages.RU,
            ["en"]: Languages.EN,
            ["en-EN"]: Languages.EN,
            ["EN"]: Languages.EN,
        }[navigator.language];

        if (!interfaceLang) {
            dispatch({ type: "SET_LANGUAGE", payload: browserLang ?? Languages.EN });
        }

        if (domain && !isSended) {
            setIsSended(true);
            api.post(`getAP/getAdminPanelTextSelect`, {
                FrontLang: interfaceLang ?? browserLang,
            })
                .then((res: AxiosResponse<LocalTextInterface[]>) => res.data)
                .then(data => {
                    dispatch(setTexts(data));
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, [domain]);
};
