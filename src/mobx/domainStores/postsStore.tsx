
import { observable, action } from 'mobx';

import query from '../../graphql/query';
import PostModel from '../../model/PostModel';
import graphQLClient from '../../graphql/graphQLClient';


interface PostData {
  posts: string[];
}

class PostsStore {

  @observable
  posts: PostModel[] = [];

  @action
  fetchPosts = () : any => {
    return graphQLClient.query({
      query: query.getPostsQuery(),
      fetchPolicy: 'network-only',

    }).then(({ data }) => {
      this.posts = (data as PostData).posts.map(json => new PostModel(json));
    });
  }

}

export default PostsStore;
