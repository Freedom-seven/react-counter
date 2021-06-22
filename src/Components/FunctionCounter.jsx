import React, { useState } from 'react';
import './FunctionCounter.css';

const FunctionCounter = () => {
    const [count, updateCount] = useState(0);

     const handleIncrease = (e) => {
        e.preventDefault();
        updateCount(count + 1)
    }

    const handleDecrease = (e) => {
        e.preventDefault();
        updateCount(count - 1)
    }
    return (
        <div className = "funcounter" style={{textAlign: 'center'}}>
            <h4>Function Counter</h4>
           <h1 className = "funcount">Count: {count}</h1>

           <button onClick={handleDecrease}>Decrease</button>
           &nbsp;
           <button onClick={handleIncrease}>Increase</button>
        </div>
    );
}

export default FunctionCounter;
