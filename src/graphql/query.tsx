
import gql from 'graphql-tag';


abstract class Query {

  static getPostsQuery = () => gql(`
    query allPosts {
      posts {
        id
        title
        votes
      }
    }
  `)

}

export default Query;
