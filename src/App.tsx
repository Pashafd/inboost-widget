import { FC, useEffect, useState } from "react";
import { useWebsocketConnect } from "./hooks/useWebsocketConnect";
import MyContext from "./mainContext";
import { useSetDomains } from "./hooks/useSetDomain";
import { ChatIndex } from "./components/chat/chatIndex";
import { useGetTexts } from "./hooks/useGetText";
import { MessageHub } from "./components/hub/messagesHub";
import { StartModal } from "./components/modal/startModal";
import { useAppSelector } from "./hooks/tsReduxHook";

const App: FC = () => {
    const PORT_DEVELOPER = 5053;
    const isChatActive = 0 < useAppSelector(state => state.pChatReducer.listChatInfo)?.length;
    const [domainsIsDownloaded, setDomainsIsDownloaded] = useState(false);
    const connection = useWebsocketConnect(domainsIsDownloaded);
    useSetDomains(setDomainsIsDownloaded, PORT_DEVELOPER);
    useGetTexts();
    const [openModal, changeOpenModal] = useState(false);

    return (
        <MyContext.Provider value={connection}>
            {domainsIsDownloaded ? (
                <>
                    {isChatActive ? <ChatIndex /> : null}
                    <MessageHub changeOpenModal={changeOpenModal} />
                    {openModal ? (
                        <StartModal openModal={openModal} changeOpenModal={changeOpenModal} />
                    ) : null}
                </>
            ) : null}
        </MyContext.Provider>
    );
};

export default App;
