import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    error, //! does the order matter ?
    isPending,
    data: blogs,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <h2>{error}</h2>}
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
