import { useState } from 'react'
import DUMMY_POSTS from '../static/data'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);

  return (
    <section className='dashboard grid'>
      {posts.length ? (
        <div className='container grid grid-rows-1 gap-7 md:grid-rows-2 lg:grid-rows-3'>
          {posts.map(post => (
            <article className='dashboard__post bg-white p-3 rounded-lg flex justify-between items-center gap-4' key={post.id}>
              <div className="dashboard__post-info flex items-center gap-8 w-full">
                <div className="dashboard__post-thumbnail w-16 h-16 rounded overflow-hidden">
                  <img src={post.Thumbnail} alt="" className="w-full h-full object-cover" />
                </div>
                <h5>{post.title}</h5>
              </div>
              <div className="dashboard__post-actions flex gap-4">
  <Link to={`/Blog/posts/${post.id}`} className='btn bg-black text-white transition duration-300  hover:bg-slate-900'>
    View
  </Link>
  <Link to={`/Blog/posts/${post.id}/edit`} className='btn bg-blue-500 text-white hover:bg-blue-600  transition duration-300'>
    Edit
  </Link>
  <Link to={`/Blog/posts/${post.id}/delete`} className='btn bg-red-500 text-white hover:bg-red-600 transition duration-300'>
    Delete
  </Link>
</div>
            </article>
          ))}
        </div>
      ) : (
        <h2 className='center'>You have no posts yet.</h2>
      )}
    </section>
  );
}

export default Dashboard;
