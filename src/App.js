import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from "./home/home"
import Post from './post/post';
import Header from './layout/header';
import Read from './post/read';

function App() {
  return (
    <div>
      <div>
       <main className="body">
       <Header/>
          <Routes>
            <Route path="/" element ={<Home/>} />
            <Route path="/blog" element ={<Post/>} />
            <Route path="/blog/:fileName" element ={<Read/>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
export default App;
