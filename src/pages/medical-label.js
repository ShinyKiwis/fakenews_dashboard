import "./medical-label.css";
import { dict, comment, groupData } from "../components/Labeling/Data.js";
import { useRipple } from "react-use-ripple";
import { useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import LabelButtonPair from "./LabelButtonPair";

const RelationdataItem = ({ index, group }) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{group.id}</td>
      <td>{group.status}</td>
      <td>{group.link}</td>
    </tr>
  );
};

function Medical_label() {
  const [medicalOrNonmed, setMedicalOrNonmed] = useState("none");
  const [trueOrFalse, setTrueOrFalse] = useState("none");
  const [verifiedOrUnverified, setVerifiedOrUnverified] = useState("none");

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
    <div className="label_container">
      <div className="label_section">
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
      </div>
      <div className="label">
        <LabelButtonPair
          left="Medical"
          right="Nonmed"
          leftOrRight={medicalOrNonmed}
          setLeftOrRight={setMedicalOrNonmed}
          AILabel={"Nonmed"}
        />
        <hr></hr>
        <LabelButtonPair
          left="True"
          right="False"
          leftOrRight={trueOrFalse}
          setLeftOrRight={setTrueOrFalse}
          AILabel={"True"}
        />
        <hr></hr>
        <LabelButtonPair
          left="Verified"
          right="Unverified"
          leftOrRight={verifiedOrUnverified}
          setLeftOrRight={setVerifiedOrUnverified}
        />

        <h2 style={{ color: "white" }}>Related Post</h2>
        <div className="related-post">
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
        <div className="buttons_container">
          <button>
            <BiChevronLeft size={30} color="#fff" />
          </button>
          <button>
            <BiChevronRight size={30} color="#fff" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Medical_label;
