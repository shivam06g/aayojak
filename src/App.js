import "./App.css";
import profile from "./logo/Aayojak-logos/Aayojak-1.png";
// import img from './image/images.jfif'
// import img1 from './image/bg.jfif'
// style={{backgroundImage:`url(${img1})` , width: '100%' }}
function App() {
  return (
    <>
      
      <div className="main" >
        
        <div className="sub-main" >
          {/* <img src={img} alt="photo"/> */}
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={profile} alt="profile" className="profile" />
              </div>
            </div>
            <div>
              <h1>Login Page</h1>
              <div>
                {/* <img src={email} alt="email" className="email" /> */}
                <input type="text" placeholder="user mail" className="name" />
              </div>
              <div className="second-input">
                {/* <img src={pass} alt="pass" className="email" /> */}
                <input
                  type="password"
                  placeholder="password"
                  className="name"
                />
              </div>
              <div className="second-input">
                <div className="namee">
                <div className="input-group select">
                  <select className="custom-select select name" id="inputGroupSelect01">
                    <option value="1">Owner</option>
                    <option value="2">admin</option>
                    <option value="3">Enduser</option>
                  </select>
                </div>
                </div>
                {/* <img src={pass} alt="pass" className="email" /> */}
              </div>

              <div className="login-button">
                <button>Login</button>
              </div>
              <p className="link">
                <a href="/">Forgot password ?</a> Or <a href="/">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default App;
