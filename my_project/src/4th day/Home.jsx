import Card from "./component/Card"
import Navbar from "./component/Navbar"

function Home()
{
    return (
        <>
            <Navbar />
            <div className="gap-y-5">
        <div className="flex justify-between">
            <Card />
                <Card />
                <Card />
                
                

            </div>
            <div className="flex justify-between">
                    <Card />
                <Card />
                <Card />
                </div>
                </div>

            </>




        





    )

}

export default Home