import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api.cosport.ru/v1/graphql',
    cache: new InMemoryCache(),
});