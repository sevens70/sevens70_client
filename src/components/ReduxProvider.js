"use client"
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react'
import { store } from "../lib/store";

let persistor = persistStore(store)

export const ReduxProvider = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            {children}
            </PersistGate>
        </Provider>
    )
};