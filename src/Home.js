import BlogList from "./BlogList";
import Loading from "./Loading";
import useFetch from "./useFetch";

const Home = () => {
  const {
    error, //! does the order matter ?
    isPending,
    data: blogs,
    refresh,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <h2>{error}</h2>}
      {isPending && <Loading />}
      {blogs && (
        <BlogList refresh={refresh} blogs={blogs} title={"All Blogs"} />
      )}
      {/* <BlogList blogs={blogs.filter((blog) =>blog.author === "varun")}
        title={"varun's blogs"}
      />  */}
      {/* <button onClick={() => setName("luigi")}>change name</button> */}
    </div>
  );
};

export default Home;
