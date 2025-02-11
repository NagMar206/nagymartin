import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home, About, Contact, Services} from './components/pages'
import {Navbar} from './components/pages'
import './App.css'

function App() {
//BrowserRouter < Navbar
  return (
    <>
      <div className='App'>
        <BrowserRouter> 
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/services' element={<Services />}></Route>          
          </Routes>
        </BrowserRouter>
      </div>
      <h1>Közutak</h1>
    </>
  )
}

export default App
