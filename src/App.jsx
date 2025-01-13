
import { useState } from 'react'
import './App.css'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home';
import WarningText from './Components/WarningText';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = (id, password) =>{
    if(id === '' && password === ''){
      setLoggedIn(true);
    } else{
      alert("invalid credentials");
    }
  }

  return (
    <>

      <div>
        <WarningText></WarningText>
        {
          isLoggedIn ? <Home></Home> : <Login handleLogin={handleLogin}></Login>
        }
      </div>
    </>
  )
}

export default App
