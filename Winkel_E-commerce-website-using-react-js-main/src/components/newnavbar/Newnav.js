import React from 'react'
import "./newnav.css"
import { NavLink } from 'react-router-dom'

const Newnav = () => {
  return (
    <div className='new_nav'>
        <div className='nav_data'>
            <div className='left_data'>
                <NavLink to="/shop"><p>Shop</p></NavLink>
                <NavLink to="/shop"> <p>Best Seller</p></NavLink>
                {/* <p>Categories</p> */}
                <NavLink to="/contact"> <p>Customer Service</p></NavLink>
                {/* <a href='https://www.linkedin.com/in/shivam-dhamesha-7a7b63255'><p>Blog</p></a> */}
                <NavLink to="/about">   <p>About</p></NavLink>
            </div>
        </div>

    </div>
  )
}

export default Newnav