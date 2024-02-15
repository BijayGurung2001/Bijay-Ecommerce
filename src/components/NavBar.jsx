import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className='navbar navbar-expand-lg navbar-light bg-light d-flex flex-row justify-content-around'>
        <div><h1 className='navbar-band'>BJ Ecommerce</h1></div>
        <ul className='navbar-nav mr-10 justify-around'>
            <li className='nav-item active mr-2'>     <Link className='nav-link' to='/'>Home</Link>        </li>
            <li className='nav-item mr-2'>      <Link className='nav-link'>Products</Link>      </li>
            <li className='nav-item mr-2'>        <Link className='nav-link'>Support</Link>    </li>
            <li className='nav-item mr-2'>     <Link className='nav-link'>About</Link>      </li>
            <li className='nav-item mr-2'>       <Link className='nav-link'>Contact</Link>     </li>
            <li className='nav-item mr-2'>      <Link className='nav-link'>Login</Link>      </li>
        </ul>
        <form className='form-inline my-2 my-lg-0 d-flex flex-row'>
<input className='form-control mr-sm-2' type='search' placeholder='search' />
<button className='btn btn-outline-success my-2 my-sm-0' type='submit'>Search</button>
        </form>
    </div>
  )
}

export default NavBar