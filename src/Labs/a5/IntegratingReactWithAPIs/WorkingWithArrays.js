import React, { useState, useEffect } from "react";
import httpClient from '../httpClientConfig.js';
function WorkingWithArrays() {
  //const API = "http://localhost:4000/a5/todos";
  const [errorMessage, setErrorMessage] = useState(null);
  const [todo, setTodo] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09", completed: false,
  });
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await httpClient.get("/a5/todos");
    setTodos(response.data);
  };

  const postTodo = async () => {
    const response = await httpClient.post("/a5/todos", todo);
    setTodos([...todos, response.data]);
  };


  const removeTodo = async (todo) => {
    const response = await httpClient
      .get(`/a5/todos/${todo.id}/delete`);
    setTodos(response.data);
  };

  const deleteTodo = async (todo) => {
    try{
        const response = await httpClient.delete(`/a5/todos/${todo.id}`);
        setTodos(todos.filter((t) => t.id !== todo.id));
    }catch(error) {
        console.log(error);
        setErrorMessage(error.response.data.message);
    }
    
  };

  const fetchTodoById = async (id) => {
    const response = await httpClient.get(`/a5/todos/${id}`);
    setTodo(response.data);
  };

  const updateTitle = async () => {
    const response = await httpClient.get(
      `/a5/todos/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };

  const updateTodo = async () => {
    try{
        const response = await httpClient.put(`/a5/todos/${todo.id}`, todo);
        setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));setTodo({});
    }catch(error){
        console.log(error);
        setErrorMessage(error.response.data.message);
    }
  };



  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div>
      <h2>Working with Arrays</h2>
      <input value={todo.id}
        onChange={(e) => setTodo({
            ...todo, id: e.target.value})} />
      <input value={todo.title}
        onChange={(e) => setTodo({
            ...todo, title: e.target.value})} />
        <button onClick={updateTitle}
              className="btn btn-success mb-2 w-100">
        Update Title
      </button>
    
      <h3>Pass data in HTTP body</h3>
      <input className="form-control" value={todo.id} readOnly />
      <br />
      <input className="form-control"
        onChange={(e) => setTodo({
          ...todo, title: e.target.value })}
        value={todo.title} type="text"
      />
     <br />

      <textarea className="form-control"
        onChange={(e) => setTodo({ ...todo,
          description: e.target.value })}
        value={todo.description} type="text"
      /><br />
      <input className="form-control"
        onChange={(e) => setTodo({
          ...todo, due: e.target.value })}
        value={todo.due} type="date"
      /><br />
      <label>
        <input
          onChange={(e) => setTodo({
            ...todo, completed: e.target.checked })}
          value={todo.completed} type="checkbox"
        />
        Completed
      </label>
      <br />
      <button className="btn btn-warning me-2" onClick={postTodo} >
        Post Todo
      </button>
      <button className="btn btn-success me-2" onClick={updateTodo}>
        Update Todo
      </button>

      <br /><br />

          {errorMessage && <div class="alert alert-danger" role="alert">
              {errorMessage}
          </div>
          }
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id}
              className="list-group-item">
                <button
          onClick={() => deleteTodo(todo)}
          className="btn btn-danger float-end" >
          Remove
        </button>
                <button
          onClick={() => fetchTodoById(todo.id)}
          className="btn btn-warning me-2 float-end" >
          Edit
        </button>
            

            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default WorkingWithArrays;