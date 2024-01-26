import React from "react";
import "./App.css";
import List from "./Components/List";

export default function App() {
  return (
    <center className="todo-container">
      <h1>List Your Activity</h1>
      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            <input type="text" placeholder="Enter your Activity"></input>
          </div>
          <div className="col-4">
            <input type="date"></input>
          </div>
          <div className="col-2">
            <button type="button" class="btn btn-success">
              Add
            </button>
          </div>
        </div>
        <List activity='Buy milk' date='2024/1/5' />
        <List activity='Go to college' date='2024/1/17' />

      </div>
    </center>
  );
}
