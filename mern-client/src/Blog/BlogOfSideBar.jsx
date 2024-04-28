import { Sidebar } from 'flowbite-react';


export const BlogOfSideBar = () => {
  return (
    <div className="flex">
      <div className="w-16 h-screen bg-gray-200">
        {/* Sidebar content */}
        <Sidebar aria-label="Sidebar with content separator example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/Blog/profile/karl">
                Ernest Achiever
              </Sidebar.Item>
              <Sidebar.Item href="/Blog/create">
                Create Post
              </Sidebar.Item>
              <Sidebar.Item href="/Blog/authors">
                Authors
              </Sidebar.Item>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              {/* Additional items or groups */}
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      
    </div>
  );
};

export default BlogOfSideBar;
