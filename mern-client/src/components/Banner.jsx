import { useState } from "react";
import { Link } from "react-router-dom";
import BannerCard from "../home/BannerCard";
import { dataBaseOfBooks } from "../../src/static/data";

const Banner = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const searchedBooks = dataBaseOfBooks.filter((book) =>
    book.title.toLowerCase().includes(term.toLowerCase()) ||
    book.author.toLowerCase().includes(term.toLowerCase()) 
    );
    setSearchData(searchedBooks);
  };

  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/*left sides */}
        <div className="md:w-1/2 space-y-8 h-full ">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Buy and Sell your Books{" "}
            <span className="text-blue-700">for the Best Prices</span>
          </h2>
          <p className="md:w-4/5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum been the standard dummy text ever since the
            1500s, when an unknown printer took galley of type and scrambled
            it to specimen book.{" "}
          </p>
          <div>
            <input
              type="search"
              id="search"
              placeholder="Search a book"
              className="p-2 rounded-s-sm outline-none"
              value={searchTerm}
              onChange={handleSearchChange}
            />
           {searchData.length > 0 && (
  <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
    {searchData.map((book, index) => (
      <Link to={`/book/${book.id}`} key={index}>
        <div className="w-full flex items-start py-3"> 
          <img
            src={book.imgURL} 
            alt=""
            className="w-[40px] h-[40px] mr-[10px]"
          />
          <h1>{book.title}</h1>
        </div>
      </Link>
    ))}
  </div>
)}

            <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">
              Search
            </button>
          </div>
        </div>
        {/*right side */}
        <div>
          <BannerCard> </BannerCard>
        </div>
      </div>
    </div>
  );
};

export default Banner;
