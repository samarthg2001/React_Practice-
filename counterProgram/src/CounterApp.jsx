import { useState } from 'react'


function CounterApp() {
  const [count, setCount] = useState(0)
    const increment=()=>{
      setCount(count+1)
    }
    const decrement=()=>{
      setCount(count-1)
    }
    const reset=()=>{
      setCount(0)
    }

  return (<>
  <div className='container'>
  <h1 className='counter' >{count}</h1>
   
  <button onClick={increment}>Increment</button>
  <button onClick={reset}>Reset</button>
  <button onClick={decrement}>Decrement</button>
  </div>
  </>
  );
}

export default CounterApp
