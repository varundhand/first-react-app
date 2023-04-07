import "./App.css";
import Navbar from "./Navbar";

function App() {
  // const person = { name: "varun", age: 19 }; // react converts the data types into string
  return (
    <div className="App">
      <Navbar />
      <div className="content"></div>
    </div>
  );
}

export default App; // can write export default before the 'function App()' also
