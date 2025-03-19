import "./App.css";
import Navbar from "./components/navbar"
import Searchbar from "./components/searchbar";
import Todo from "./components/todo";

function App() {
  return (
    <>
    <Navbar />
    <Searchbar placeholder="Enter Todo here" />
    <Todo />
    </>
  );
}

export default App;

