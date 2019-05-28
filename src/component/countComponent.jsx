import React, { Component } from "react";

class Counter extends Component {
    state = { 
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
     }

     styles = {
         fontSize: 15,
         fontWeigth: 'bold'
     }
    render() { 
        let classes = this.getClasses();
        return ( 
        <div>
            <span style={this.styles} className={classes}>{this.formatCount()}</span>
            <button style={{fontSize: 20}} className="btn btn-secondary btn-sm" onClick={this.increment()}>Increment</button>
            <ul>
                {this.state.tags.map(tag => <li key={tag}> {tag} </li> )}
            </ul>
        </div> 
        );
    }

    formatCount() {
        let { count } = this.state;
        return count === 0? 'Zero': count;
    }

    increment(){
        this.state.count++;
        console.log(this.state.count);
    }

    getClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }
}
 
export default Counter;