
import { AxiosPromise } from 'axios';

import mockyApi from './api';
import SampleModel from '../model/SampleModel';


const ApiAction = {

  fetchSamples: () : AxiosPromise<SampleModel[]> => {
    return mockyApi.get('/v2/5a561fe62f00002a2ebeeca0');
  },

};

export default ApiAction;
