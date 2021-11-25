import logo from './logo.svg';
import './App.css';
import AddProperty from './AddProperty';
import { useState } from 'react/cjs/react.development';
import {nanoid} from 'nanoid';
import PropertyList from './PropertyList';
function App() {
  const[property,setProperty]=useState(false);
  const[properties,setProperties]=useState([]);

  function handleSubmit(name,des,size){
    setProperties(previousProperties=>{

      return [...previousProperties,{id:nanoid(),name,des,size,isChecked:false}];
    })
    setProperty(false);

  }
  function checkProperty(id,checkValue){
    setProperties(previousProperties=>{
      return previousProperties.map(value=>{
        if(value.id===id){       
                    value.isChecked= checkValue;
        }
        return value;
      })
      
      
    });
  }
  function deleteProperties(){
    setProperties(previousProperties=>
       previousProperties.filter(value=>!value.isChecked)
    );
  }
  return (
    <>
    <div className="App">
   <h1 className="h1"><u>Property Management System</u></h1><br/>
  

     <button className="button" onClick={()=>setProperty(previosProperty=>!previosProperty)}><b>Add Property</b></button>
    
     <button className="button" onClick={deleteProperties}><b>Delete Property</b></button><br/><br/>
     {property && <AddProperty handleSubmit={handleSubmit}/> }
     {!property && <PropertyList data={properties} checkProperty={checkProperty}/>}
  
    </div>
    </>
  );
}

export default App;
