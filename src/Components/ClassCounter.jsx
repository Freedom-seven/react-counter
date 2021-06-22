import React, { Component } from 'react';
import './ClassCounter.css';

class ClassCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {count: 0};
    }

    handleDecrease = (e) => {
        e.preventDefault()
        this.setState({count: this.state.count - 1})  
    }

    handleIncrease = (e) => {
        e.preventDefault()
        this.setState({count: this.state.count + 1})  
    }
    render() {
        return (
            <div className = "classConuter" style = {{textAlign:'center'}}>
                <h4>Class Counter</h4>
               <h1  className = "count">Count: {this.state.count}</h1>

               <button className = "btn" onClick={this.handleDecrease}>Decrease</button>
                &nbsp;
               <button className = "btn" onClick={this.handleIncrease}>Increase</button>
            </div>
        );
    }
}

export default ClassCounter;
