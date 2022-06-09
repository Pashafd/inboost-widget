import { useEffect, useState } from "react";
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { getConstructorDomain } from "./useApi";
import { useAppSelector } from "./tsReduxHook";

export const useSignalR = (domainsIsDownloaded: boolean) => {
    const token = useAppSelector(state => state.pReducer.bearerToken);
    const domain = getConstructorDomain();
    const [connection, setConnection] = useState(null);

    useEffect(() => {
        console.log(domainsIsDownloaded, domain, token);
        if (domainsIsDownloaded && token) {
            const newConnection = new HubConnectionBuilder()
                .withUrl(`${domain}/chatHub?access_token=${token}`)
                .withAutomaticReconnect()
                .build();
            setConnection(newConnection);
        }
    }, [token, domain, domainsIsDownloaded]);

    return connection;
};

export const useFacebookSignalR = (): HubConnection => {
    const token = useAppSelector(state => state.pReducer.bearerToken);
    const domain = getConstructorDomain();
    const [connection] = useState(
        new HubConnectionBuilder()
            .withUrl(`${domain}/facebookTokenHub?access_token=${token}`)
            .withAutomaticReconnect()
            .build(),
    );

    return connection;
};
