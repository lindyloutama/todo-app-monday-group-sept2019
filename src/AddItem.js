import React from "react";
import "./AddItem.css";

class AddItem extends React.Component {
  render() {
    // JSX is NOT HTML
    return (
      <section>
        <input
          id="addItemInput"
          type="text"
          class="form-control"
          placeholder="E.g. take out bins"
        />
        <div className="mt-3 mb-3">
          <button id="addButton" className="btn">
            Add to list
          </button>
        </div>
      </section>
    );
  }
}

export default AddItem;
