
import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'Blog1', category: 'JavaScript', body: 'lorem ipsum...', author: 'ME', id:1 },
    { title: 'Blog2', category: 'React', body: 'lorem ipsum...', author: 'ME', id:2 },
    { title: 'Blog3', category: 'TypeScript', body: 'lorem ipsum...', author: 'ME', id:3 },
    { title: 'Blog4', category: 'JavaScript', body: 'lorem ipsum...', author: 'ME', id:4 },
    { title: 'Blog5', category: 'React', body: 'lorem ipsum...', author: 'ME', id:5 },
    { title: 'Blog6', category: 'TypeScript', body: 'lorem ipsum...', author: 'ME', id:6 },
  ]);
  
  const [category, setCategory] = useState('JavaScript');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('useEffect run');
    console.log(category);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return ( 
    <div className='home'>
      <BlogList blogs={ blogs } title= 'All Blogs' handleDelete= { handleDelete }/>
      <p>{ category }</p>
      <button onClick={() => setCategory('React')}> React</button>
      <button onClick={() => setCategory('TypeScript')}> TypeScript</button>
    </div>
  );
}

export default Home;