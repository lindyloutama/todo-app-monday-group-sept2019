import React from "react";
import uuid from "uuid/v4";
import AddItem from "./AddItem";
import ItemCount from "./ItemCount";
import Item from "./Item";
import "./App.css";

class App extends React.Component {
  state = {
      tasks: [
        {text: "walk the cat", completed: true, date: "2019-10-16", id: uuid()},
        {text: "buy the oats", completed: false, date: "2019-10-18", id: uuid()},
        {text: "learn react", completed: false, date: "2019-10-19", id: uuid()},
        {text: "wash slippers", completed: true, date: "2019-10-25", id: uuid()},
        {text: "de-flea the cat", completed: false, date: "2019-11-10", id: uuid()},
        {text: "create insta account", completed: true, date: "2019-10-30", id: uuid()}
      ]
    }

// Function to update the tasks with a new task
  addTask = (taskText) => {
    // Create a new task (with default completed and date properties)
      const newTask = {
        text: taskText,
        completed: false,
        date: "2019-10-21",
        id: uuid()
      };
    // Add that task to the state
    // maske a copy of the tasks array
    // never do this.state.tasks.push(item) and access state directly
    const tasksCopy = this.state.tasks.slice();
    tasksCopy.push(newTask);
    this.setState({
      tasks: tasksCopy
    });
  }

  deleteTask = (taskId) => {
    const existingTasks = this.state.tasks;

      const filteredTask = existingTasks.filter(function(item) {
        return item.id!== taskId;
      });

    this.setState(
      {tasks: filteredTask}
    );
  }

  render() {
    return (
      <div className="container">
        <h1 id="mainHeading">Todo List <i className="fas fa-camera"></i></h1>
        <h3>Things I need to do very soon.</h3>
        <div className="row">
          <div className="col-12 col-lg-6">
            <AddItem addTaskFunc={this.addTask}/>
          </div>
          <div className="col-12 col-lg-6">
            <ItemCount count={this.state.tasks.length} />
            <ul id="itemList">
              {this.state.tasks.map(item =>{
                return <Item deleteTaskFunc={this.deleteTask} key={item.id} taskId={item.id} text={item.text} completed={item.completed} date={item.date}/>
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
