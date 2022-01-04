import './App.css';
import Home from './routes/Home';
import Post from './routes/Post';
import Login from './routes/Login';
import Registration from './routes/Registration';
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
        <Link to="/registration">Registration</Link>
        <Link to="/login">Login</Link>
      </nav>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
      </div>
  )
}

export default App;
