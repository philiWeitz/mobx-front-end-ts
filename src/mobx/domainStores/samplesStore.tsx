
import { observable, action } from 'mobx';

import apiAction from '../../api/apiAction';
import SampleModel from '../../model/SampleModel';


class SamplesStore {

  @observable
  samples: SampleModel[] = [];

  @action
  fetchSamples = () : Promise<void> => {
    return apiAction.fetchSamples().then(({ data: samples }) => {
      this.samples = samples.map(json => new SampleModel(json));
    });
  }

}

export default SamplesStore;
