import "./Export.css"
import { FaRegCommentAlt, FaRegNewspaper, FaAlignLeft, FaRegWindowMaximize } from "react-icons/fa"


function Export() {
    return (
        <div className="wrapper">
            <div className="box">
                <div className="box-left">
                    <div className="export">
                        <FaRegNewspaper />
                        <p style={{ fontWeight: 'bold', fontSize: '30px', marginTop: '-5px' }}> Export News </p>
                    </div>
                    <div className="all-file1">
                        <form>
                            <button className="file">
                                <FaAlignLeft style={{ marginTop: '40px' }} />
                                <p style={{ fontWeight: 'bold', fontSize: '30px', marginTop: '-5px' }}> As CSV </p>
                            </button>
                            <button className="file">
                                <FaRegWindowMaximize style={{ marginTop: '40px' }} />
                                <p style={{ fontWeight: 'bold', fontSize: '30px', marginTop: '-5px' }}> As JSON </p>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="box-right">
                    <div className="export">
                        <FaRegCommentAlt />
                        <p style={{ fontWeight: 'bold', fontSize: '30px', marginTop: '-5px' }}> Export Comments</p>
                    </div>
                    <div className="all-file2">
                        <form>
                            <button className="file">
                                <FaAlignLeft style={{ marginTop: '40px' }} />
                                <p style={{ fontWeight: 'bold', fontSize: '30px', marginTop: '-5px' }}> As CSV </p>
                            </button>
                            <button className="file">
                                <FaRegWindowMaximize style={{ marginTop: '40px' }} />
                                <p style={{ fontWeight: 'bold', fontSize: '30px', marginTop: '-5px' }}> As JSON </p>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Export;


