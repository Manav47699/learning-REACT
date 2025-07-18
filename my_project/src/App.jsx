import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './4th day/Home'
import About from './pages/About'
import Create from './4th day/Create'
import Edit from './pages/Edit'
import Blog from './pages/Blog'
import LearningUseState from './4th day/Learning_usestate'



// import Home from './pages/home'
// import About from './pages/About'
// import Create from './pages/Create'
// import Edit from './pages/Edit'
// import Blog from './pages/Blog'


//DAY 3
// mantra: first ma brower router halne

function App()
{

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />                  
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/learning_use_state" element ={<LearningUseState />} />
      </Routes>
    </BrowserRouter>


  )
}
export default App