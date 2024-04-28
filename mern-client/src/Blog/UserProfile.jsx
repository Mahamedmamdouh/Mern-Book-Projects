
import { useState } from 'react';
import Avatar from '../assets/banner-books/avatar15.jpg';
import { Link } from 'react-router-dom';
import { FaCheck, FaEdit } from 'react-icons/fa';

const UserProfile = () => {
  const [avatar, setAvatar] = useState(Avatar);
  const [name,setName]=useState()
  const [email,setEmail]=useState()

  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-20">
      <div className="container max-w-screen-md absolute top-20">
        <div className="flex justify-center mb-6">
          <Link to={`/Blog/myposts/karl`} className='btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            My posts
          </Link>
        </div>
        <div className="profile__details flex flex-col items-center w-full top-0">
          <div className="avatar__wrapper relative top-0">
            <div className=' flex justify-center items-center border-4 border-white rounded-full overflow-hidden w-48 h-48 top-0'>
              <img src={avatar} alt="" className="w-full h-full object-cover" />
            </div>
            {/* Form to update avatar */}
            <form className="absolute">
              <input type="file" name='avatar' id='avatar' onChange={e => setAvatar(e.target.files[0])} accept='png,jpg,jpeg'
               className="hidden" />
              <label htmlFor="avatar"  style={{position:"absolute", bottom: '1rem', left:'12rem' }} 
              className="cursor-pointer w-8 h-8 rounded-full bg-blue-900 text-white flex justify-center items-center">
                <FaEdit /></label>
            </form>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 absolute bottom-2 right-6 rounded-full'>
             <FaCheck/>
            </button>
          </div>
          <h1 className="text-2xl font-bold mt-6">Ernest achiever</h1>
          {/* from to update user details*/}
          <form action="" className="w-full mx-auto grid place-items-center gap-3 p-3">
            <p className="bg-red-500 text-white text-sm font-bold p-2 rounded w-full mb-4 text-center">This is an error message</p>
            <input type="text" placeholder="Full Name" className="w-full rounded resize-none px-4 py-2 shadow-md" value={name} onChange={e => setName(e.target.value)} />
            <input type="email" placeholder="Email" className="w-full rounded resize-none px-4 py-2 shadow-md" value={email} onChange={e => setEmail(e.target.value)} />
            <button type="submit" className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update details</button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default UserProfile;





