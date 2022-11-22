import "./medical-label.css";
import { dict, comment, groupData } from "../components/Labeling/Data.js";
import { useRipple } from 'react-use-ripple';
import { useRef } from 'react';

const RelationdataItem = ({ index, group }) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{group.id}</td>
      <td>{group.status}</td>
      <td>{group.link}</td>
    </tr>
  )
}



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
          <div className="label-holder">
            <button className="medical" ref={medicalButtonRef}>
              <span>Medical</span>
              <img src={"icons/medical.svg"} />
            </button>
            <button className="nonmed" ref={nonmedButtonRef}>
              <span>Nonmed</span>
              <img src={"icons/nonmed.svg"} />
            </button>
          </div>
          <hr></hr>
          <div className="label-holder">
            <button className="true" ref={medicalButtonRef}>
              <span>True</span>
              <img src={"icons/medical.svg"} />
            </button>
            <button className="false" ref={nonmedButtonRef}>
              <span>False</span>
              <img src={"icons/nonmed.svg"} />
            </button>
          </div>
          <hr></hr>
          <div className="label-holder">
            <button className="verified" ref={medicalButtonRef}>
              <span>Verified</span>
              <img src={"icons/medical.svg"} />
            </button>
            <button className="unverified" ref={skipButtonRef}>
            <span>Unverified</span>
            <img src={"icons/unverified.svg"} />
            </button>
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
