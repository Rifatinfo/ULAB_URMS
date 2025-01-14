
import { useEffect, useState } from 'react'
import './App.css'
import Login from './Components/Login/Login'
import Mains from './Mains/Mains';
// import WarningText from './Components/WarningText';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState([]);
  useEffect(() => {
      fetch('Data.json')
          .then(res => res.json())
          .then(data => setSubjects(data));
  },[]);
  console.log(subjects);

 const handleSelectedSubject = (subject) =>{  
    const isExist = selectedSubject.find(sub => sub._id == subject._id);
    if(isExist){
        alert("You already add a subjects");
    } else{
      // alert("added a subjects");
      const newSubject = [...selectedSubject,subject];
      setSelectedSubject(newSubject);
    }
 }

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
        {/* <WarningText></WarningText> */}
        {
          isLoggedIn ?<Mains subjects={subjects}
          handleSelectedSubject={handleSelectedSubject}
          selectedSubject={selectedSubject}
          ></Mains> : <Login handleLogin={handleLogin}></Login>
        }
      </div>
    </>
  )
}

export default App
