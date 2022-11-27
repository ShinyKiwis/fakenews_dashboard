import Pill from "../components/Common/Pill";
import NewsStyle from "./News.module.css";
import { HiPencil, HiFlag } from "react-icons/hi";
import {useState, useEffect} from "react"
import axios from "axios";

const PostItem = ({ postContent, groupID, type, validity }) => {
  return (
    <tr className={NewsStyle.post_item}>
      <td>{postContent}</td>
      <td>{groupID}</td>
      <td style={{ paddingRight: "1em" }}>
        <Pill type={type} />
      </td>
      <td>
        <div className={NewsStyle.post_edit}>
          <Pill type={validity} />
          <HiPencil
            className={NewsStyle.post_icon}
            style={{ color: "#2A344E" }}
          />
          <HiFlag
            className={NewsStyle.post_icon}
            style={{ color: "#2A344E" }}
          />
        </div>
      </td>
    </tr>
  );
};

const News = () => {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    axios.get("https://doancnpmtest.herokuapp.com/posts/page/1")
    .then(res=> {
        setPosts(res.data)
      })
  }, [])
  // const posts = [
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Medical",
  //     validity: "False",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Nonmed",
  //     validity: "Unverified",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Medical",
  //     validity: "True",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Medical",
  //     validity: "Not News",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Nonmed",
  //     validity: "Unverified",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Medical",
  //     validity: "Not News",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Nonmed",
  //     validity: "False",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Medical",
  //     validity: "True",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Nonmed",
  //     validity: "False",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Nonmed",
  //     validity: "True",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Medical",
  //     validity: "Not News",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Nonmed",
  //     validity: "Unverified",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Medical",
  //     validity: "Not News",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Medical",
  //     validity: "False",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Nonmed",
  //     validity: "Unverified",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Medical",
  //     validity: "True",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Medical",
  //     validity: "Not News",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Medical",
  //     validity: "True",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Medical",
  //     validity: "Not News",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Nonmed",
  //     validity: "Unverified",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Medical",
  //     validity: "Not News",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Nonmed",
  //     validity: "False",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Nonmed",
  //     validity: "Unverified",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Medical",
  //     validity: "Not News",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Nonmed",
  //     validity: "False",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Medical",
  //     validity: "True",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Nonmed",
  //     validity: "False",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Nonmed",
  //     validity: "True",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Medical",
  //     validity: "Not News",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Nonmed",
  //     validity: "Unverified",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Medical",
  //     validity: "Not News",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Medical",
  //     validity: "False",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Nonmed",
  //     validity: "Unverified",
  //   },
  //   {
  //     postContent:
  //       "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id...",
  //     groupID: "123123123123",
  //     type: "Medical",
  //     validity: "True",
  //   },
  // ];
  return (
    <div className={NewsStyle.container}>
      <div className={NewsStyle.container_header}>
        <div>
          <h2 className={NewsStyle.title}>Medical News Check</h2>
          <span className={NewsStyle.tags}>All</span>
        </div>
        <select className={NewsStyle.select_box}>
          <option disabled>----Select News---</option>
          <option value="">All News</option>
          <option disabled>----Medicality---</option>
          <option value="">Medical</option>
          <option value="">Not Medical</option>
          <option disabled>----Verification---</option>
          <option value="">True News</option>
          <option value="">Fake News</option>
          <option value="">Unchecked</option>
          <option disabled>----Groups---</option>
        </select>
      </div>
      <table className={NewsStyle.posts_table}>
        <tr>
          <th style={{ width: "50%" }}>Content</th>
          <th style={{ width: "10%" }}>Group ID</th>
          <th style={{ width: "10%" }}>Type</th>
          <th style={{ width: "20%" }}>Validity</th>
        </tr>
        {posts.map((post) => (
          <PostItem
            postContent={post.text}
            groupID="123123asd123"
            type={post.is_medical ? "Medical": "Nonmed"}
            validity={post.is_verify_fakenew ? (post.is_fakenew ? "False": "True" ) : "Unverified"}
          />
        ))}
      </table>
    </div>
  );
};

export default News;
