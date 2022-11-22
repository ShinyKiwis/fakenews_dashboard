import "./Login.css"
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';



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
    console.log(e.target.username.value)
    console.log(e.target.password.value)
    // axios get to heroku to return a true false value then set for 
  }
  // <div className="container">
  //     <div className="slideshow">
  //         <div className="slide-container">
  //             <Fade arrows={false} indicators={true}>
  //                 {fadeImages.map((fadeImage, index) => (
  //                 <div className="each-fade" key={index}>
  //                     <div className="image-container">
  //                     <img src={fadeImage.url} />
  //                     </div>
  //                 </div>
  //                 ))}
  //             </Fade>
  //         </div>
  //     </div>
  //
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
