import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../services/actions/todosActions";

function Todos() {
  const { todos, isLoading, error } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTodos());
  }, []);
  return (
    <div>
      <h2>React Redux Fetch Data </h2>
      <h6>Todos App</h6>
      <h6>
        Total Todos: {todos.length}
      </h6>
      <div className="d-flex flex-wrap container ">
        {isLoading && <h3>Loading....</h3>}
        {error &&
          <h3>
            {error.message}....
          </h3>}
        {todos &&
          todos.map(todo =>
            <div className="">
              <article key={todo.id}>
                <div className="card card-design" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">
                      {todo.id}
                    </h5>
                    <p className="card-text">
                      {todo.title}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          )}
      </div>
    </div>
  );
}

export default Todos;

// className="d-flex flex-wrap"
