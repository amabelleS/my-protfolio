import React from 'react'
import PrevireCard from '../blog-preview-card/PrevireCard';

const PostGrid = ({posts}) => {
  return (
    <ul>
      {posts.map((post) => (
        <PrevireCard post={post} />
      ))}
    </ul>
  );
}

export default PostGrid