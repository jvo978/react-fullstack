import './App.css';
import Home from './routes/Home';
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
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="createpost">Create A Post</Link>
      </nav>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
    </Routes>
  </BrowserRouter>
      </div>
  )
}

export default App;
