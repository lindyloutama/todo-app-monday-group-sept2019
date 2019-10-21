import React from "react";

class ItemCount extends React.Component {
  render() {
    return (
      <p>
        You have <strong>{this.props.count}</strong> things left to do
      </p>
    );
  }
}

export default ItemCount;
