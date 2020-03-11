import { createHttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';

const API = process.env.API || '';

const httpLink = createHttpLink({ uri: API });
const middlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: process.client ? localStorage.getItem(process.env.AUTH_TOKEN) : null,
      'Access-Control-Allow-Origin': '*'
    }
  });
  return forward(operation);
});

export default () => ({
  link: middlewareLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultHttpLink: false
})