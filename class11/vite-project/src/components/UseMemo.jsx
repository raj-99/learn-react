import React, { useMemo, useState } from 'react'

const generateLargeArray = () => {
    console.log("Generating large array");
    console.time("Array Generation Time");
    const largeArray = []
    for (let i = 0; i < 10000000; i++) {
        largeArray.push(i)
    }
    console.timeEnd("Array Generation Time");
    return largeArray;
}

const sumArray = (arr) => {
    console.log("Calculating sum of large array");
    console.time("Array Sum Time");
    let sum = arr.reduce((acc, curr) => acc + curr, 0)
    console.timeEnd("Array Sum Time");
    return sum;
}

const LargeArraySum = () => {
    const [count, setCount] = useState(0);
    const largeArray = useMemo(() => generateLargeArray(), []);
    const sum = useMemo(() => sumArray(largeArray), [largeArray]);
    return (
        <div>
            <h1>Sum of Large Array: {sum}</h1>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <p>Count: {count}</p>
        </div>
    )
}

export default LargeArraySum