import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from "./home/home"
import Post from './post/post';
import Header from './layout/header';
import Footer from './home/footer';

function App() {
  return (
    <div>
      <Header/>
      <div>
        <main className="body">
          <Routes>
            <Route path="/" element ={<Home/>} />
            <Route path="/blog" element ={<Post/>} />
        
          </Routes>
        </main>
      </div>
      <Footer/>
    </div>
  );
}
export default App;
