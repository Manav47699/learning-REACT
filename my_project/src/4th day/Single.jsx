import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./component/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

function Single()
{
    const data = useParams()
    const [blog, setblogs] = useState({})
    const navigate = useNavigate();

    async function fetchSinlgeblogs() {
        const respone = await axios.get("https://687af359abb83744b7ee46ad.mockapi.io/blogs/" + data.id)
        console.log(respone)
        if (respone.status == 200) {
            setblogs(respone.data)
        }
        else {
            alert("something wrong")
        }
       
        
    }

    useEffect(() => {
        fetchSinlgeblogs();
    }, []
        )

    return (
        <>
        <Navbar />
        <div>
                <img src={blog.image} alt="true" />
                <h1>{blog.title}</h1>
                <h1>{blog.subtitle}</h1>
                <p>{blog.description}</p>
        
                <button className="bg-amber-700" onClick={async () =>
                {
                const respone = await axios.delete("https://687af359abb83744b7ee46ad.mockapi.io/blogs/" + data.id)
                console.log(respone)
                if (respone.status == 200) {
                    alert("blog delte vayo")
                    navigate("/")
                }
                else {
                    alert("something wrong")
                }
            
                
            
 }
                }>DELETE</button>
                <button className="bg-blue-700 hover:bg-amber-300"
                    onClick={async () => {
                navigate("/edit-blog/" + blog.id)
                    
                }}>EDIT</button>

        </div>
        </>

    )
}

export default Single