
import Navbar from "../components/Navbar";
import { Outlet } from 'react-router-dom';
import { BlogOfSideBar } from './BlogOfSideBar'


const BlogLayout = () => {
  return (
    
    
    <div className="flex h-screen">
    {/* Sidebar */}
    <div className="flex-none w-64 bg-gray-100">
      <BlogOfSideBar />
    </div>
    
    {/* Main content */}
    <div className="flex flex-col flex-1 overflow-hidden">
      <Navbar />
      <div className="flex-1 overflow-y-auto bg-gray-50 pb-5">
        <div className="container mx-auto px-4 py-20">
          <Outlet />
        </div>
      </div>
    </div>
  </div>

  );
};

export default BlogLayout;
