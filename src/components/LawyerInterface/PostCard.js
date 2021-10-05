import { useState } from "react";
import axios from "axios";



function PostCard({ obj }) {
    const apiUrl = process.env.REACT_APP_API_URL;

    const [bid, setBid] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post(apiUrl + '/posts/post/:id', bid);
    }

    // TODO: OnClick call api updatePost and update Bid Number
    // On the user interface, if (bid ? display 'accept' or 'decline : dont' show buttons)
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{obj.title}</h5>
                    <p className="card-text">{obj.description}</p>
                    <input 
                        value={bid}
                        name="bid"
                        onChange={(e) => setBid(e.target.value)}
                        type="number" 
                        className="form-control" 
                        aria-label="Amount (to the nearest dollar)" 
                        placeholder="Insert Bid" 
                    />
                    <button 
                        onClick={handleSubmit} 
                        type="submit" 
                        className="btn btn-outline-primary position-relative" 
                        style={{ marginTop: "10px" }}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}



export default PostCard;