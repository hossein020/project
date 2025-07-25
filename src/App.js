import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Blog from './pages/blog/Bolg'
import Course from './pages/cours/Cours'
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element= { <Home />} />
                    <Route path='/about' element= { <About /> } />
                    <Route path='/blog' element= { <Blog />} />
                    <Route path='/cours' element= { <Course />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App