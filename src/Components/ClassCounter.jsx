import React, { Component } from 'react';

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
            <div style = {{textAlign:'center'}}>
               <h1>Count: {this.state.count}</h1>
               <hr/>
               <button onClick={this.handleDecrease}>Decrease</button>
                &nbsp;
               <button onClick={this.handleIncrease}>Increase</button>
            </div>
        );
    }
}

export default ClassCounter;
