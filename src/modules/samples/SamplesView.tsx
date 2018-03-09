
import * as React from 'react';
import { inject, observer } from 'mobx-react';

import SampleModel from '../../model/SampleModel';
import PostsStore from '../../mobx/domainStores/postsStore';
import SamplesStore from '../../mobx/domainStores/samplesStore';

import { Hello, PostList, PostSubscriptionList } from '../../components';

const styles = require('./styles.scss');


// add injected props here
interface InjectedSampleViewProps {
  posts: PostsStore;
  samples: SamplesStore;
}


@inject('posts')
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
        <h2>GraphQL Fetch data</h2>
        <div className={styles.sampleContainer}>
          <PostList posts={this.injected.posts.posts} />
        </div>
        <h2>GraphQL Subscription data</h2>
        <div className={styles.sampleContainer}>
          <PostSubscriptionList />
        </div>
        <h2>Samples from API</h2>
        <div className={styles.sampleContainer}>
          { samples.map(this.renderSample)}
        </div>
      </div>
    );
  }
}

export default SamplesView;
