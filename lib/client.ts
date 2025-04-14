import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri: 'https://test-cms-strapi-cra-tour-production.up.railway.app/graphql',
	cache: new InMemoryCache(),
});
