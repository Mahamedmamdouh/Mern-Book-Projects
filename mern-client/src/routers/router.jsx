import {
      createBrowserRouter,
      RouterProvider,
    } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Magazine from "../components/Magazine";
import SingleBook from './../shop/SingleBook';
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import { ManageBook } from "../dashboard/ManageBook";
import UploadBook from "../dashboard/UploadBook";
import { EditBook } from "../dashboard/EditBook";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from '../components/Logout';
import Pricing from "../components/Pricing";


//********************************** */
import BlogLayout from '../Blog/BlogLayout';
import PostDetail from '../Blog/PostDetail';
import UserProfile from '../Blog/UserProfile';
import CreatePost from '../Blog/CreatePost';
import EditPost from '../Blog/EditPost';
import AuthorPosts from '../Blog/AuthorPosts';
import CategoryPosts from '../Blog/CategoryPosts';
import Authors from '../Blog/Authors';
import BlogDashboard from "../Blog/Dashboard";
import Blog from "../Blog/Blog";
import DeletePost from "../Blog/DeletePost";

    const router = createBrowserRouter([
      {
        path: "/",
        element: <App/>,
        children:[
            {
                  path:'/',
                  element:<Home/>
            },{
                  path:'/shop',
                  element:<Shop/>
            },{
                  path:'/about',
                  element:<About/>
            },{
                  path:'/Magazine',
                  element:<Magazine/>
            },{
                  path:'/Pricing',
                  element:<Pricing/>
            },{
            },{
                  path:'/book/:id',
                  element:<SingleBook/>, 
                  loader:({params}) => fetch(`http://localhost:5000/book/${params.id}`)
            },
        ]
      },
      {
        path:"/admin/dashboard",
        element:<DashboardLayout/>,   
        children:[
            {
                  path:"/admin/dashboard",
                  element:<PrivateRoute><Dashboard/></PrivateRoute>,
            },{
                  path:"/admin/dashboard/upload",
                  element:<UploadBook/>,   
            }
            ,{
                  path:"/admin/dashboard/manage",
                  element:<ManageBook/>,   
            }
            ,{
                  path:"/admin/dashboard/edit-books/:id",
                  element:<EditBook/>,
                  loader:({params}) => fetch(`http://localhost:5000/book/${params.id}`)   
            }
        ] 
      },
      {
            path: "/Blog",
            element: <BlogLayout />,
            children: [
              { path: "/Blog", element: <Blog />  },
              { path: "/Blog/posts/:id", element: <PostDetail /> },
              { path: "/Blog/profile/:id", element: <UserProfile /> },
              { path: "/Blog/posts/categories/:category", element: <CategoryPosts /> },
              { path: "authors", element: <Authors /> },
              { path: "create", element: <CreatePost /> },
              { path: "/Blog/posts/users/:id", element: <AuthorPosts /> },
              { path: "/Blog/posts/:id/edit", element: <EditPost /> },
              { path: "/Blog/posts/:id/delete", element: <DeletePost /> },
              { path: "/Blog/myposts/:id", element: <BlogDashboard /> },
            ],
          },{
            path:"sign-up",
            element:<SignUp/>
      },{
            path:"login",
            element:<Login/>
      },{
            path:"logout",
            element:<Logout/>
      }
    ]);

    export default router;