import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/About'
import Create from './pages/Create'
import Edit from './pages/Edit'
import Blog from './pages/Blog'


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
        <Route path="/blog" element={<Blog/>} />
      </Routes>
    </BrowserRouter>


  )
}
export default App