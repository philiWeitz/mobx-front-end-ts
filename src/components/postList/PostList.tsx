
import * as React from 'react';
import PostModel from '../../model/PostModel';


interface PostListProps {
  posts: PostModel[];
}


const PostList = ({ posts } : PostListProps) => {

  const renderFetchError = () => {
    return <div>Error fetching posts</div>;
  };

  const renderPost = (post) => {
    return (
      <div key={`fetch-post-${post.id}`}>
        <div>{post.title}, votes: {post.votes}</div>
      </div>
    );
  };

  const renderContent = () => {
    if (posts) {
      return (
        <div>
          {posts.map((post) => {
            return renderPost(post);
          })}
        </div>
      );
    }
    return renderFetchError();
  };

  return renderContent();
};

export default PostList;
