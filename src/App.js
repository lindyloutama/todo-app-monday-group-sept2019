import React from "react";
import AddItem from "./AddItem";
import ItemCount from "./ItemCount";
import Item from "./Item";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 id="mainHeading">Todo List</h1>
        <h3>Things I need to do very soon.</h3>
        <div className="row">
          <div className="col-12 col-lg-6">
            <AddItem />
          </div>
          <div className="col-12 col-lg-6">
            <ItemCount count={5} />
            <ul id="itemList">
              <Item text="walk the cat" completed={false} />
              <Item text="buy oats" completed={true} />
              <Item text="learn React" completed={true}/>
              <Item text="wash slippers" completed={true}/>
              <Item text="de-flea the cat" completed={false} />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
