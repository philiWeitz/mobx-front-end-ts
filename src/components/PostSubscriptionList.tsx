
import * as React from 'react';

import { graphql } from 'react-apollo';

import subscription from '../graphql/subscription';


const PostSubscriptionList = ({ data: { postUpVoted, loading } }) => {

  const renderLoading = () => {
    return <div>Loading...</div>;
  };

  const renderPosts = () => {
    if (postUpVoted) {
      return (
        <div>
          <div>{postUpVoted.title}, votes: {postUpVoted.votes}</div>
        </div>
      );
    }
    return null;
  };

  const renderContent = () => {
    return (
      <div>
        <h2>GraphQL Subscription Example</h2>
        {loading ? renderLoading() : renderPosts()}
        <p/>
      </div>
    );
  };

  return renderContent();
};

export default graphql(subscription.subscribePostsQuery(1))(PostSubscriptionList as any);
