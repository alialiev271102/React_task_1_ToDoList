import reactLogo from './assets/react.svg'
import editBtn from './assets/edit-btn.svg'
import deleteBtn from './assets/delete-btn.svg'
import './App.css'
import {Input} from "./components/input/Input";
import {useState} from "react";


function App() {
  const todoListJson = localStorage.getItem("todoList");
  let todoList: string[] = [];
  let [tasks, setTasks] = useState(['']);
  if (todoListJson) {
    todoList = JSON.parse(todoListJson);
    tasks = todoList;
  }
  console.log(() => todoList);
  const someFun = (value: string) => {
    todoList.push(value);
    setTasks(todoList);
    localStorage.setItem('todoList', JSON.stringify(todoList));
    console.log(JSON.stringify(todoList));

  }

  const view = () => tasks
    .map((str: string, i: number) => <li key={i + str} className='task'>{str}
      <div className='task-btns'>
        <button className='edit-btn'>
          <img src={editBtn} alt="edit-btn"/>
        </button>
        <button className='delete-btn'>
          <img src={deleteBtn} alt="delete-btn"/>
        </button>
      </div>
    </li>)
    .reverse();

  return (
    <div className="App">
      <header className='header'>
        <a href="#" className='logo-link'>
          <img src={reactLogo} alt="react logo" className="logo"/>
          <h1 className='title'>Ali Express To Do List</h1>
        </a>
      </header>
      <div>
        <Input handleClick={someFun}/>
      </div>
      <ul className='task-list'>
        {view()}
      </ul>
    </div>
  )
}

export default App
