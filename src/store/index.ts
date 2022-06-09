import { managerInfoReducer } from "./reducer/managerInfoReducer";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./reducer/authReducer";
import { chatReducer } from "./reducer/chatReducer";
import locale from "./slices/localeSlice";
import chat from "./slices/chatSlice";

const persistConfig = {
    key: "bearerToken",
    storage: storage,
    whitelist: ["bearerToken", "expired_in", "language", "domains"],
};
const persistChatConfig = {
    key: "listChatInfo",
    storage: storage,
};

const pReducer = persistReducer(persistConfig, authReducer);
const pChatReducer = persistReducer(persistChatConfig, chatReducer);

const store = configureStore({
    reducer: {
        pReducer,
        pChatReducer,
        managerInfoReducer,
        locale,
        chat,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
