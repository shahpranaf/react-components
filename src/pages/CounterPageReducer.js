import React, { useReducer } from 'react'
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'set_value_to_add';
const HANDLE_ADD_COUNT = 'handle_add_count';



const reducer = (state, action) => {
  switch(action.type) {
    case INCREMENT_COUNT:  {
      return {
        ...state,
        count: state.count + 1
      }
    }
    case DECREMENT_COUNT: {
      return {
        ...state,
        count: state.count - 1
      }
    }
    case SET_VALUE_TO_ADD:  {
      return {
        ...state,
        valueToAdd: action?.payload
      }
    }
    case HANDLE_ADD_COUNT: {
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0
      }
    }
    default: {
      return state;
    }
  }
  
}

function CounterPageReducer({ initialCount }) {

  //  const [count, setCount] = useState(initialCount);
  //  const [valueToAdd, setValueToAdd] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0
  })

  const handleIncrement = () => {
    // setCount(count + 1)
    dispatch({ type: INCREMENT_COUNT })
  }

  const handleIDecrement = () => {
    // setCount(count - 1)
    dispatch({ type: DECREMENT_COUNT })
  }

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;

    dispatch({ type: SET_VALUE_TO_ADD, payload: value })
  }

  const handleAddCount = (e) => {
    e.preventDefault();
    // setCount(count+valueToAdd);
    // setValueToAdd(0)
    dispatch({ type: HANDLE_ADD_COUNT })
  }

  return <Panel className="m-3" >
    <h1 className="text-lg">Count is {state.count}</h1>
    <div className="flex">
      <Button onClick={handleIncrement} variations='primary'>
        Increment
      </Button>
      <Button onClick={handleIDecrement} variations='primary'>
        Decrement
      </Button>
    </div>

    <form onSubmit={handleAddCount}>
      <label>Add a lot!</label>
      <input
        type="number"
        className='p-1 m-3 bg-gray-50 border border-gray-300'
        value={state.valueToAdd || ""}
        onChange={handleChange}
      />
      <Button>Add it!</Button>
    </form>
  </Panel>
}

export default CounterPageReducer