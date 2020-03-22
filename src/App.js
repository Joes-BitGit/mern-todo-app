import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

import logo from "./logo.svg";


function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg nvabar-light bg-light">
        <a className="navbar-brand" href="https://reactjs.org/" target="_blank">
          <img src={logo} width="50" height="50" alt="reactjs.org"/>
        </a>
          <Link to="/" className="navbar-brand">MERN-Stack TODO App</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">TODOS</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">CREATE TODO</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>

    </Router>


  );
}

export default App;
