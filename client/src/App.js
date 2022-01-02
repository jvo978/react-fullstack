import './App.css';
import Home from './routes/Home';
import Post from './routes/Post';
import CreatePost from './routes/CreatePost';
import { 
  BrowserRouter, 
  Routes, 
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <nav className='navBar'>
        <Link to="/">Home</Link> {" "}
        <Link to="/createpost">Create A Post</Link>
      </nav>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/post/:id" element={<Post />} />
    </Routes>
  </BrowserRouter>
      </div>
  )
}

export default App;
