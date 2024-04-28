
import { Link } from 'react-router-dom'
import avatar1 from '../assets/banner-books/avatar1.jpg'
import avatar2 from '../assets/banner-books/avatar2.jpg'
import avatar3 from '../assets/banner-books/avatar3.jpg'
import avatar4 from '../assets/banner-books/avatar4.jpg'
import avatar5 from '../assets/banner-books/avatar5.jpg'
import { useState } from 'react'

const authorsData=[
  {id:1,avatar:avatar1,name:'Ernest Achiever',posts:3},
  {id:2,avatar:avatar2,name:'jane Doe',posts:5},
  {id:3,avatar:avatar3,name:'Dramani Mahame',posts:0},
  {id:4,avatar:avatar4,name:'Nana Addo',posts:2},
  {id:5,avatar:avatar5,name:'Hajia Bintu',posts:1,}
] 
const Authors = () => {
  const [authors,setAuthors] =useState(authorsData)
  return (
   <section className="authors">
        {authors.length> 0 ?<div className="grid grid-cols-4 gap-12">
          {
       authors.map(({id,avatar,name,posts})=>{
        return <Link key={id} to={`/Blog/posts/users/${id}` } 
        className='bg-white p-4 rounded transition duration-300 ease-in flex gap-4 hover:shadow-md'>
          <div className="w-20 h-20 rounded-full border-4 border-blue-400 overflow-hidden">
           <img src={avatar} alt={`Image of${name}`}/>
          </div>
          <div className="author__info">
            <h4>{name}</h4>
            <p className='mt-4'>{posts}</p>
          </div>
        </Link>

       })
      }
        </div> :<h2 className='w-full text-center pt-20 block mt-12 font-bold font text-3xl '> No users/authors found.</h2>}
      
   </section>
  )
}

export default Authors