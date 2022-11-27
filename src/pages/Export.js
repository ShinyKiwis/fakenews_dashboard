import "./Export.css";
import {
  FaRegCommentAlt,
  FaRegNewspaper,
  FaAlignLeft,
  FaRegWindowMaximize,
} from "react-icons/fa";
import { useRipple } from "react-use-ripple";
import { useRef } from "react";
import axios from "axios";
import fileDownload from "js-file-download";

function Export() {
  const newsCSVButtonRef = useRef();
  const newsJSONButtonRef = useRef();
  const commentsCSVButtonRef = useRef();
  const commentsJSONButtonRef = useRef();

  useRipple(newsCSVButtonRef, { animationLength: 300, rippleColor: "#7080a9" });
  useRipple(newsJSONButtonRef, { animationLength: 300, rippleColor: "#7080a9" });
  useRipple(commentsCSVButtonRef, { animationLength: 300, rippleColor: "#7080a9" });
  useRipple(commentsJSONButtonRef, { animationLength: 300, rippleColor: "#7080a9" });

  const handleNewsCSV = (e) => {
    e.preventDefault();
    axios.get("https://doancnpmtest.herokuapp.com/posts/download_as_csv")
    .then(res=>{
        fileDownload(res.data, "posts.csv")
      })
  }

  const handleNewsJSON = (e) => {
    e.preventDefault();
    axios.get("https://doancnpmtest.herokuapp.com/posts/download_as_json")
    .then(res=>{
        fileDownload(res.data, "posts.json")
      })
  }

  return (
    <div className="wrapper">
      <div className="box">
        <div className="box-left">
          <div className="export">
            <FaRegNewspaper style={{ color: "#2A344E" }} />
            <p className="export-type"> Export News </p>
          </div>
          <div className="all-file1">
            <form>
              <button className="file" ref={newsCSVButtonRef}
                onClick={e => {handleNewsCSV(e)}}>
                <FaAlignLeft style={{ marginTop: "40px" }} />
                <p className="export-file-type"> As CSV </p>
              </button>
              <button className="file" ref={newsJSONButtonRef}
                onClick={e => {handleNewsJSON(e)}}>
                <FaRegWindowMaximize style={{ marginTop: "40px" }} />
                <p className="export-file-type"> As JSON </p>
              </button>
            </form>
          </div>
        </div>
        <div className="box-right">
          <div className="export">
            <FaRegCommentAlt style={{ color: "#2A344E" }} />
            <p className="export-type"> Export Comments</p>
          </div>
          <div className="all-file2">
            <form>
              <button className="file" ref={commentsCSVButtonRef}>
                <FaAlignLeft style={{ marginTop: "40px" }} />
                <p className="export-file-type"> As CSV </p>
              </button>
              <button className="file" ref={commentsJSONButtonRef}>
                <FaRegWindowMaximize style={{ marginTop: "40px" }} />
                <p className="export-file-type"> As JSON </p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Export;
