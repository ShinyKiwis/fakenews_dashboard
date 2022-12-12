import Pill from "../components/Common/Pill";
import NewsStyle from "./News.module.css";
import { HiPencil, HiFlag } from "react-icons/hi";
import {useState, useEffect} from "react"
import axios from "axios";
import ReactPaginate from 'react-paginate';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
  
 

function Items({ currentItems, setClickedPost}) {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/posts/page/1")
    .then(res=> {
        setPosts(res.data)
      })
  }, [])

  let navigate = useNavigate();
  const navigateToLabeling = async (postId) =>{ 
    const res = await axios.get("http://localhost:5000/posts/single_post/" + "638394cd5c0efd3b9b71b2e8")
    // setClickedPost(res.data)
    navigate("/med-label");
  }
  
  return (
    <>
      {currentItems &&
        currentItems.map((posts) => (
          /*<PostItem
            postContent={post.text}
            groupID="123123asd123"
            type={post.is_medical ? "Medical": "Nonmed"}
            validity={post.is_verify_fakenew ? (post.is_fakenew ? "False": "True" ) : "Unverified"}
          />*/
          <tr className={NewsStyle.post_item} onClick={() => navigateToLabeling(posts.id)}>
            <td>{posts.text}</td>
            <td>{"123123asd123"}</td>
            <td style={{ paddingRight: "1em" }}>
              <Pill type={posts.is_medical ? "Medical": "Nonmed"} />
            </td>
            <td>
              <div className={NewsStyle.post_edit}>
                <Pill type={posts.is_verify_fakenew ? (posts.is_fakenew ? "False": "True" ) : "Unverified"} />
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
          
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/posts/page/1")
    .then(res=> {
        setPosts(res.data)
      })
  }, [])
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = posts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(posts.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % posts.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}




const News = () => {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/posts/page/1")
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
        <PaginatedItems itemsPerPage={8} />,
        <div id="container"></div>
      </table>
    </div>
  );
};

export default News;
