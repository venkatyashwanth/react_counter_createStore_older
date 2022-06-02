import {useSelector, useDispatch} from 'react-redux';

function App() {
  const counter = useSelector((state)=> state.counter);
  const dispatch = useDispatch();
  const increment = ()=>{
    dispatch({type: 'INC'});
  }
  const decrement = ()=>{
    dispatch({type: 'DEC'});
  }
  const addby = () =>{
    dispatch({type: 'ADD',payload: 10});
  }
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addby}>Add By</button>
    </div>
  );
}

export default App;
