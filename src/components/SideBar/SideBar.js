import "./SideBar.css"
import { MdHomeFilled, MdOutlineArticle, MdOutlineMedicalServices, MdOutlineLiveHelp, MdRule, MdOutlineFileDownload } from "react-icons/md"
import { useState } from "react"

const SideBarItem = ({ Item, page, onHover }) => {
    return (
      <div className="sidebar_item">
        {<Item className="sidebar_img" />}
        <h3 style={onHover ? { "display": "block" } : { "display": "none" }}>{page}</h3>
      </div>
    )
}

const Logo = () => {
    return (
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/HCMUT_official_logo.png" />
        <img src="https://pbs.twimg.com/media/DeR4fWPXkAAPBxT.png:large" />
      </div>
    )
}

const SideBar = () => {
    const [onHover, setOnHover] = useState(false)
    return (
        <div className="sidebar" onMouseOver={() => setOnHover(true)} onMouseOut={() => setOnHover(false)}>
            <div style={{"display": "flex", "alignItems": "center"}}>
                <Logo />
            </div>
            <a><SideBarItem Item={MdHomeFilled} page="Home" onHover={onHover} /></a>
            <a><SideBarItem Item={MdOutlineArticle} page="News" onHover={onHover} /></a>
            <a href='label'><SideBarItem Item={MdOutlineMedicalServices} page="Medical Labeling" onHover={onHover} /></a>
            <a><SideBarItem Item={MdOutlineLiveHelp} page="Medical News Check" onHover={onHover} /></a>
            <a><SideBarItem Item={MdRule} page="News/Question Labeling" onHover={onHover} /></a>
            <a><SideBarItem Item={MdOutlineFileDownload} page="Export" onHover={onHover} /></a>

        </div>
    )

}

export default SideBar;
