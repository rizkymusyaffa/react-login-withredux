import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { logout } from '../config/Login/LoginSlice';
import LoginChecker from '../utils/loginChecker';
function LoginPage() {
  const data = useSelector((state) => state.login)
  const dispatch = useDispatch()
  const {isLogin, isAdmin} = LoginChecker();
  const Logout = () => {
    dispatch(logout())
    window.location.reload()
  }

  return (
    <div>
      {isLogin? (
        <div>
        {isAdmin? ( //admin page
          <div className="welcome"> 
          <h1> Admin Page</h1>
          <h1>Welcome, <span>{data.user.name}</span></h1>
          <button onClick={Logout}>Logout</button>
          </div>
        ) : (
          <div className="welcome">
          <h1>Welcome, <span>{data.user.name.firstname}</span></h1>
          <button onClick={Logout}>Logout</button>
          </div>
        )}
        </div>
        
      ): (
       <LoginForm error={data.errorMessage}/>
      )}
    </div>
  );
}

export default LoginPage;
