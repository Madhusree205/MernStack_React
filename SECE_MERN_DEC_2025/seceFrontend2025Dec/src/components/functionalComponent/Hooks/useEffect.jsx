import {useEffect, useState} from "react";

const UseEffectComponent = () =>{
  var[text, updateText] = useState("Hello World");
  useEffect(()=>{
    console.log(text);
  },[text]);

  return(
    <div>
      <h1>This is use effect hook</h1>
      <input
        type="text"
        value={text}
        onChange={(e)=>updateText(e.target.value)}
      />
    </div>
  );
};

export default UseEffectComponent;