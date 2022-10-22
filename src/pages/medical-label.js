import "./medical-label.css"
import { dict, comment } from '../components/Labeling/Data.js'
import { FaRobot, FaPen, FaHistory, FaRegFlag, FaInfoCircle } from "react-icons/fa";


function Medical_label() {
    const actions = ["like", "love", "care", "haha", "wow", "sad", "angry", "comment", "share"]
    return (
        <div>
            <div className="row">
                <div className="post">
                    <div className="top">
                        <img
                            className="avatar"
                            src={dict[0].avatar}
                            width={40}
                            height={40}
                            alt=""
                        />
                        <p>{dict[0].name}</p>
                    </div>
                    <div className="content">
                        <p>{dict[0].message}</p>
                    </div>
                    <hr></hr>
                    <div className="bottom">
                        {actions.map(action => (
                            <img
                                src={`emotions/${action}.png`}
                                alt="emotion_icon"
                                width={40}
                                height={40}
                            />
                        ))}
                    </div>
                    <hr></hr>
                    <div className="commentarea">
                        <img
                            className="cmtavatar"
                            src={comment[0].avatar}
                            width={40}
                            height={40}
                            alt=""
                        />
                        <div className="comment"><p><b>{comment[0].name}</b></p><p>{comment[0].message}</p></div>
                    </div>
                    <div className="commentarea">
                        <img
                            className="cmtavatar"
                            src={comment[1].avatar}
                            width={40}
                            height={40}
                            alt=""
                        />
                        <div className="comment"><p><b>{comment[1].name}</b></p><p>{comment[1].message}</p></div>
                    </div>
                </div>
                <div className="label">
                    <p>Is this news medical ?</p>
                    <button className="medical"><p></p><h5>This news is medical-related</h5></button>
                    <button className="nonmed"><p></p><h5>This news is not medical-related</h5></button>
                    <button className="skip"><p></p><h5>Additional information is required</h5></button>
                    <div style={{ marginTop: '30px' }}>
                        <FaRobot style={{ color: 'white', fontSize: '40px', float: 'left', padding: '10px 15px' }} />
                        <p style={{ color: 'white', fontSize: '12px' }}>ML classìication suggests that this is </p>
                        <p style={{ color: 'white', fontSize: '30px', margin: '-15px 0px 0px 5px' }}>Nonmed</p>
                    </div>
                    <hr style={{ padding: '40px 5px', borderRadius: '5px' }}></hr>
                    <div className="icon-area">
                        <div className="icon">< FaPen style={{ fontSize: '20px', float: 'left', margin: '15px 15px' }} /></div>
                        <div className="icon">< FaHistory style={{ fontSize: '20px', float: 'left', margin: '15px 15px' }} /></div>
                        <div className="icon"><FaRegFlag style={{ fontSize: '20px', float: 'left', margin: '15px 15px' }} /></div>
                        <div className="icon"><FaInfoCircle style={{ fontSize: '20px', float: 'left', margin: '15px 15px' }} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Medical_label;
