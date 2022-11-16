import "./medical-label.css";
import { dict, comment } from "../components/Labeling/Data.js";
import {
  FaRobot,
  FaPen,
  FaHistory,
  FaRegFlag,
  FaInfoCircle,
} from "react-icons/fa";
import { useRipple } from 'react-use-ripple';
import { useRef } from 'react';

const RelationdataItem = ({ index, group }) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{group.id}</td>
      <td>{group.med_size}</td>
      <td>{group.true_size}</td>
      <td>{group.fake_size}</td>
      <td>{group.verified}</td>
    </tr>
  )
}

const groupData = [
  {
    id: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    med_size: "Disagree",
    fake_size: "link",

  },
  {
    id: "Lorem ipsum",
    med_size: "Agree",
    fake_size: "link",
  },
  {
    id: "Lorem ipsum",
    med_size: "Disagree",
    fake_size: "link",

  }
]

function Medical_label() {
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

  const medicalButtonRef = useRef();
  const nonmedButtonRef = useRef();
  const skipButtonRef = useRef();

  useRipple(medicalButtonRef, { animationLength: 300, rippleColor: 'white' })
  useRipple(nonmedButtonRef, { animationLength: 300, rippleColor: 'white' })
  useRipple(skipButtonRef, { animationLength: 300, rippleColor: 'white' })

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
          <p className="question">Is this news medical?</p>
          <button className="medical" ref={medicalButtonRef}>
            <span>Medical</span>
            <span>This news is medical-related.</span>
            <img src={"icons/medical.svg"} />
          </button>
          <button className="nonmed" ref={nonmedButtonRef}>
            <span>Nonmed</span>
            <span>This news is not medical-related.</span>
            <img src={"icons/nonmed.svg"} />
          </button>
          <button className="skip" ref={skipButtonRef}>
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
              <FaPen style={{ fontSize: "20px", color: "#2A344E" }} />
            </div>
            <div className="icon">
              <FaHistory style={{ fontSize: "20px", color: "#2A344E" }} />
            </div>
            <div className="icon">
              <FaRegFlag style={{ fontSize: "20px", color: "#2A344E" }} />
            </div>
            <div className="icon">
              <FaInfoCircle style={{ fontSize: "20px", color: "#2A344E" }} />
            </div>
          </div>
          <div className="related-post">
            <h2 style={{ color: 'white' }}>Related Post</h2>
            {/* <tr>
              <th>No</th>
              <th>Content</th>
              <th>Status</th>
              <th>Link</th>
            </tr> */}

            <table className="relation-table">
              {groupData.map((group, index) => (
                <RelationdataItem index={index + 1} group={group} />
              ))}
            </table>

          </div>
        </div>
      </div>
    </div>
  );
}
export default Medical_label;
