import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const [taskToAdd, setTaskToAdd] = React.useState();
  const [tasks, setTasks] = React.useState([{ content: '1', inEdit: false }, { content: '2', inEdit: false }]);
  

  const startEditing = (id, task) => {
    return (
      <div key={id} >
        <input type="text"
        
          defaultValue={task.content}
          onChange={(e) => {
            const find = tasks.slice();
            find[id].content = e.target.value;
            setTasks(find)
          }
          }
        />
        <button onClick={() => {
          const find = tasks.slice();
          find[id].inEdit = false;
          setTasks(find);
        }}>save</button>
      </div>
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input onChange={(e) => { setTaskToAdd(e.target.value) }} />
        <button onClick={() => { setTasks(tasks.concat({ content: taskToAdd, inEdit: false })) }}>Add</button>

        {tasks.map((task, id) => {
          return task.inEdit ? startEditing(id, task) : <div key={id} >{`${id + 1 + ') '}` + task.content}
            <button onClick={() => { setTasks(tasks.slice().filter((el, i, arr) => el !== arr[id])) }}>Del</button>
            <button onClick={() => { const find = tasks.slice(); find[id].inEdit = true; setTasks(find); }} >Edit</button>
          </div>

        })}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
