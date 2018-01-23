
import * as React from 'react';
import { inject, observer } from 'mobx-react';

import Hello from '../../components/Hello';
import SampleModel from '../../model/SampleModel';
import SamplesStore from '../../mobx/domainStores/samplesStore';


// add injected props here
interface InjectedSampleViewProps {
  samples: SamplesStore;
}


@inject('samples')
@observer
class SamplesView extends React.Component {

  private get injected() : InjectedSampleViewProps {
    return this.props as InjectedSampleViewProps;
  }

  renderSample = (sample : SampleModel) => {
    return (
      <div key={`${sample.name}-${sample.rand}`}>
        <div>{sample.name}</div>
        <div>{sample.rand}</div>
      </div>
    );
  }

  render() {
    const { samples } = this.injected.samples;
    return (
      <div>
        <Hello />
        <div>Samples</div>
        <div>
          { samples.map(this.renderSample)}
        </div>
      </div>
    );
  }
}

export default SamplesView;
