import "./Login.css"
import 'react-slideshow-image/dist/styles.css'
import axios from "axios";



/*Slideshow image*/
const fadeImages = [
    {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/HCMUT_official_logo.png/760px-HCMUT_official_logo.png',
    },
    {
    url: 'https://oisp.hcmut.edu.vn/oep/static/media/oisp-nav-logo.2aaf02f9.png',
    },
];


export default function Login({setAuth}) {

  const handleAuthentication = (e) => {
    e.preventDefault()
    // axios get to heroku to return a true false value then set for 
    axios.post('http://localhost:5000/login/authenticate', {
      params: {
        userAccount: e.target.username.value,
        userPassword: e.target.username.password
      }
    }).then((res)=>{
        sessionStorage.setItem("auth", res.data.status)
        setAuth(res.data.status)
      })
  }
  return (
        <div className="login">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/HCMUT_official_logo.png/760px-HCMUT_official_logo.png" />
        <div className="login-wrapper">
            <h1>Welcome back!</h1>
            <form onSubmit={(e)=>{handleAuthentication(e)}}>
              <div className="form-group">
                <input type="text" name="username"  placeholder="Username"/>
              </div>
              <div className="form-group">
                  <input type="password" name="password"  placeholder="Password"/>
              </div>
              <div className="form-button">
                <button>Login</button>
                <button>Register</button>
              </div>
            </form>
        </div>
      </div>
  )
}
