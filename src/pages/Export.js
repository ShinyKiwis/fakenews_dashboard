import "./Export.css"
import { FaRegCommentAlt, FaRegNewspaper, FaAlignLeft, FaRegWindowMaximize } from "react-icons/fa"


function Export() {
    return (
        <div className="wrapper">
            <div className="box">
                <div className="box-left">
                    <div className="export">
                        <FaRegNewspaper style={{color: "#2A344E"}}/>
                        <p className="export-type"> Export News </p>
                    </div>
                    <div className="all-file1">
                        <form>
                            <button className="file">
                                <FaAlignLeft style={{ marginTop: '40px' }} />
                                <p className="export-file-type"> As CSV </p>
                            </button>
                            <button className="file">
                                <FaRegWindowMaximize style={{ marginTop: '40px' }} />
                                <p className="export-file-type"> As JSON </p>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="box-right">
                    <div className="export">
                        <FaRegCommentAlt style={{color: "#2A344E"}}/>
                        <p className="export-type"> Export Comments</p>
                    </div>
                    <div className="all-file2">
                        <form>
                            <button className="file">
                                <FaAlignLeft style={{ marginTop: '40px' }} />
                                <p className="export-file-type"> As CSV </p>
                            </button>
                            <button className="file">
                                <FaRegWindowMaximize style={{ marginTop: '40px' }} />
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


