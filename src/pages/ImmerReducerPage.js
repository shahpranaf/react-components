import React, { useReducer } from 'react'
import Button from '../components/Button';
import Panel from '../components/Panel';
import { produce } from 'immer';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'set_value_to_add';
const HANDLE_ADD_COUNT = 'handle_add_count';



const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT: {
            state.count = state.count + 1;
            return;
        }
        case DECREMENT_COUNT: {
            state.count = state.count - 1;
            return;
        }
        case SET_VALUE_TO_ADD: {
            state.valueToAdd = action?.payload;
            return;
        }
        case HANDLE_ADD_COUNT: {
            state.count = state.count + state.valueToAdd;
            state.valueToAdd = 0;
            return;
        }
        default: {
            return;
        }
    }

}

function ImmerReducerPage({ initialCount }) {

    //  const [count, setCount] = useState(initialCount);
    //  const [valueToAdd, setValueToAdd] = useState(0);

    const [state, dispatch] = useReducer(produce(reducer), {
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
        <h1>Counter with Immer and Reducer</h1>
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

export default ImmerReducerPage