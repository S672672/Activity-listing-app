import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [add, setAdd] = useState([]);
  const [activity, setActivity] = useState("");
  const [date, setDate] = useState("");

  const handleActivity = (event) => {
    setActivity(event.target.value);
  };

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const handleAdd = () => {
    setAdd([...add, { activity, date }]);
    setActivity("");
    setDate("");
  };

  const handleDelete = (index) => {
    const updatedList = [...add];
    updatedList.splice(index, 1);
    setAdd(updatedList);
  };

  return (
    <center className="todo-container">
      <h1>List Your Activity</h1>
      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              value={activity}
              placeholder="Enter your Activity"
              onChange={handleActivity}
            ></input>
          </div>
          <div className="col-4">
            <input type="date" onChange={handleDate} value={date}></input>
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
        </div>
        {add.map((item, index) => (
          <div className="row" key={index}>
            <div className="col-6">{item.activity}</div>
            <div className="col-4">{item.date}</div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDelete()}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </center>
  );
}
