import React,{useState,useContext} from 'react'
import Context from './context'
const Info = () => {
    let collection=useContext(Context);
    // const save=()=>{
    //     let newdata={title:value}
    //     collection.setdata(collection.data.concat(newdata))
    // }
    const adddata=collection.save;
    const [value,setvalue]=useState("");
    const change=(event)=>{
        setvalue(event.target.value)
    }

    return (
        <div className='container'>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                <input type="text" value={value} onChange={change} className="form-control" id="exampleFormControlInput1" name='Title' placeholder="Enter title here"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        <button className="btn btn-primary" onClick={()=>{return adddata(value,"nsfamkav")}} >add note</button>
        </div>
    )
}

export default Info
