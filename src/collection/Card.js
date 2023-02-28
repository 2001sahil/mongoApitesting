import React, { useContext, useState } from 'react'
import Context from '../context'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Card = (props) => {
    const Delete = useContext(Context).deleteNotes
    const update = useContext(Context).updataNotes
    const [show, setShow] = useState(false);
    const [value, setvalue] = useState("");
    const change=(event)=>{
        setvalue(event.target.value)
    }
    const run= async ()=>{
        setShow(false)
        let data={"Name":value};
        await (update(data,props.id))
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body><input type="text" value={value} onChange={change} className="form-control" id="exampleFormControlInput1" name='Title' placeholder="Enter title here"/></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={run}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="card" style={{ "width": "18rem" }}>
                <div className="card-body" id={props.id}>
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{props.title}</h5>
                        <i className="fa-solid fa-trash-can ml-2 pb-2 delete" onClick={() => { Delete({ "id": props.id }) }} id={props.id}></i>
                        <i className="fa-solid fa-pen-to-square fa-solid fa-trash-can ml-2 pb-2 delete" id={props.id}     onClick={handleShow}></i>
                    </div>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div >
    )
}

export default Card
