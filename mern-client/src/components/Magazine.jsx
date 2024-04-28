import React from 'react';
import img1 from '../assets/banner-books/magazine1.jpg'
import img2 from '../assets/banner-books/magazine2.jpg'
import img3 from '../assets/banner-books/magazine3.jpg'
import img4 from '../assets/banner-books/magazine4.jpg'
import img5 from '../assets/banner-books/magazine5.jpg'
import img6 from '../assets/banner-books/magazine6.jpg'
import img7 from '../assets/banner-books/magazine7.jpg'
import img8 from '../assets/banner-books/magazine8.jpg'
import img9 from '../assets/banner-books/magazine9.jpg'

const Magazine = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36 ">
      <h1 className="text-3xl font-bold mb-8 text-center">All Magazines</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Example magazine items */}
        <div className="aspect-w-2 aspect-h-3">
        <a href="https://www.barnesandnoble.com/w/magazine-scientific-american-one-year-subscription/15316151;jsessionid=B96353964C6EF3B42D3DC648785332A5.prodny_store01-atgap05?ean=2000003285112" target="_blank" rel="noopener noreferrer" className="hover:no-underline">
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img className="w-full h-full object-cover" src={img1} alt="Magazine 1" />
          
             <div className="p-6 h-40">
            <h2 className="text-xl font-bold mb-2">Scientific American </h2>
            <p className="text-gray-700">Scientific American covers the most important and exciting research, ideas and knowledge in science.</p>
          </div>
            
          </div>
         </a>
        </div>
        <div className='aspect-w-2 aspect-h-3'>
        <a href="https://www.barnesandnoble.com/w/magazine-smithsonian-one-year-subscription/18097137;jsessionid=B96353964C6EF3B42D3DC648785332A5.prodny_store01-atgap05?ean=2000003285204"
         target="_blank" rel="noopener noreferrer" className="hover:no-underline">
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img className="w-full h-full object-cover" src={img2} alt="Magazine 2" />
          <div className="p-6 h-40">
            <h2 className="text-xl font-bold mb-2"> Smithsonian </h2>
            <p className="text-gray-700">Smithsonian Magazine chronicles the arts, environment, sciences and popular.</p>
          </div>
        </div>
       </a>
        </div>

       <div className='aspect-w-2 aspect-h-3'>
        <a href="https://www.barnesandnoble.com/w/magazine-horse-illustrated-one-year-subscription/15316254;jsessionid=B96353964C6EF3B42D3DC648785332A5.prodny_store01-atgap05?ean=2000003286317" target="_blank" rel="noopener noreferrer" className="hover:no-underline">
       <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img className="w-full h-full object-cover" src={img3} alt="Magazine 3" />
          <div className="p-6 h-40">
            <h2 className="text-xl font-bold mb-2">Horse Illustrated</h2>
            <p className="text-gray-700">Horse Illustrated magazine promotes sensible, intelligent horse management through informative health care, medical.</p>
          </div>
        </div>
        </a>
       </div>

       <div className='aspect-w-2 aspect-h-3'>
       <a href="https://www.barnesandnoble.com/w/magazine-texas-parks-wildlife-one-year-subscription/15316514;jsessionid=B96353964C6EF3B42D3DC648785332A5.prodny_store01-atgap05?ean=2000003289059" target="_blank" rel="noopener noreferrer" className="hover:no-underline">
       <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img className="w-full h-full object-cover" src={img4} alt="Magazine 4" />
          <div className="p-6 h-40">
            <h2 className="text-xl font-bold mb-2">Texas Parks & Wildlife</h2>
            <p className="text-gray-700">Texas Parks & Wildlife magazine is your guide to the great Texas outdoor.</p>
          </div>
        </div>
        </a>
       </div>
       
       <div className='aspect-w-2 aspect-h-3'>
       <a href="https://www.barnesandnoble.com/w/magazine-reptiles-one-year-subscription/15316799?ean=2000003293162" target="_blank" rel="noopener noreferrer" className="hover:no-underline">
       <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img className="w-full h-full object-cover" src={img5} alt="Magazine 5" />
          <div className="p-6 h-48">
            <h2 className="text-xl font-bold mb-2">Reptiles</h2>
            <p className="text-gray-700">Reptiles Magazine is for reptile and amphibian owners and enthusiasts.</p>
          </div>
        </div>
        </a>
       </div>
       
        <div className='aspect-w-2 aspect-h-3'>
        <a href="https://www.barnesandnoble.com/w/magazine-national-geographic-one-year-subscription/19133229;jsessionid=B96353964C6EF3B42D3DC648785332A5.prodny_store01-atgap05?ean=2000003471034" target="_blank" rel="noopener noreferrer" className="hover:no-underline">
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img className="w-full h-full object-cover" src={img6} alt="Magazine 6" />
          <div className="p-6 h-40">
            <h2 className="text-xl font-bold mb-2">National Geographic</h2>
            <p className="text-gray-700">National Geographic magazine gives you a rare look at the drama of exquisite maps.</p>
          </div>
        </div>
        </a>
        </div>
            
    
     

       <div className='aspect-w-2 aspect-h-3'>
       <a href="https://www.barnesandnoble.com/w/popular-mechanics-hearst/1015746280?ean=2940000982877" target="_blank" rel="noopener noreferrer" className="hover:no-underline">
       <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img className="w-full h-full object-cover" src={img8} alt="Magazine 8" />
          <div className="p-6 h-38">
            <h2 className="text-xl font-bold mb-2">Popular Mechanics</h2>
            <p className="text-gray-700">Discover the latest in technology, engineering, and tools with Popular in-depth explanations on how things work, and more!</p>
          </div>
        </div>
        </a>
       </div>

       <div className='aspect-w-2 aspect-h-3'>
       <a href="https://www.barnesandnoble.com/w/magazine-national-geographic-little-kids-one-year-subscription/17328631?ean=2000003471058" target="_blank" rel="noopener noreferrer" className="hover:no-underline">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img className="w-full h-full object-cover" src={img9} alt="Magazine 9" />
          <div className="p-6 h-56">
            <h2 className="text-xl font-bold mb-2">National Geographic Little Kids</h2>
            <p className="text-gray-700">Everything you need to help your preschooler become a bright, curious cultures bring the world to your child and inspire a sense of understanding.</p>
          </div>
        </div>
        </a>
      </div>
      <div className='aspect-w-2 aspect-h-3'>
      <a href="https://www.barnesandnoble.com/w/discover-kalmbach-publishing-co/1100870649?ean=2940000984321" target="_blank" rel="noopener noreferrer" className="hover:no-underline">
       <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img className="w-full  h-full object-cover" src={img7} alt="Magazine 7" />
          <div className="p-6 h-48">
            <h2 className="text-xl font-bold mb-2">Discover</h2>
            <p className="text-gray-700">Discover magazine takes you on the most exciting adventure of our times: The scientific quest to uncover our origins, understand the world around us.</p>
          </div>
        </div>
        </a>
       </div>
        
        {/* Add more magazine items as needed */}
      </div>
    </div>
  );
}

export default Magazine;
