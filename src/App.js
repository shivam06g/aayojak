import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
// import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Banner from "./components/Banner";
import Eventdashboard from "./Pages/Eventdashboard";
import Eventcanteen from "./Pages/Eventcanteen";
import Eventaudi from "./Pages/Eventaudi";
import Socialmedia from "./Pages/Socialmedia";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PublicRoute />} >
          <Route exact path="/" element={<Socialmedia/>} ></Route>
        </Route>
        <Route path="/users" element={<PrivateRoute />}>
          <Route path="/users" element={<Profile />}></Route>
        </Route>
        <Route path="/banner" element={<PrivateRoute />}>
          <Route path="/banner" element={<Banner />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
