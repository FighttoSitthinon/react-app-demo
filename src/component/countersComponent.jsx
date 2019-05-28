import React, { Component } from "react";
import Counter from "./counterComponent";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 },
      { id: 5, value: 4 }
    ]
  };

  setDeleteCounter = (id) => {
    console.log('Delete ', id);
    const counters = this.state.counters.filter(counter => counter.id !== id);
    this.setState({counters: counters});
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter 
          key={counter.id} 
          id={counter.id} 
          value={counter.value} 
          onDelete={this.setDeleteCounter}
          >
              <span className="m-3"> <b>ID: {counter.id}</b> </span>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
