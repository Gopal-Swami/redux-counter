import { useEffect, useState } from 'react';
import './App.css';
import Buttons from './component/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { increaseHandler } from './actions/countActions';
import { decreaseHandler } from './actions/countActions';
function App() {
  const dispatch = useDispatch();
  const [count, setCounter] = useState(0);

  const counter = useSelector((state) => state.count);
  const { count: countFromReducer } = counter;
  const increaseCounter = () => {
    dispatch(increaseHandler(count));
  };

  const decreaseCounter = () => {
    dispatch(decreaseHandler(count));
  };

  useEffect(() => {
    setCounter(countFromReducer ? countFromReducer : 0);
  }, [countFromReducer]);
  return (
    <div className="App">
      <div className="result">{count}</div>
      <div className="actions">
        <Buttons className="action" icon="+" action={increaseCounter} />
        <Buttons className="action" icon="-" action={decreaseCounter} />
      </div>
    </div>
  );
}

export default App;
