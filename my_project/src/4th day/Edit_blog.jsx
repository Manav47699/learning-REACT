import { use } from "react"
import { useState } from "react"

//for user input in jsx, use onChange={(event)=> {function(event.target.value)}} 
//on changeing, event (i.e is current character by the user) with target the value={}(that we pass just 1 line before)

function Edit_blog()
{
    const [name, setname] = useState("")
    const [subtitle, setsubtitle] = useState()
    const [description, setdescription] = useState()

    return (
        <>
            <div>
                <h1>EDIT NAME</h1>
            <input type="text" placeholder="ENter the name" value={name}
                onChange={(event) => {
                    setname(event.target.value)
                }
                }></input>
                <button className="bg-blue-500 hover:bg-amber-300 rounded-4xl">OK</button>
            </div>

            <div>
            <h1>EDIT NAME</h1>
            <input type="text" placeholder="ENter the name" value={name}
                onChange={(event) => {
                    setname(event.target.value)
                }
                }></input>
                <button className="bg-blue-500 hover:bg-amber-300 rounded-4xl">OK</button>
            </div>





            <div>
                        <h1>EDIT subtitle</h1>
            <input type="text" placeholder="ENter the new subtitle" value={subtitle}
                onChange={(event) => {
                    setsubtitle(event.target.value)
                }
                }></input>
            
                        <h1>EDIT description</h1>
            <input type="text" placeholder="ENter the name" value={description}
                onChange={(event) => {
                    setdescription(event.target.value)
                }
                }></input>
                <button className="bg-blue-500 hover:bg-amber-300 rounded-2xl">OK</button>
            </div>

            
        
        </>
    )
}

export default Edit_blog