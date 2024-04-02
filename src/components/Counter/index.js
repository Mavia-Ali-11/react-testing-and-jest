import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [amount, setAmount] = useState(0);

    return (
        <>
            <h2>{counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>

            <br />

            <h3>{amount}</h3>
            <input type="number" name="amount" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} />
            <button onClick={() => setCounter(amount)}>Set Amount</button>
        </>
    )
}

export default Counter