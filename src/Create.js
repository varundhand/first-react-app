import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("varun");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setIsPending(true);

    e.preventDefault(); // prevent form from getting submitted i.e. the page will be get re rendered
    const blog = { title, body, author };

    await fetch("http://localhost:8000/blogs", {
      // in the second argument of fetch method, we define the type of request and data tacklers
      method: "POST", // method
      headers: { "Content-Type": "application/json" }, // json type content is sent to the server
      body: JSON.stringify(blog), // the data which is sent
    });
    console.log("blog data being fetched");
    setIsPending(false);
    navigate("/");
  };

  return (
    <div className="create">
      <h2>Create a New Blog</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label htmlFor="">Blog Body:</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label htmlFor=""></label>
        <label htmlFor="">Blog Author: </label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="varun">varun</option>
          <option value="john">john</option>
          <option value="paul">paul</option>
          <option value="george">george</option>
        </select>
        {isPending ? (
          <button disabled>Adding Blog...</button>
        ) : (
          <button>Add</button>
        )}
      </form>
    </div>
  );
};

export default Create;
