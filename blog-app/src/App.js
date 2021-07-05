import React from 'react';
import { useSelector } from 'react-redux';
import Blogs from './components/blogs';
import HomePage from './components/HomePage';
import Nav from './components/Nav';
import { selectSingedIn } from './features/userSlice';
import './styles/app.css'
const App = () => {
  const isSignedIn =useSelector(selectSingedIn);
  return (
    <div className="app">
      <Nav />
      <HomePage />
      {isSignedIn && <Blogs />}
    </div>
  );
}

export default App;
