
import { useState } from 'react';
import './App.css';
import Card from './component/Card';
import users from "./users.json"

function App() {
  
  const getNumber=max=> Math.floor(Math.random()*max)
  const [user, setUser]=useState(getNumber(users.length))
  const mainUser= users[user]
  const handleUser =()=>{
    setUser(getNumber(users.length))
    setBackground( colors[getNumber(colors.length)])};
  const colors=["#845EC2","#4B4453", "#B0A8B9", "#C34A36", "#008B74", "#936C00", "#B740AD", "#C493FF", "#2F4858", "#C3F9FF"]
  const [background, setBackground]= useState(colors[getNumber(colors.length)])

  
  
 
  return (
    <>
    <Card name={mainUser.name.first + " " + mainUser.name.last}
     picture= {mainUser.picture.large}
     location={mainUser.location.country}
     cell={mainUser.cell}
     email={mainUser.email}
     handleUser={handleUser}
     background={background}
    />
    
    </>

    
  );
}

export default App;
