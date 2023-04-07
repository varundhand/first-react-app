const Home = () => {
  // const handleClick = () => { // we dont envoke this function below because it runs itself without even clicking the btn
  //   console.log("button is clicked");
  // };
  const handleClick = (event) => {
    console.log("hello ", "event is: ", event);
  };
  const handleClickAgain = (name, event) => {
    console.log("hello", name, event);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={(event) => handleClickAgain("varun dhand", event.target)}
      >
        Click me Again
      </button>
    </div>
  );
};

export default Home;
