import React from 'react';
import { Link } from 'react-router-dom';
import PostAuthor from './PostAuthor';

const PostItem = ({ postID, Thumbnail, category, title, description, authorID }) => {
      const shortDescription = description.length > 145 ? description.substr(0, 145) + '...' : description;
  const postTitle = title.length > 30 ? title.substr(0, 30) + '...' : title;
  return (
    <div className="bg-white p-2 rounded-lg transition-all duration-300 cursor-default hover:shadow-xl">
      <div className="overflow-hidden rounded-lg h-48">
        <img src={Thumbnail} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="mt-4">
        <Link to={`/Blog/posts/${postID}`} className="text-lg font-bold text-blue-700 hover:underline">
          <h3 className="mb-2">{postTitle}</h3>
        </Link>
        <p className="text-sm">{shortDescription}</p>
        <div className="flex justify-between items-end mt-4">
          <PostAuthor />
          <Link to={`/Blog/posts/categories/${category}`} className="bg-gray-100 p-2 rounded font-semibold text-blue-700 hover:underline text-sm">{category}</Link>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
