import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("varun");

  return (
    <div className="create">
      <h2>Create a New Blog</h2>
      <form action="">
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
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
