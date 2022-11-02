import Pill from "../components/Common/Pill";
import NewsStyle from "./News.module.css";
import { HiPencil, HiFlag } from "react-icons/hi";

const PostItem = ({ postContent, groupID, type, validity }) => {
  return (
    <tr>
      <td>{postContent}</td>
      <td>{groupID}</td>
      <td style={{ paddingRight: "1em" }}>
        <Pill type={type} color="blue" />
      </td>
      <td>
        <div className={NewsStyle.post_edit}>
          <Pill type={validity} color="red" />
          <HiPencil className={NewsStyle.post_icon} />
          <HiFlag className={NewsStyle.post_icon} />
        </div>
      </td>
    </tr>
  );
};

const News = () => {
  const posts = [
    {
      postContent:
        "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id irure consectetur aliquip. Qui magna dolore mollit sunt pariatur dolore occaecat. Velit mollit ad sunt elit est consequat.",
      groupID: "123123123123",
      type: "Medical",
      validity: "False",
    },
    {
      postContent:
        "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id irure consectetur aliquip. Qui magna dolore mollit sunt pariatur dolore occaecat. Velit mollit ad sunt elit est consequat.",
      groupID: "123123123123",
      type: "Medical",
      validity: "False",
    },
    {
      postContent:
        "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id irure consectetur aliquip. Qui magna dolore mollit sunt pariatur dolore occaecat. Velit mollit ad sunt elit est consequat.",
      groupID: "123123123123",
      type: "Medical",
      validity: "False",
    },
    {
      postContent:
        "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id irure consectetur aliquip. Qui magna dolore mollit sunt pariatur dolore occaecat. Velit mollit ad sunt elit est consequat.",
      groupID: "123123123123",
      type: "Medical",
      validity: "False",
    },
    {
      postContent:
        "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id irure consectetur aliquip. Qui magna dolore mollit sunt pariatur dolore occaecat. Velit mollit ad sunt elit est consequat.",
      groupID: "123123123123",
      type: "Medical",
      validity: "False",
    },
    {
      postContent:
        "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id irure consectetur aliquip. Qui magna dolore mollit sunt pariatur dolore occaecat. Velit mollit ad sunt elit est consequat.",
      groupID: "123123123123",
      type: "Medical",
      validity: "False",
    },
    {
      postContent:
        "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id irure consectetur aliquip. Qui magna dolore mollit sunt pariatur dolore occaecat. Velit mollit ad sunt elit est consequat.",
      groupID: "123123123123",
      type: "Medical",
      validity: "False",
    },
    {
      postContent:
        "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id irure consectetur aliquip. Qui magna dolore mollit sunt pariatur dolore occaecat. Velit mollit ad sunt elit est consequat.",
      groupID: "123123123123",
      type: "Medical",
      validity: "False",
    },
    {
      postContent:
        "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id irure consectetur aliquip. Qui magna dolore mollit sunt pariatur dolore occaecat. Velit mollit ad sunt elit est consequat.",
      groupID: "123123123123",
      type: "Medical",
      validity: "False",
    },
    {
      postContent:
        "Aliqua aute culpa incididunt officia consequat. Mollit veniam sit incididunt reprehenderit. Non sit ipsum ut ad Lorem dolore culpa do aliqua laborum id irure consectetur aliquip. Qui magna dolore mollit sunt pariatur dolore occaecat. Velit mollit ad sunt elit est consequat.",
      groupID: "123123123123",
      type: "Medical",
      validity: "False",
    },
  ];
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
            postContent={post.postContent}
            groupID={post.groupID}
            type={post.type}
            validity={post.validity}
          />
        ))}
      </table>
    </div>
  );
};

export default News;
