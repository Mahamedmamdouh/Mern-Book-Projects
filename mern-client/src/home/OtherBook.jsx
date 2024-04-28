import { useEffect, useState } from "react";
import BookCards from "../components/BookCards";


const OtherBook = () => {
      const [books,setBooks] =useState([]);
      useEffect(() => {
        fetch("http://localhost:5000/all-books")
          .then(res => res.json())
          .then(data => setBooks(data.slice(7, 15)))
          .catch(error => console.error('Error fetching data:', error));
      }, []);
      return (
        <div>
          <BookCards books={books} headline ="Other Book"/>
        </div>
      )
}

export default OtherBook