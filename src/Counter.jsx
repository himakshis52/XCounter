import { useState } from "react";



const Counter = () => {

    const [ count, setCount ] = useState(0);

    const handleIncrement = () => {
        setCount((prev) => prev+1)
    }

    const handleDecrement = () => {
        setCount((prev) => prev-1)
    }

    return(
        <div>
            <div>
            <h1>Counter App</h1>
            </div>
            
            <p>
                Count: {count}
            </p>

            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>

        </div>
    )
}

export default Counter;