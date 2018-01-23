
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import SamplesStore from './domainStores/samplesStore';
import GlobalAppUIStore from './uiStores/globalAppUIStore';


// create router
const RoutingStore = new RouterStore();

// create history
const browserHistory = createBrowserHistory();
export const history = syncHistoryWithStore(browserHistory, RoutingStore);


export interface IStores {
  samples: SamplesStore;
  appUIState: GlobalAppUIStore;
  routing: RouterStore;
}

// combine stores
const stores : IStores = {
  samples: new SamplesStore(),
  appUIState: new GlobalAppUIStore(),
  routing: RoutingStore,
};

export default stores;
