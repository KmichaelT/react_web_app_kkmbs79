import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Students from './views/Students.js';
import Home from './views/Home.js';
import Posts from './views/Posts.js';

function App() {
  return (
    
    <div className='container '>
      <Navbar/>
      <Routes> 
        <Route path="posts" element={<Posts/>} />
        <Route path="/" element={<Home/>} />
        <Route path="students" element={<Students/>} />
      </Routes>
    </div>
  );
}

export default App;
