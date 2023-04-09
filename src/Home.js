import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    // this function runs on every re-render i.e. once in the begining and later every time the data or state changes
    // const fetchData = async function () {
    //   const response = await fetch("http://localhost:8000/blogs");
    //   const results = await response.json();
    //   setBlogs(results)
    // };
    // fetchData()

    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            // its a good convention to check the response status to be true before iterating the fecthed data
            throw Error("Could not fetch data from that resource");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false); // once we get the data, we set isPending to false which hides the loading div
        })
        .catch((err) => console.log(err.message));
    }, 1000);
  }, []); // empty DEPENDECY ARRAY ensures that this code only runs in the begining instead of every re-render

  return (
    <div className="home">
      {isPending && (
        <div className="loading">
          <img
            style={{ width: 800 }}
            src="https://cdn.dribbble.com/users/4241225/screenshots/14521747/media/d9d6f50e1443ecbdef32497685c0b5eb.gif"
            alt=""
          />
        </div>
      )}
      {blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
      {/* <BlogList blogs={blogs.filter((blog) =>blog.author === "varun")}
        title={"varun's blogs"}
      />  */}
      {/* <button onClick={() => setName("luigi")}>change name</button> */}
    </div>
  );
};

export default Home;
