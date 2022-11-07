import React, {useState} from 'react';
import LoginForm from './components/LoginForm';

function App() {
  const adminUser = {
    email: "admin@gmail.com",
    password: "123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Berhasil Login");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Tidak Berhasil Login");
      setError("Tidak Berhasil Login");
    }
  }

  const Logout = () => {
    setUser({name: "", email: ""});
  }

  return (
    <div className="App">
      {(user.email !== "")? (
        <div className="welcome">
          <h1>Welcome, <span>{user.name}</span></h1>
          <button onClick={Logout}>Logout</button>
        </div>
      ): (
       <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
