import { useState } from "react";

function AddProperty({handleSubmit}) {
    const[name,setName]=useState("");
    const[des,setDes]=useState("");
    const[size,setSize]=useState("");
    
    return(
        <div className="App">

      <h1 className="h1"><u>Add New Property</u></h1>
      <div className="form">
          <form>
              <label className="label"><b> Name: </b></label><input value={name} onChange={(e)=>setName(e.target.value)}></input><br/><br/>
              <label className="label"><b>Description: </b></label><input value={des} onChange={(e)=>setDes(e.target.value)}></input><br/><br/>
              <label className="label"><b>Size: </b></label><input value={size} onChange={(e)=>setSize(e.target.value)}></input><br/><br/>
              <button className="add" type="button" onClick={()=>handleSubmit(name,des,size)}>Add</button>

              </form>
          </div>

      </div>
    );
    
  }
  export default AddProperty;