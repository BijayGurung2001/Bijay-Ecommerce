import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from '../src/Pages/Home'
import ProductDetails from '../src/Pages/ProductDetails'
function App() {

 return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/productdetails' element={<ProductDetails />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
