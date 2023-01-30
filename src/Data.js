import React ,{useContext}from 'react'
import Card from './Card';
import Context from './context'
const Data = () => {
    let array=useContext(Context);
    let i=0;
    return (
        <div>
            <div className='d-flex  justify-content-center'><h2>This is data</h2> </div> 
        {/* <div className='row' > */}
        <div className="ALLNEWS row container m-auto d-flex my-2 justify-content-center">
            {array.data.map((e)=>{
                return <div key={i++} className='mr-3 my-2'><Card id={i} title={e.title}/></div>

            })}
        </div>

        </div>
    )
}

export default Data
