
import './App.css';
import {useState} from "react";
function App() {
//const age =0;

    const [age, setAge] = useState(0);

    const [inputValue,setInputValue] = useState("");
    const [showHideText,setShowHideText] = useState(false);
    const [colorChange, setColorChange] = useState("red");
    const handleInputChange = (event) =>{setInputValue(event.target.value); }
    const handleShowHide = ()=>{ setShowHideText(!showHideText)}
    const handleColorChange = () => {setColorChange(colorChange === "green"?"red":"green");}

    const decreaseAge = () => {
        setAge(age-1);
    }
    const setToZero = () => {
        setAge(0);
    }
  return (
    <div className="App">
      {age}
        <br/>
      <button onClick={()=>setAge(age+1)}>Increase Age</button>
<br/><br/>
        <button onClick={decreaseAge}>Decrease Age</button>
<br/><br/>
        <button onClick={setToZero}>Set Age to Zero</button>
<br/><br/>
        <input type="text" onChange={handleInputChange}></input>
        <br/>
        <p>{inputValue}</p>
<br/>
        <button onClick={handleShowHide}>Show/Hide</button>
        { showHideText && <h1>Hi my name is Durga</h1>}
<br/>
        <br/>
        <button onClick={handleColorChange}>Toggle Color</button>
        { <h1 style={{color:colorChange}}>Hi my name is Durga</h1>}

        <br/>
        <br/>
        <br/>
        <br/>






    </div>
  );
}

export default App;
