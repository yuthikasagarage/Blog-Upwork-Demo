import React, { useContext, useEffect } from 'react';
import BlogContext from '../context/blogContext';
import PostCard from '../components/PostCard';

const PostList = () => {
  const blogContext = useContext(BlogContext);

  const { getPosts, blogPosts, loading } = blogContext;

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className='posts'>
      <div className='container'></div>
      <h2 className='h2x'>Articles</h2>
      <p>&nbsp;</p>
      {!loading ? (
        <div className='posts-grid'>
          {blogPosts.map((post, i) => {
            return (
              <PostCard
                key={i}
                title={post.title}
                image={post.image}
                author={post.author}
                date={post.date}
                id={post.id}
              ></PostCard>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default PostList;
