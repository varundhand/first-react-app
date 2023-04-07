import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "varun", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "john", id: 2 },
    {
      title: "My top dev tips",
      body: "lorem ipsum...",
      author: "varun",
      id: 3,
    },
  ]);
  const [name, setName] = useState("mario");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    // this function runs on every re-render i.e. once in the begining and later every time the data or state changes
    console.log("use effect ran", blogs);
    console.log(name);
  }, [name]); // empty DEPENDECY ARRAY ensures that this code only runs in the begining instead of every re-render

  return (
    <div className="home">
      <BlogList blogs={blogs} title={"All Blogs"} handleDelete={handleDelete} />
      {/* <BlogList blogs={blogs.filter((blog) =>blog.author === "varun")}
        title={"varun's blogs"}
      />  */}
      <button onClick={() => setName("luigi")}>change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
