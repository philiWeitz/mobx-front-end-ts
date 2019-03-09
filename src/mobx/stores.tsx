
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import SamplesStore from './domain-stores/samples-store';


// create router
const RoutingStore = new RouterStore();

// create history
const browserHistory = createBrowserHistory();
export const history = syncHistoryWithStore(browserHistory, RoutingStore);


export interface IStores {
  samples: SamplesStore;
  routing: RouterStore;
}

// combine stores
const stores : IStores = {
  samples: new SamplesStore(),
  routing: RoutingStore,
};

export default stores;
