// since this part of component is used in various components, so in order to make the code less repetetive, we are making
// a seperate component for that particular element

import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, refresh }) => {
  // destructuring of props
  // props are the attributes passed in order to get the data in different files
  // const blogs = props.blogs;0
  // const title = props.title;
  // console.log(props);
  const handleClick = (blogId) => {
    fetch(`http://localhost:8000/blogs/${blogId}`, {
      method: "DELETE",
    });
    refresh();
    //! it takes me to the page that i dont wanna go to
    // .then(
    //   navigate('/')
    // )
  };

  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map(
        (
          blog //! unique key prop should be passed in order to high order array methods to work
        ) => (
          <div key={blog.id} className="blog-preview">
            <Link className="anchor" to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </Link>
            <button className="btn" onClick={() => handleClick(blog.id)}>
              Delete
            </button>
            {/* <button onClick={() => handleDelete(blog.id)}>Delete</button> */}
          </div>
        )
      )}
    </div>
  );
};

export default BlogList;
