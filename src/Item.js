import React from "react";
import "./Item.css";

class Item extends React.Component {

  trashClicked = () => {
    this.props.deleteTaskFunc(this.props.taskId);
  };

  render() {
    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-8">
            <span className={
              this.props.completed ? "completedItem" : "mySpan"}
              >
              {this.props.text}
            </span>
          </div>
          <div className="col-2">
            {/* <button className="btn btn-info">Delete</button> */}
            <i className="far fa-trash-alt redBins" onClick={this.trashClicked}></i>
          </div>
          <div className="col-2">
        
           {this.props.completed ? ( 
            <i className="fa fa-undo"></i>
           ) : (
            <i className="fas fa-check greenCheck"></i>
           )}
          </div>
        </div>
      </li>
    );
  }
}

export default Item;