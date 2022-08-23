/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Profile from "./Pages/Profile";
import Banner from "./components/Banner";
import { useProfile } from "./context/ProfileContext";
// import { ProfileProvider } from "./context/ProfileContext";
import Eventmain from './Pages/Eventmain'
import EventForm from './Pages/EventForm'
import Eventcanteen from './Pages/Eventcanteen'
import Eventaudi from './Pages/Eventaudi'
import Socialmedia from './Pages/Socialmedia'
import Eventdashboard from "./Pages/Eventdashboard";



function App() {
  const {profile,setProfile}= useProfile(); 

  window.onbeforeunload = function()
  {
    var now = new Date();
    console.log(now)
    var minutes = 0.5;
    now.setTime(now.getTime() + (minutes * 60 * 1000));
    var cookieString = JSON.stringify(profile);
    document.cookie = cookieString;
    document.cookie = "expires=" + now.toLocaleString(undefined,{timeZone:'Asia/kolkata'}) + ";"
  };

  window.onload = async function()
  {
    const cookie= document.cookie;
    console.log(cookie)
    var index= cookie.indexOf('}')
    console.log(index)
    // {"email":"gg@kuk.ac.in","password":"h123","userType":"faculty","error":false,"doRedirect":false}; expires=8/23/2022, 3:04:21 PM
    if(index===-1)
    {
      setProfile(null)
    }
    else{
    let result = cookie.substring(0, index+1);
    console.log(JSON.parse(result))
     setProfile(JSON.parse(result))
    console.log(profile)
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PublicRoute />}>
          <Route exact path="/" element={<Banner/>}></Route>
        </Route>
        <Route path="/users" element={<PrivateRoute />}>
          <Route path="/users" element={<Profile />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
