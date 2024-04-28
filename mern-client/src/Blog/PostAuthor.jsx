import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../assets/banner-books/avatar1.jpg';

const PostAuthor = () => {
  return (
    <div className="flex items-start">
      <Link to={`/Blog/posts/users/karl`} className="flex items-center gap-4">
        <div className="w-10 h-10 rounded overflow-hidden">
          <img src={Avatar} alt="" className="w-full h-full object-cover" />
        </div>
        <div>
          <h5 className="text-sm font-medium">By: Ernest Achiever</h5>
          <small className="text-xs text-gray-600">Just Now</small>
        </div>
      </Link>
    </div>
  );
};

export default PostAuthor;

