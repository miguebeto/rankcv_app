import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: "https://rickandmortyapi.com/graphql",
    }),
});
