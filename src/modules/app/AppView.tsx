
import * as React from 'react';
import { Switch, Route, withRouter } from 'react-router';
import { inject, observer } from 'mobx-react';
import { RouterStore } from 'mobx-react-router';

import { initI18n, t } from '../../util/i18n';
import SamplesView from '../samples/SamplesView';
import intervalUtil from '../../util/intervalUtil';
import SamplesStore from '../../mobx/domainStores/samplesStore';

const REFRESH_INTERVAL = 5 * 1000;


// add public props here
export interface AppViewProps {

}

// add injected props here
interface InjectedAppViewProps extends AppViewProps {
  samples: SamplesStore;
  routing: RouterStore;
}


@withRouter
@inject('routing')
@inject('samples')
@observer
class AppView extends React.Component<AppViewProps, any> {

  private get injected() : InjectedAppViewProps {
    return this.props as InjectedAppViewProps;
  }

  componentWillMount() {
    const { fetchSamples } = this.injected.samples!;

    // set the localisation
    initI18n(() => {});

    // add a refresh interval
    intervalUtil.addInterval(
      intervalUtil.FETCH_SAMPLES, fetchSamples, REFRESH_INTERVAL);
  }

  componentWillUnmount() {
    // remove a refresh interval
    intervalUtil.cancelInterval(intervalUtil.FETCH_SAMPLES);
  }

  render() {
    const { location, push, goBack } = this.injected.routing!;

    return (
      <div>
        <div>HEADER</div>

        <p>{t('hello')}</p>

        <div>
          <span>Current pathname: {location.pathname}</span>
          <button onClick={() => push('/test')}>Change url</button>
          <button onClick={() => goBack()}>Go Back</button>
        </div>

        <main>
          <Switch>
            <Route exact path="/test" component={SamplesView} />
          </Switch>
        </main>
      </div>
    );
  }
}


export default AppView;
