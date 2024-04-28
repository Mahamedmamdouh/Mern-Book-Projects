import { useLoaderData, Link } from "react-router-dom";
import { FaStar } from 'react-icons/fa';

const SingleBook = () => {
  const { _id, authorName, bookTitle, imageURL, bookDescription, Rating, amazonURL,
    bookPdfURL } = useLoaderData();

  return (
    <div className="mt-20 px-4 lg:px-24">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img src={imageURL} alt="" className="w-full h-96 object-cover" />
          </div>
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-2">{bookTitle}</h2>
            <p className="text-gray-600 mb-4">{authorName}</p>
            <p className="text-gray-600 mb-4">{bookDescription}</p>

            <div className="flex items-center mb-4">
              <FaStar className="text-yellow-500 mr-1" />
              <p className="text-gray-600">{Rating}</p>
            </div>
            <div className="flex items-center mb-4">
              <svg className="h-6 w-6 text-blue-500 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <p className="text-gray-600">In Stock</p>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <Link to={amazonURL}target="_blank"  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block w-1/3 text-center">
                  Buy from Amazon
                </Link>
              </div>
              <div>
                <Link to={bookPdfURL } target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block w-1/3 text-center">
                  Read by Pdf
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBook;


/*4.5 (120 Reviews) */

/*const amazonURL = "";*/