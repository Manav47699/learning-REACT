import axios from 'axios'

import Card from "./component/Card"
import Navbar from "./component/Navbar"
import { useEffect, useState } from 'react'


// function Home()
// {
//     return (
//         <>
//             <Navbar />
//             <div className="gap-y-5">
//         <div className="flex justify-between">
//             <Card />
//                 <Card />
//                 <Card />
                
                

//             </div>
//             <div className="flex justify-between">
//                     <Card />
//                 <Card />
//                 <Card />
//                 </div>
//                 </div>

//             </>
//     )

// }


function Home() {
    const [blogs, setblogs] = useState([])
    async function fetchblogs() {
        const response = await axios.get("https://687af359abb83744b7ee46ad.mockapi.io/blogs")
        console.log("Response: ",response.data)
        if (response.status == 200) {
            setblogs(response.data)
        }
        else {
            alert("error ayyo yr ")
        }

    }
    useEffect(() => {
        // console.group("hellow world")
        fetchblogs()
    }, [])                                  // 2ta print hunxa. tio hatauna main.jsx ma gayera strict mode tag hatau

    console.log( "this is blogs",blogs)
    
    
    return (
        <>
            <Navbar />
            <div className="flex justify-between flex-wrap">
                {blogs.map((blog) => {
                    return <Card key={blog.id} blog={blog} />
                })}
            
            </div>

        </>
    )
}
    // return (
    //     <>
    //         <Navbar />
    //         <div className="gap-y-5">
    //     <div className="flex justify-between">
    //         <Card />
    //             <Card />
    //             <Card />
                
                

    //         </div>
    //         <div className="flex justify-between">
    //                 <Card />
    //             <Card />
    //             <Card />
    //             </div>
    //             </div>

    //         </>
    // )

//}

export default Home