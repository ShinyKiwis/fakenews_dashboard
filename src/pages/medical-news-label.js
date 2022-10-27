import "./medical-label.css";
import { dict, comment } from "../components/Labeling/Data.js";
import {
  FaRobot,
  FaPen,
  FaHistory,
  FaRegFlag,
  FaInfoCircle,
} from "react-icons/fa";

function Medicalnews_label() {
  const actions = [
    "like",
    "love",
    "care",
    "haha",
    "wow",
    "sad",
    "angry",
    "comment",
    "share",
  ];
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
            {actions.map((action) => (
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
            <div className="comment">
              <p>
                <b>{comment[0].name}</b>
              </p>
              <p>{comment[0].message}</p>
            </div>
          </div>
          <div className="commentarea">
            <img
              className="cmtavatar"
              src={comment[1].avatar}
              width={40}
              height={40}
              alt=""
            />
            <div className="comment">
              <p>
                <b>{comment[1].name}</b>
              </p>
              <p>{comment[1].message}</p>
            </div>
          </div>
        </div>
        <div className="label">
          <p className="question">Is this a news post?</p>
          <button className="news">
            <span>News</span>
            <span>This is a news post.</span>
            <img src={"icons/news.svg"} />
          </button>
          <button className="notnews">
            <span>Not News</span>
            <span>This is not a news post.</span>
            <img src={"icons/notnews.svg"} />
          </button>
          <button className="skip">
            <span>Skip</span>
            <span>Additional information is required.</span>
            <img src={"icons/unverified.svg"} />
          </button>
          
          <div className="robot">
            <img src={"icons/robot.svg"} />
            <span>ML classication suggests that this is</span>
            <span>News</span>
          </div>

          <div className="icon-area">
            <div className="icon">
              <FaPen
                style={{
                  fontSize: "20px",
                  float: "left",
                  margin: "15px 15px",
                  color: "#2A344E",
                }}
              />
            </div>
            <div className="icon">
              <FaHistory
                style={{
                  fontSize: "20px",
                  float: "left",
                  margin: "15px 15px",
                  color: "#2A344E",
                }}
              />
            </div>
            <div className="icon">
              <FaRegFlag
                style={{
                  fontSize: "20px",
                  float: "left",
                  margin: "15px 15px",
                  color: "#2A344E",
                }}
              />
            </div>
            <div className="icon">
              <FaInfoCircle
                style={{
                  fontSize: "20px",
                  float: "left",
                  margin: "15px 15px",
                  color: "#2A344E",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Medicalnews_label;
