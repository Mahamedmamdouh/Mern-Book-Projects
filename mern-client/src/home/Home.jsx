import Banner from "../components/Banner";
import BestSellerBooks from "./BestSellerBooks";
import FavBook from "./FavBook"
import OtherBook from "./OtherBook";
import PromoBanner from './PromoBanner';
import Review from "./Review";



  const Home = () => {
    return (
      <>
  <Banner/>
  <BestSellerBooks/>
  <FavBook/>
  <PromoBanner/>
  <OtherBook/>
  <Review/>
  
  </>
    )
  }

export default Home;