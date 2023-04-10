import { Link } from "react-router-dom";

const Navbar = () => {
  // const linkStyling = {
  //   color: "white",
  //   backgroundColor: "#f1356d",
  //   borderRadius: "8px",
  // };
  return (
    <nav className="navbar">
      <h1>The Blog App</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
