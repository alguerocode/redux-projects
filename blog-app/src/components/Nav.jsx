import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import '../styles/navbar.css'
import {
  selectSingedIn,
  selectUserData,
  setBlogData,
  setInput,
  setSignedIn,
  setUserData,
} from '../features/userSlice';
import {Avatar} from '@material-ui/core';
import {GoogleLogout} from 'react-google-login';
const Nav = () => {
  const isSignedIn = useSelector(selectSingedIn);
  const [searchText, setSearchText] = useState('');
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(setInput(searchText));
  };

  const logout = () => {
    dispatch(setUserData(null));
    dispatch(setSignedIn(false));
    dispatch(setBlogData(null));
  };
  return (
    <div className="navbar">
      <h1 className="navbar-header">HackerBook 📕</h1>
      {isSignedIn && (
        <div className="blog-search">
          <input
            type="text"
            placeholder="search for a blog"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="search"
          />
          <button className="submit" onClick={clickHandler}>Search</button>
        </div>
      )}
      {isSignedIn ? (
        <div className="navbar-user-data">
          <Avatar
            className="user"
            src={userData?.imageUrl}
            alt={userData?.name}
          />
          <h1 className="signedIn">{userData?.givenName}</h1>
          <GoogleLogout
            clientId="57529085775-fk8rn8hren1q8o5ja2idq4m7hug5aong.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="logout-button">
                Logout 😦
              </button>
            )}
            onLogoutSuccess={logout}
          />
        </div>
      ) : (
        <h1 className="notSignedIn">User not available 😞</h1>
      )}
    </div>
  );
};

export default Nav;
