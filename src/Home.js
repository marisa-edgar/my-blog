import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'Blog1', body: 'lorem ipsum...', author: 'ME', id:1 },
    { title: 'Blog2', body: 'lorem ipsum...', author: 'ME', id:2 },
    { title: 'Blog3', body: 'lorem ipsum...', author: 'ME', id:3 },
  ]);

  return ( 
    <div className='home'>
      <BlogList blogs={ blogs } title= 'All Blogs'/>
    </div>
  );
}

export default Home;