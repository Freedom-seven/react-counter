import React, { useState } from 'react';

const FunctionCounter = () => {
    const [count, updateCount] = useState(0);

    handleIncrease () {
        
    }
    return (
        <div>
           <h1>Count: {count}</h1>
           <hr/>
           <button>Decrease</button>
           <button>Increase</button>
        </div>
    );
}

export default FunctionCounter;
