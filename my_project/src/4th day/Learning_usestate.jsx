import { useState } from "react";

//useState is a hook or a method() provided by REACT to store data

function LearningUseState()

{
    
    const [counter, setcounter] = useState(0)
    
    // funtion LearningUseState(){
    //     const [returnedDATA, returnedFunction] = useState("mannav")    //returns ["manav", function()]
    //     const [age, setAge] = useState(22)  // returns [22, function()]
        
        
    
    // }
    return (
        <>
            
            
            <h1>Learning use state</h1>
            <div>
                <h1>{counter}</h1>
                <button onClick={() => setcounter(counter + 1)}> +</button>
                <button onClick={() => {
                    if (counter > 0)
                        setcounter(counter - 1)
                    else
                        window.alert("minimum")
                }}> -</button>
                
            </div>
            
        </>

    )
    
    }
    

export default LearningUseState;