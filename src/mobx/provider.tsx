/* global window */

import * as React from 'react';

import { IStores } from './stores';
import { Router } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import { Provider as MobxProvider } from 'mobx-react';
import { SynchronizedHistory } from 'mobx-react-router';
import { enableLogging, IMobXLoggerConfig } from 'mobx-logger';
import DevTools, { setLogEnabled, setUpdatesEnabled, setGraphEnabled } from 'mobx-react-devtools';


import App from '../modules/app/AppView';
import graphQLClient from '../graphql/graphQLClient';


const mobxLoggerConfig : IMobXLoggerConfig = {
  predicate: () => true,
  action: true,
  reaction: true,
  transaction: true,
  compute: true,
};


export interface ProviderProps { stores: IStores; history: SynchronizedHistory; }


const Provider = ({ stores, history } : ProviderProps) => {

  const renderDevelopmentProvider = () => {
    // configure the mobX logger
    enableLogging(mobxLoggerConfig);
    // configure mobX dev tools
    setLogEnabled(false);
    setUpdatesEnabled(false);
    setGraphEnabled(false);

    // expose the stores globally for dev purpose
    (window as any).stores = stores;

    return (
      <ApolloProvider client={graphQLClient}>
        <MobxProvider {...stores}>
          <Router history={history}>
            <div>
              <App />
              <DevTools />
            </div>
          </Router>
        </MobxProvider>
      </ApolloProvider>
    );
  };

  const renderProductionProvider = () => {
    return (
      <ApolloProvider client={graphQLClient}>
        <MobxProvider {...stores}>
          <Router history={history}>
            <App />
          </Router>
        </MobxProvider>
      </ApolloProvider>
    );
  };

  const renderProvider = () => {
    if (process.env.NODE_ENV !== 'production') {
      return renderDevelopmentProvider();
    }
    return renderProductionProvider();
  };

  return renderProvider();

};

export default Provider;
