import "./Login.css"
import { Fade } from "react-slideshow-image";

function Login() {
    return (
        <div className="outside">
            <div className="inside">
                <div className="slide-frame">
                    <Fade>
                        <div className="slides">
                            <img className="image" src="https://www.popsci.com/uploads/2020/06/05/3NIEQB3SFVCMNHH6MHZ42FO6PA.jpg?auto=webp" />
                        </div>
                        <div className="slides">
                            <img className="image" src="https://www.popsci.com/uploads/2020/06/05/3NIEQB3SFVCMNHH6MHZ42FO6PA.jpg?auto=webp" />
                        </div>
                        <div className="slides">
                            <img className="image" src="https://www.popsci.com/uploads/2020/06/05/3NIEQB3SFVCMNHH6MHZ42FO6PA.jpg?auto=webp" />
                        </div>
                    </Fade>
                    {/* <img
                        className="image"
                        src="https://www.popsci.com/uploads/2020/06/05/3NIEQB3SFVCMNHH6MHZ42FO6PA.jpg?auto=webp"
                    /> */}
                </div>

                <div className="login-frame">
                    <h1 style={{ marginTop: '180px' }}> LOGIN </h1>
                    <h5> You must login to use our website</h5>
                    <form>
                        <label>
                            <p>Username</p>
                            <input type="text" />
                        </label>
                        <label>
                            <p>Password</p>
                            <input type="password" />
                        </label>
                        <div>
                            <button type="submit" style={{ marginTop: '20px' }}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;
