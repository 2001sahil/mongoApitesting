import React ,{useContext,useEffect} from 'react'
import Card from './Card';

import Info from './Info';
import Context from '../context'
const Data = () => {
    let array=useContext(Context);
    useEffect(() => {
    array.getNotes()
     // eslint-disable-next-line 
  },[]);
    let i=0;
    return (
        <div>
            <Info/>
            <div className='d-flex  justify-content-center'><h2>This is data</h2> </div> 
        <div className="ALLNEWS row container m-auto d-flex my-2 justify-content-center">
            {array.data.map((e)=>{
                return (<div key={i++} className='mr-3 my-2'><Card id={e._id} title={e.Name}/></div>)
            })}
        </div>
        </div>
    )
}
export default Data
