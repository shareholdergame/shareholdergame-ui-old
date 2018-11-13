import React from "react";

import { func } from "prop-types";

class CurrentTurnState extends React.Component {
  static propTypes = {
    children: func.isRequired
  };

  constructor(props) {
    super(props);

    this.first = [];
    this.last = [];
  }

  onUpdateTurn(isFirst, colorIndex, value) {
    if (isFirst) {
      this.first[colorIndex] = value;
    } else {
      this.last[colorIndex] = value;
    }
    console.log("turn updated", isFirst, colorIndex, value);
  }

  render() {
    return this.props.children((isFirst, colorIndex, value) => {
      this.onUpdateTurn(isFirst, colorIndex, value);
    });
  }
}

export default CurrentTurnState;
