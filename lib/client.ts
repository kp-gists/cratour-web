import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri: 'https://cra-strapi-production-4d5a.up.railway.app/graphql',
	cache: new InMemoryCache(),
});
