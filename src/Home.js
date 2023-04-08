import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  useEffect(() => {
    // this function runs on every re-render i.e. once in the begining and later every time the data or state changes
    // const fetchData = async function () {
    //   const response = await fetch("http://localhost:8000/blogs");
    //   const results = await response.json();
    //   setBlogs(results)
    // };
    // fetchData()
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      })
      .catch((err) => console.log(err));
  }, []); // empty DEPENDECY ARRAY ensures that this code only runs in the begining instead of every re-render

  return (
    <div className="home">
      {blogs && (
        <BlogList
          blogs={blogs}
          title={"All Blogs"}
          // handleDelete={handleDelete}
        />
      )}
      {/* <BlogList blogs={blogs.filter((blog) =>blog.author === "varun")}
        title={"varun's blogs"}
      />  */}
      {/* <button onClick={() => setName("luigi")}>change name</button> */}
    </div>
  );
};

export default Home;
