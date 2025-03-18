import "./App.css";
import Navbar from "./components/Navbar"
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <>
    <Navbar />
    <Searchbar placeholder="Enter Todo here" />
      <div className="todos-list">
        <div className="todos">
          <div className="check">
            <input type="checkbox" className="checkbox" />
          </div>
          <div className="todo-p">
            <p>View LightHouse Report</p>
          </div>
          <div className="cross">
            <i className="fa-solid fa-plus cross-icon"></i>
          </div>
        </div>
        <div className="todos">
          <div className="check">
            <input type="checkbox" className="checkbox" />
          </div>
          <div className="todo-p">
            <p>push Code</p>
          </div>
          <div className="cross">
            <i className="fa-solid fa-plus cross-icon"></i>
          </div>
        </div>
        <div className="todos">
          <div className="check">
            <input type="checkbox" className="checkbox" />
          </div>
          <div className="todo-p">
            <p>Remove Textarea</p>
          </div>
          <div className="cross">
            <i className="fa-solid fa-plus cross-icon"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

