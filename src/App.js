import React from "react";
import AddItem from "./AddItem";
import ItemCount from "./ItemCount";
import Item from "./Item";
import "./App.css";

class App extends React.Component {
  state = {
      tasks: [
        {text: "walk the cat", completed: true, date: "2019-10-16"},
        {text: "buy the oats", completed: false, date: "2019-10-18"},
        {text: "learn react", completed: false, date: "2019-10-19"},
        {text: "wash slippers", completed: true, date: "2019-10-25"},
        {text: "de-flea the cat", completed: false, date: "2019-11-10"},
        {text: "create insta account", completed: true, date: "2019-10-30"}
      ]
    }

// Function to update the tasks with a new task
  addTask = (taskText) => {
    console.log(taskText);
    // Create a new task (with default completed and date properties)

    // Add that task to the state
  }

  render() {
    return (
      <div className="container">
        <h1 id="mainHeading">Todo List <i className="fas fa-camera"></i></h1>
        <h3>Things I need to do very soon.</h3>
        <div className="row">
          <div className="col-12 col-lg-6">
            <AddItem />
          </div>
          <div className="col-12 col-lg-6">
            <ItemCount count={this.state.tasks.length} />
            <ul id="itemList">
              {this.state.tasks.map(item =>{
                return <Item text={item.text} completed={item.completed} date={item.date}/>
              })}

            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
