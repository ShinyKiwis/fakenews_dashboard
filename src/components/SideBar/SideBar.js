import "./SideBar.css";
import {
  MdHomeFilled,
  MdOutlineArticle,
  MdOutlineMedicalServices,
  MdLabelOutline,
  MdOutlineFileDownload,
} from "react-icons/md";
import { useState } from "react";
import {Link} from "react-router-dom"

const SideBarItem = ({ Item, page, onHover, href }) => {
  return (
    <Link className="sidebar_link" to={href} >
      <div className="sidebar_item">
        {<Item className="sidebar_img" />}
        <h3 style={onHover ? { display: "block" } : { display: "none" }}>
          {page}
        </h3>
      </div>
    </Link>
  );
};

const Logo = () => {
  return (
    <div className="logo">
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/HCMUT_official_logo.png" />
      <img src="https://pbs.twimg.com/media/DeR4fWPXkAAPBxT.png:large" />
    </div>
  );
};

const SideBar = () => {
  const [onHover, setOnHover] = useState(false);
  return (
    <div
      className="sidebar"
      onMouseOver={() => setOnHover(true)}
      onMouseOut={() => setOnHover(false)}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Logo />
      </div>
      <SideBarItem Item={MdHomeFilled} page="Home" onHover={onHover} href="/" />
      <SideBarItem
        Item={MdOutlineArticle}
        page="News"
        onHover={onHover}
        href="/news"
      />
      <SideBarItem
        Item={MdLabelOutline}
        page="Labeling"
        onHover={onHover}
        href="med-label"
      />
      <SideBarItem
        Item={MdOutlineFileDownload}
        page="Export"
        onHover={onHover}
        href="export"
      />
    </div>
  );
};

export default SideBar;
