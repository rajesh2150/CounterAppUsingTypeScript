import {useState} from 'react'

const Counter = () => {
    const [count,setCount] = useState<number>(0)
    const handleIncrement=()=>{
      setCount(count + 1)
    }
    const handleDecrement=()=>{
      setCount(count - 1)
    }
  return (
    <div>
      <h3 >Counter App</h3>
      <p>Count: {count}</p>
      <button onClick={()=>handleIncrement()}>Increment</button>
      <button onClick={()=>handleDecrement()}>Decrement</button>
    </div>
  )
}

export default Counter
