import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Loading from "./Loading";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    error,
    isPending,
    data: blog,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  return (
    <div className="blog-details">
      {isPending && <Loading />}
      {error && <h2>{error}</h2>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written By {blog.author}</p>
          <div className="">{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
