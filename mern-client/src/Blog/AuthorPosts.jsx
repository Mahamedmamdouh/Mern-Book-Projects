import { useState } from 'react';
import PostItem from './PostItem';
import DUMMY_POSTS from '../static/data'
const AuthorPosts = () => {
  const [posts,setPosts] = useState(DUMMY_POSTS);
  return (
    <section className='posts'>
          {posts.length>0  ? <div className="grid grid-cols-3 gap-16">
           {
             posts.map(({id,Thumbnail, category, title, decs,authorID}) =>
              <PostItem key={id} postID={id} Thumbnail={Thumbnail} category={category} title={title} description={decs} authorID={authorID}/>)
            }
           </div>:<h2 className='w-full text-center pt-20 block mt-12 font-bold font text-3xl '>No posts Founds</h2>}

        
      </section>
  )
}

export default AuthorPosts