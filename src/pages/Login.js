import "./Login.css"
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';



/*Slideshow image*/
const fadeImages = [
    {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpabf3c66yZMHAtXV6ug3rAhZcqT6PVCKdY82ru75R176_VyyuheCD4xs7uJGyFBSFPEo&usqp=CAU',
    caption: 'First Slide'
    },
    {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4cZ9lOOOu6h6acWTDqK20-fAUsvFAuLaYGHOh4bOJAWY2Nf9ObSpMt8lpY2k53OJAUs&usqp=CAU      ',
    caption: 'Second Slide'
    },
    {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkRBzxV4cHkciHpXZ4KPgbxJgWphuUaq6lXxhX4Foc3itxYw0eBsW-9yQVDl2s6yGHF38&usqp=CAU',
    caption: 'Third Slide'
    },
];


   export default function Login() {
    return (
        <div className="container">
            <div className="slideshow">
                <div className="slide-container">
                    <Fade>
                        {fadeImages.map((fadeImage, index) => (
                        <div className="each-fade" key={index}>
                            <div className="image-container">
                            <img src={fadeImage.url} />
                            </div>
                        </div>
                        ))}
                    </Fade>
                </div>
            </div>
            <div className="login">
              <div className="login-wrapper">
                  <h1>Please Log In</h1>
                  <form >
                    <div className="form-group">
                      <input type="text" name="username"  placeholder="Username"/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="user_password"  placeholder="Password"/>
                    </div>
                    <div className="tick">
                        <input type="checkbox" name="remember-me" />
                        <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember password ?</label>
                    </div>
                    <div className="form-button">
                        <input type="submit" name="signin" value="LOGIN"/>
                        <div className="form-button__register"><p>Don't have an account ?</p><a href="">Register</a></div>
                    </div>
                  </form>
              </div>
            </div>
        </div>
    )
}
