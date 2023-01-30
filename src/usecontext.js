// import { useState } from "react";
import { body } from "express-validator";
import { useState } from "react";
import Context from "./context";

const Used = (props) => {
    
    const save=async (settitle,setdiscription)=>{
        let newdata={title:settitle}
        setdata(data.concat(newdata))
    }
    const Delete=(id)=>{
        console.log(data[id])
        let len=data.length
        let temp=[]
        for (let k=0;k<len;k++){
            if(k!==id){
                temp.push(data[k])
            }
        }
        setdata(temp)
    }
    async function getNotes(url = 'http://localhost:8000/note/getnote') {
        const response = await fetch(url, {
          method: 'GET', 
          headers: {
            'Content-Type': 'application/json',
            "auth":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJxdWVyeSI6eyJpZCI6IjYzZDBjOTAyZTVjZDA0ZmRhYmJhNDk4MSJ9LCJpYXQiOjE2NzQ2Mjc5OTF9.0t7YHjEmupjMOdbhCCd_4OLydBwG6kPSK1edzqV4Dt0"
          },
        //   body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        const collect=await response.json()
        console.log(collect); // parses JSON response into native JavaScript objects
      }
    // getNotes();
    async function addNotes(url = 'http://localhost:8000/note/addnote' , data = {"Name":"newdata","PhoneNO":9368}) {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "auth":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJxdWVyeSI6eyJpZCI6IjYzZDBjOTAyZTVjZDA0ZmRhYmJhNDk4MSJ9LCJpYXQiOjE2NzQ2Mjc5OTF9.0t7YHjEmupjMOdbhCCd_4OLydBwG6kPSK1edzqV4Dt0"
          },
        body: JSON.stringify(data) 
        });
        console.log(data);
        // const collect=await response.json()
        console.log("Data saved successfully"); // parses JSON response into native JavaScript objects
      }
    // addNotes();
    

    
    let fdata = [{
        title: "hello my name is sahil",id:"0", }, { title: "what is your name " }, { title: "what hanjanjgngnakg",id:"1", }, { title: "anjnjvnajnbvjbndaknjvan" ,id:"2"}, { title: "what is your name ",id:"3" }, { title: "what is your name ",id:"4" }]



    const [data, setdata] = useState(fdata)
    // const delete
    const fun = () => {
        setTimeout(() => {
            // setstate({ name: "sapan", surname: "Gupta" })
        }, 2000);
    }
    return (
        <Context.Provider value={{ fun, data,save,Delete}}>
            {props.children}
        </Context.Provider>
    )

}
export default Used