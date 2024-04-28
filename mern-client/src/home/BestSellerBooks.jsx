import { useEffect, useState } from "react"
import BookCards from "../components/BookCards";

const BestSellerBooks = () => {
  const [books,setBooks] =useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setBooks(data.slice(0, 7)))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div>
      <BookCards books={books} headline ="Best seller Books"/>
    </div>
  )
}

export default BestSellerBooks