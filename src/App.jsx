import "./App.css";
import Blog from "./components/Blog";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BlogPost from './components/BlogPost';

function App() {

  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Blog/>}/>
      <Route path="/blog/:id" element={<BlogPost/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
