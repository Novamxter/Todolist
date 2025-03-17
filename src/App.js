import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <nav>
          <div className="left">
            <h1>Todolist</h1>
          </div>
          <div className="right"></div>
        </nav>
        <div className="todos-list">
          <div className="todos">
            <div className="check">
              <input type="checkbox" className="checkbox" />
            </div>
            <div className="todo-p">
              <p>View LightHouse Report</p>
            </div>
            <div className="cross">
              <i class="fa-solid fa-plus cross-icon"></i>
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
              <i class="fa-solid fa-plus cross-icon"></i>
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
              <i class="fa-solid fa-plus cross-icon"></i>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

{
  /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
}
