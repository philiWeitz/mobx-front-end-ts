
import ApolloClient from 'apollo-client';
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { OperationDefinitionNode } from 'graphql';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getMainDefinition } from 'apollo-utilities';

import config from '../config';


// Create an http link:
const httpLink = new HttpLink({
  uri: config.GRAPH_QL_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: config.GRAPH_QL_SUBSCRIPTION_URL,
  options: {
    reconnect: true,
  },
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = (getMainDefinition(query) as OperationDefinitionNode);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);


const graphQLClient = new ApolloClient({
  link,
  cache: new InMemoryCache().restore((window as any).__APOLLO_STATE__),
});

export default graphQLClient;
