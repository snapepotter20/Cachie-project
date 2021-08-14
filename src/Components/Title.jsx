import React, {useState , useEffect}from "react";
function Title(){
    const [name , setName] = useState("Sahil");
    const[title , setTitle] = useState("Kumar");

useEffect(() => {
    console.log("USE EFFECT CALLED....");
}, [] );
    
const updateTitle = (e) =>{
    setTitle(e.target.value);
};
const updateName = (e) =>{
    setName(e.target.value);
};
    return (
        <div>
<h1>Name = {name}</h1>
<h1>Title = {title}</h1>
        <input onKeyUp= {updateTitle} type ="text" />
        <input onKeyUp= {updateName} type ="text" />

   </div> 
    
    );
}
export default Title;

