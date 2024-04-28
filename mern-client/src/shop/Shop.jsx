import { useEffect, useState } from "react";
import { Card } from 'flowbite-react';


const Shop = () => {
  const [books,setBooks] =useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setBooks(data.slice(0, 8)))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    
    <div className="mt-28 px-4 lg:px-24">
    <h2 className="text-5xl font-bold text-center">All Books are here</h2>
    <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
      {books.map((book) => (
        <Card key={book._id}>
          <img src={book.imageURL} alt={`Cover of ${book.bookTitle}`} className="h-96" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {book.bookTitle}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {book.description}
          </p>
        
          <div className="grid grid-rows-1 sm:grid-rows-2 gap-2">
  <button className="bg-blue-700 font-semibold text-white py-2 rounded w-full h-full">Buy Now</button>
  <button className="bg-blue-700 font-semibold text-white py-2 rounded w-full h-full">Overview by AI</button>
</div>

          
        </Card>
      ))}
    </div>
  </div>
    
  )
}

export default Shop