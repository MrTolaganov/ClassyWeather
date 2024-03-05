import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };

    this.onDecrement = this.onDecrement.bind(this);
    this.onIncrement = this.onIncrement.bind(this);
  }

  onDecrement() {
    this.setState(curState => {
      return { count: curState.count - 1 };
    });
  }

  onIncrement() {
    this.setState(curState => {
      return { count: curState.count + 1 };
    });
  }

  render() {
    const date = new Date();
    date.setDate(date.getDate() + this.state.count);

    return (
      <>
        <button onClick={this.onDecrement}>-</button>
        <span>
          {date.toDateString()} [{this.state.count}]
        </span>
        <button onClick={this.onIncrement}>+</button>
      </>
    );
  }
}

export default Counter;
