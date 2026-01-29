import React, { useState, memo } from 'react';

const Counter = memo(({count}) => {
    console.log("Rendering/re-rendering Counter");
    return <div>Counter: {count}</div>;
})

const Memo = () => {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(false);
    const incrementCount = () => {
        setCount(count + 1);
    }
    const toggleOtherState = () => {
        setOtherState(!otherState);
    }

    return (
        <div>
            <h3>React Memo Example</h3>
            <Counter count={count} />
            <button onClick={incrementCount}>Increment</button>
            <button onClick={toggleOtherState}>Toggle Other State</button>
        </div>
    )
}

export default Memo;