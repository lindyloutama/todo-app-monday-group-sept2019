import React from "react";
import "./Item.css";

class Item extends React.Component {
  render() {
    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-8">
            <span className={this.props.completed ? "completedItem" : ""}>
              {this.props.text}
            </span>
          </div>
          <div className="col-2">
            {/* <button className="btn btn-info">Delete</button> */}
            <i class="far fa-trash-alt redBins"></i>
          </div>
          <div className="col-2">
            {/* {this.props.completed ? <button className="btn btn-light">uncheck</button> : <button className="btn btn-light">Done</button>} */}
            {/* {this.props.completed === false && <button className="btn btn-light">Done</button>} */}
            <i class="fas fa-check greenCheck"></i>
            {/* {this.props.completed === true && <button className="btn btn-light">uncheck</button>} */}
          </div>
        </div>
      </li>
    );
  }
}

export default Item;
