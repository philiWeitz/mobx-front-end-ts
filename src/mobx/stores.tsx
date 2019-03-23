
import SamplesStore from './domain-stores/samples-store';


export interface IStores {
  samples: SamplesStore;
}

// combine stores
const stores : IStores = {
  samples: new SamplesStore(),
};

export default stores;
