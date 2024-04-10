import './App.css';
import logo from './images/logo.jpg';
import glogin from './images/glogin.png';
import flogin from './images/flogin.png';

function App() {
  return (
    <div className="App">
      <div className="contentBox">
        <div className="header">
          <div className="img"><img src={logo} style={{width:'100%', height:'100%'}}/></div>
            <div className="headerText">
              <div style={{fontSize:'4vmin',paddingBottom:'1vmin',fontWeight:'700'}}>Register here...</div>
              <div style={{fontSize:'2.5vmin'}}>Create Your Account On Divine Connection</div>
            </div>
        </div>
        <div className="inputContent">
          <div className='inputDivider'>
            <input placeholder="First name"/>
            <input placeholder="Last name"/>
            <input placeholder="Email"/>
          </div>
          <div className='inputDivider'>
            <input placeholder="Phone No."/>
            <input placeholder="Password"/>
            <input placeholder="Confirm Password"/>
          </div>
        </div>
        <div className='fotter'>
          <button id="registerBtn" onclick="register()">Register</button>

          Already have an account? 
          <div class="login-container">
  <button id="loginBtn" onclick="login()">Login</button>
</div>
          <div className="line-with-text">
            <div className="line"></div>
            <span className="text">or signup with</span>
            <div className="line"></div>
          </div>
          <div className='btnHolder'>
          <a href="https://www.facebook.com/"><img className='loginbtn' src={flogin} /></a>
    <a href="https://www.google.co.in/"><img className='loginbtn' src={glogin} /></a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
