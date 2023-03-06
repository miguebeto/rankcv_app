import { AppRouter } from "./router/AppRouter";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://rickandmortyapi.com/graphql",
  }),
});

export const RancvApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <AppRouter />
        </ApolloProvider>
      </BrowserRouter>
    </Provider>
  );
};
