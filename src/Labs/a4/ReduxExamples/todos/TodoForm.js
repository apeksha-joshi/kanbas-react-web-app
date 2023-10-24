import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

function TodoForm() {
  const { todo } = useSelector((state) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item">
      <button className="btn btn-success m-2 float-end" onClick={() => dispatch(addTodo(todo))}> Add </button>
      <button className="btn btn-warning m-2 float-end" onClick={() => dispatch(updateTodo(todo))}> Update </button>
      <input className="form-control w-25"
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />
    </li>
  );
}
export default TodoForm;