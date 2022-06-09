import { useEffect } from "react";
import uuid from "uuid-browser/v4";
import { useAppDispatch } from "./tsReduxHook";

export const useSetDomains = (
    setDomainsIsDownloaded: React.Dispatch<React.SetStateAction<boolean>>,
    portForDevelop: 5053 | 5059,
): void => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        fetch(`/json-config/config.json?key=${uuid()}`)
            .then(res => res.json())
            .then(res => {
                dispatch({ type: "SET_DOMAINS", payload: { domains: res } });
                setDomainsIsDownloaded(true);
            })
            .catch(() => {
                if ("localhost" === location.hostname || -1 < location.hostname.indexOf("ngrok.io")) {
                    dispatch({
                        type: "SET_DOMAINS",
                        payload: {
                            domains: {
                                constructorApiDomain: `https://mhp.inboost.ai:${portForDevelop}`,
                                appApiDomain: "https://pharma.inboost.ai:11132",
                                websocketDomain: "https://mhp.inboost.ai:5053",
                            },
                        },
                    });
                    setDomainsIsDownloaded(true);
                } else {
                    alert("He знайдено файл налаштувань.");
                }
            });
    }, []);
};
