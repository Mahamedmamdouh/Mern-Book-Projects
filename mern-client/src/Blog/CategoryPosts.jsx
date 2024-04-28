import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostItem from './PostItem';
import DUMMY_POSTS from '../static/data';

const CategoryPosts = () => {
  const { category: selectedCategory } = useParams(); // Extracting category from URL params
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Filter posts based on the selected category
    const filteredPosts = DUMMY_POSTS.filter((post) => post.category === selectedCategory);
    setPosts(filteredPosts);
  }, [selectedCategory]); // Update posts when selectedCategory changes

  return (
    <section className='posts'>
      {posts.length > 0 ? (
        <div className="grid grid-cols-3 gap-16">
          {posts.map(({ id, Thumbnail, category, title, decs, authorID }) => (
            <PostItem key={id} postID={id} Thumbnail={Thumbnail} category={category} title={title} description={decs} authorID={authorID} />
          ))}
        </div>
      ) : (
        <h2 className='w-full text-center pt-20 block mt-12 font-bold font text-3xl '>No posts Found</h2>
      )}
    </section>
  );
};

export default CategoryPosts;


