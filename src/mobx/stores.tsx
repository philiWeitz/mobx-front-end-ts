
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import PostsStore from './domainStores/postsStore';
import SamplesStore from './domainStores/samplesStore';
import GlobalAppUIStore from './uiStores/globalAppUIStore';


// create router
const RoutingStore = new RouterStore();

// create history
const browserHistory = createBrowserHistory();
export const history = syncHistoryWithStore(browserHistory, RoutingStore);


export interface IStores {
  posts: PostsStore;
  samples: SamplesStore;
  appUIState: GlobalAppUIStore;
  routing: RouterStore;
}

// combine stores
const stores : IStores = {
  posts: new PostsStore(),
  samples: new SamplesStore(),
  appUIState: new GlobalAppUIStore(),
  routing: RoutingStore,
};

export default stores;
