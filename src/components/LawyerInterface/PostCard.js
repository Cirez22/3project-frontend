



function PostCard({ obj }) {

    
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{obj.title}</h5>
                    <p className="card-text">{obj.description}</p>
                    <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder="Insert Bid"/>
                    {/* <button onClick={handleSubmit} href="boton" className="btn btn-outline-primary position-relative" style={{marginTop:"10px"}}>Submit</button> */}
                </div>
            </div>
        </div>
    );
}



export default PostCard;