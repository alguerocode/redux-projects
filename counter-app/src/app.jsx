import React, { useContext, useState } from "react";
import { StoreContext } from "./index";
import "./style.css";
const App = () => {
  const counterStore = useContext(StoreContext);
  const [counterScreen, setCounterScreen] = useState(counterStore.getState());
  counterStore.subscribe(() => {
    setCounterScreen(counterStore.getState());
  });

  return (
    <div className="app">
      <div className="counter-screen">{counterScreen}</div>
      <button
        onClick={() => {
          counterStore.dispatch({ type: "increment" });
        }}>
        +
      </button>
      <button
        onClick={() => {
          counterStore.dispatch({ type: "decrement" });
        }}>
        -
      </button>
    </div>
  );
};

export default App;
