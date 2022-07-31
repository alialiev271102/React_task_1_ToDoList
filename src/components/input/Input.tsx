import {useState} from "react";
import './Input.css'

export const Input = ({handleClick}: any) => {
  const [task, setTask] = useState("");
  const handleClear = () => {
    setTask('');
  }
  const handleChange = (event: any) => {
    setTask(event.target.value);
  };

  return (
    <div className='input-div'>
      <input
        type="text"
        id="task"
        name="task"
        onChange={handleChange}
        value={task}
        className='input'/>
      <button onClick={() => {
        handleClick(task)
        handleClear()
      }}>Add task</button>
    </div>
  )
}