// since this part of component is used in various components, so in order to make the code less repetetive, we are making
// a seperate component for that particular element

const BlogList = ({ blogs, title, handleDelete }) => {
  // destructuring of props
  // props are the attributes passed in order to get the data in different files
  // const blogs = props.blogs;
  // const title = props.title;
  // console.log(props);
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview">
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
