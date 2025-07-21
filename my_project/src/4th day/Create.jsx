import { useState } from "react"
import Navbar from "./component/Navbar"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom";

//for user input in jsx, use onChange={(event)=> {function(event.target.value)}} 
//on changeing, event (i.e is current character by the user) with target the value={}(that we pass just 1 line before)

function Create() {
    const [title, setTitle] = useState("")
    const [subtitle, setsubtitle] = useState("")
    const [description, setdescription] = useState("")
    const [image, setimage] = useState("")
    const navigate = useNavigate();

    
   


//     async function sentdata(e)
//     {
// //yo tala ko line lekhnai parxa hai bro
//         e.preventDefault()

// // axios post must be in object format as our database is in JSON. look at the api to understand
//         const response = await axios.post("https://687af359abb83744b7ee46ad.mockapi.io/blogs"),
//         {
//                 title : title, subtitle:subtitle, description: description, image:image
//             }
    //     }
    
    async function sendDataToBackend(e) {
        e.preventDefault()
        const response = await axios.post("https://687af359abb83744b7ee46ad.mockapi.io/blogs", {
            title:title,
            subtitle:subtitle,
            description:description,
            image:image,
        })
        if (response.status == 201)
        {
            navigate("/")
        }
        console.log(response)
        
    }

    return (
        <>
            <Navbar />
            <form onSubmit={sendDataToBackend}>
                <h1>ENTER NAME</h1>

            <input type="text" placeholder="ENter the name" value={title}
                onChange={(event) => {
                    setTitle(event.target.value)
                }
                }/>
                
            
                        <h1>ENter subtitle</h1>
            <input type="text" placeholder="ENter the new subtitle" value={subtitle}
                onChange={(event) => {
                    setsubtitle(event.target.value)
                }
                    
                    }/>
                
            
                        <h1>ENTER description</h1>
            <input type="text" placeholder="ENter the name" value={description}
                onChange={(event) => {
                    setdescription(event.target.value)
                }
                }/>
                
            
                        <h1>ENTER IMage url</h1>
            <input type="text" placeholder="ENter the name" value={image}
                onChange={(event) => {
                    setimage(event.target.value)
                }
                }/>

                
                button must have a type="submit"
                
                <button type="submit" className="bg-blue-500 hover:bg-amber-300 rounded-2xl">OK</button>
            </form>

        </>
    )
}

export default Create