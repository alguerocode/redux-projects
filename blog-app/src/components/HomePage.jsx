import GoogleLogin from 'react-google-login';
import {useDispatch, useSelector} from 'react-redux';
import {selectSingedIn, setSignedIn, setUserData} from '../features/userSlice';
import '../styles/home.css'
const HomePage = () => {
  const dispatch =useDispatch();
  const login = (response) => {
    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
  };
  const isSignedIn = useSelector(selectSingedIn);
  return (
    <div className="home-page" style={{display: isSignedIn ? 'none' : ''}}>
      {!isSignedIn && (
        <div className="login-message">
          <h2>📗</h2>
          <h1>A Readers favourite place!</h1>
          <p>
            We provide high quality online resource for reading blogs. Just sign
            up and start reading some quality blogs.
          </p>
          <GoogleLogin
            clientId="733580408024-l0f1rnlpk31sekr6fo88v60ctja8est8.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="login-button">
                Login with Google
              </button>
            )}
            onSuccess={login}
            onFailure={login}
            isSignedIn={true}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      )}
    </div>
  );
};

export default HomePage;
