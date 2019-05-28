import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 15,
    fontWeigth: "bold"
  };

  //   constructor(){
  //     super();
  //     this.increment = this.increment.bind(this);
  //     this.getClasses = this.getClasses.bind(this);
  // }

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>There are no tags.</p>;
    }
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please create a new tags."}
        {this.renderTags()}
        <span style={this.styles} className={this.getClasses()}>
          {this.formatCount()}
        </span>
        <button
          style={{ fontSize: 15 }}
          className="btn btn-secondary btn-sm m-2"
          onClick={this.increment}
        >
          Increment
        </button>
        <button
          style={{ fontSize: 15 }}
          className="btn btn-warning btn-sm"
          onClick={(this.decrese)}
        >
          Decrease
        </button>
        <button
          style={{ fontSize: 15 }}
          className="btn btn-success btn-sm m-2"
          onClick={() => this.increment2(2)}
        >
          Increment 2
        </button>
      </div>
    );
  }

  formatCount() {
    let { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  //   increment() { //this function need to use constructor
  //     this.state.count++;
  //     console.log(this.state.count);
  //   }

  increment = () => {
    //this.state.count++; //can not use in react
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };

  increment2 = (value) => {
    this.setState({ count: this.state.count + value });
    console.log(this.state.count);
  };

  decrese = () => {
    this.setState({ count: this.state.count - 1 });
    console.log(this.state.count);
  };

  getClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
