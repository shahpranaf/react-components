import React, { useEffect, useState } from 'react'
import Button from '../components/Button';

function useCounter(initialCount) {
    const [count, setCount] = useState(initialCount);

    const handleClick = () => {
      setCount(count+1)
    }
  
    useEffect(() => {
      console.log(count)
    }, [count])

    return {
        count,
        handleClick
    }
}


function CounterPage({ initialCount }) {
 const {count, handleClick} = useCounter(initialCount)

  return <div>
    <h1>Count is {count}</h1>
    <Button onClick={handleClick}  variations='primary'>
        Increment
    </Button>
  </div>
}

export default CounterPage