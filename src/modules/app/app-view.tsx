
import * as React from 'react';
import { inject, observer } from 'mobx-react';

import SamplesStore from '../../mobx/domain-stores/samples-store';
import intervalUtil from '../../util/interval-util';
import { Hello } from '../../components';
import * as style from './styles.scss';

const REFRESH_INTERVAL = 20 * 1000;

// add public props here
export interface AppViewProps {

}

// add injected props here
interface InjectedAppViewProps extends AppViewProps {
  samples: SamplesStore;
}

@inject('samples')
@observer
class AppView extends React.Component<AppViewProps, any> {

  private get injected() : InjectedAppViewProps {
    return this.props as InjectedAppViewProps;
  }

  componentWillMount() {
    const { fetchSamples } = this.injected.samples!;

    // add a refresh interval
    intervalUtil.addInterval(
      intervalUtil.FETCH_SAMPLES, fetchSamples, REFRESH_INTERVAL);
  }

  componentWillUnmount() {
    // remove a refresh interval
    intervalUtil.cancelInterval(intervalUtil.FETCH_SAMPLES);
  }

  render() {
    return (
      <div className={style.page}>
        <p>hello</p>
        <Hello />
      </div>
    );
  }
}


export default AppView;
