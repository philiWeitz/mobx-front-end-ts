
import { observable, action } from 'mobx';
import SampleModel from '../../model/sample-model';

class SamplesStore {

  @observable
  samples: SampleModel[] = [];

  @action
  fetchSamples = () : Promise<void> => {
    console.log('Fetching...');
    return Promise.resolve();
  }

}

export default SamplesStore;
