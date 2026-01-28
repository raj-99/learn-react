import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setValue, addTask } from "../redux/todoSlice";
const ToDoRedux = () => {
    const dispatch = useDispatch()
    const handleChange = (e) => {
        dispatch(setValue(e.target.value))
    }
    const {value, todoList} = useSelector((state) => state.todo)

    const handleAdd = () =>{
        dispatch(addTask())
    }
  const list = [];
  return (
    <>
      <h2>ToDO</h2>
      <div>
        <input onChange={handleChange} value={value} type="text" placeholder="Add ToDo" />
        <button onClick={handleAdd}></button>
      </div>
      <div>
        <ul>
          {todoList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ToDoRedux;
