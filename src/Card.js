import React ,{useContext}from 'react'
import Context from './context'
const Card = (props) => {
    const Delete=useContext(Context).Delete
    // const run=(event)=>{
    //     console.log(event.target.id)
    // }
    return (
        <div>
            <div className="card" style={{ "width": "18rem" }}>
                <div className="card-body" id={props.id}>
                <div className="d-flex align-items-center">
                    <h5 className="card-title">{props.title}</h5>
                <i className="fa-solid fa-trash-can ml-2 pb-2 delete" onClick={()=>{Delete(props.id)}} id={props.id}></i>
                </div>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Card
