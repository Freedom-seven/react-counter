import React, { useState } from 'react';

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
        <div>
           <h1>Count: {count}</h1>
           <hr/>
           <button onClick={handleDecrease}>Decrease</button>
           &nbsp;
           <button onClick={handleIncrease}>Increase</button>
        </div>
    );
}

export default FunctionCounter;
