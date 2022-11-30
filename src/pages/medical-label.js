import "./medical-label.css";
import { dict, comment, groupData } from "../components/Labeling/Data.js";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import LabelButtonPair from "./LabelButtonPair";
import { useEffect, useState } from "react";
import axios from "axios";

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

function MedicalLabel({posts, fetchPosts, page, setPage}) {
  const [labelPosts, setLabelPosts] = useState(posts.filter(post=> post.is_auto === false))
  const [currentPost, setCurrentPost] = useState(0)
  useEffect(()=>{
    setLabelPosts(posts.filter(post=> post.is_auto === false))
  }, [posts])
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


  const handlePrev = () => {
    setCurrentPost(Math.max(currentPost-1,0));
  }

  const handleSubmit = () => {
    let post_id = labelPosts[currentPost]["_id"]['$oid'].toString()
    axios.post(`http://doancnpmtest.herokuapp.com/posts/update/${post_id}`, {
      params: {
        verifyNews: verifiedOrUnverified === "left" ? "true": "false",
        medicalNews: medicalOrNonmed === "left" ? "true": "false",
        fakeNews: trueOrFalse === "left" ? "true": "false",
        humanCheck: "true"
      }
    }).then(res => {
      console.log(res.data.status)
    })
    setMedicalOrNonmed("none")
    setTrueOrFalse("none")
    setVerifiedOrUnverified("none")
  }

  const handleNext = () => {
    // Get more post 
    handleSubmit()
    if(currentPost === labelPosts.length-2){
      fetchPosts(page+1)
      setPage(page+1)
    }
    setCurrentPost(Math.min(currentPost+1, labelPosts.length-1))
  }

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
            <p>{labelPosts[currentPost].text}</p>
          </div>
          <hr></hr>
          <div className="bottom">
            {actions.map((action) => (
              <img
                key={`${action}`}
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
          <table className="relation-table">
            {groupData.map((group, index) => (
              <RelationdataItem index={index + 1} group={group} />
              ))}
          </table>
        </div>
        <div className="buttons_container">
          <button onClick={handlePrev}>
            <BiChevronLeft size={30} color="#fff" />
          </button>
          <span>{currentPost+1} out of {labelPosts.length}</span>
          <button onClick={handleNext}>
            <BiChevronRight size={30} color="#fff" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default MedicalLabel;
