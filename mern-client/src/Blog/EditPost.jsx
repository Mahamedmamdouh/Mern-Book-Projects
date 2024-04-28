import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditPost = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Uncategorized');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState('');

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ]
  };

  const formats = [
    'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent', 'link', 'image'
  ];

  const POST_CATEGORIES = ['Agriculture', 'Business', 'Education', 'Entertainment', 'Art', 'Investment', 'Uncategorized', 'Weather'];

  return (
    <section className="create-post w-1/2 mx-auto">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Edit Post</h2>
        <p className="bg-red-500 text-white text-sm font-bold p-2 rounded mb-4">This is an error message</p>
        <form action="form create-post__form" className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="title" className="block mb-2"></label>
            <input type="text" id="title" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className="w-full px-4 py-2 rounded border" />
          </div>
          <div>
            <label htmlFor="category" className="block mb-2"></label>
            <select id="category" value={category} onChange={e => setCategory(e.target.value)} className="w-full px-4 py-2 rounded border">
              {POST_CATEGORIES.map(cat => <option key={cat}>{cat}</option>)}
            </select>
          </div>
          <div className="col-span-2">
            <label htmlFor="description" className="block mb-2"></label>
            <div className="quill-editor bg-white rounded-lg overflow-hidden h-40 shadow-md border-none ">
              <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription} />
            </div>
          </div>
          <div>
            <label htmlFor="thumbnail" className="block mb-2"></label>
            <input type="file" id="thumbnail" onChange={e => setThumbnail(e.target.files[0])} accept="png,jpg,jpeg" className="border" />
          </div>
          <div className="col-span-2">
            <button type="submit" className=" bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded ">Create</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EditPost;





/*import { useState } from 'react';
import PostItem from './PostItem';
import DUMMY_POSTS from '../static/data'

const CategoryPosts = () => {
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

export default CategoryPosts
*/
