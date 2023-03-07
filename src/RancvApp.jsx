import React from "react";
import { AppRouter } from "./router/AppRouter";
import { ApolloProvider } from "@apollo/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { client } from "./apollo/apolloClient";

export const RancvApp = () => {
    return (
        <Provider store={store}>
            <HashRouter>
                <ApolloProvider client={client}>
                    <AppRouter />
                </ApolloProvider>
            </HashRouter>
        </Provider>
    );
};
