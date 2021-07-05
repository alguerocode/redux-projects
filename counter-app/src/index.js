import ReactDOM from 'react-dom'
import React, { createContext, StrictMode } from 'react';
import App from './app';
import { store } from "./store"
export const StoreContext = createContext()
ReactDOM.render(
  <StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </StrictMode>,
  document.getElementById('root')
)