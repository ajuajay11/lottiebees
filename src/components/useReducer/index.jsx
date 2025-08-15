import { useReducer } from "react"


function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            break;
    }
}

export default function index() {
    function increment() {
        dispatch({type:'increment'});
    }
    function decrement() {
        dispatch({type:'decrement'});
    }
    const [state, dispatch] = useReducer(reducer, { count: 1 })
    return (
        <>
            {state.count}
            <button onClick={increment}>incre</button>
            <button onClick={decrement}>incre</button>
        </>
    )
}



// usereducer is like statemanegment therory ,its actually same like useState, in the complex case we can use usereducer , the syntax is different