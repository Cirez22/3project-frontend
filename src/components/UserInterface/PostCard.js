import { useContext, useState, useEffect } from "react";
import { PostContext } from "../../context/PostContext";
import { useHistory } from 'react-router-dom';



function PostCard({ obj }) {
    const history = useHistory()
    const {deletePost} = useContext(PostContext);
    
    const handleDelete = (event) => {
        event.preventDefault();
        deletePost(obj._id);
    }
    
    
    const [accept, setAccept] = useState(false);
    const handleClick = () => {
        setAccept(true)
    }


    return (
        <div>

            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{obj.title}</h5>
                    <p className="card-text">{obj.description}</p>
                    <p className="card-text">{obj.bid}</p>


                    {/* boton cambiar text onclick */}
                    {!accept ? (
                        <div>
                            <button
                                onClick={handleClick}
                                className="btn btn-outline-success position-relative"
                                style={{ marginRight: "10px" }}>
                                Accept
                            </button>

                            <button
                                onClick={handleDelete}
                                className="btn btn-outline-danger position-relative"
                            >
                                Decline
                            </button>
                        </div>
                    ) : (
                        <p>lawyers@email.com</p>
                    )
                    }


                </div>
            </div>
        </div>
    );



}




export default PostCard;