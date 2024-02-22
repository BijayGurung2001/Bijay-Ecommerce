import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from '../src/Pages/Home'
import ProductDetails from '../src/Pages/ProductDetails'
import ProductProvider from './Context/ProductContext'
function App() {

 return (
    <>
    <ProductProvider>

   
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/productdetails' element={<ProductDetails />} />
      </Routes>
      </BrowserRouter>
      </ProductProvider>
    </>
  )
}

export default App
