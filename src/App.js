import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";

function App() {
  // const person = { name: "varun", age: 19 }; // react converts the data types into string
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<div>page not found</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App; // can write export default before the 'function App()' also
