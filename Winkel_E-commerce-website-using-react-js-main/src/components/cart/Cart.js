import React from 'react'
import "./cart.css"
import { NavLink } from 'react-router-dom'

const Cart
 = () => {
  return (
    <div className='cart_section'>
        <div className='cart_container'>
            <div className='left_cart'>
                <img src='./p1.jfif'/>
                <NavLink to="/buynow"><button className='cart_btn'> Add to cart</button></NavLink>
            </div>
            <div className='right_cart'>
                <h3>Watermelon</h3>
                <div className='mrp'>
               M.R.P.  &#x20B9;100/-
                </div>
                <div className='cost'>Winkel&#8217;s Price: &#x20B9;<span>49/-</span></div>
                <div className='save'>You save &#x20B9; 51/-</div>
                <div className='tagline'>Steal Deal</div>
                <div className='description'> description : A fruit which is sweet,juicy,fleshy and edible plant product that contain seeds. They are cruitial part of a healthy and balanced diet, providing essential nutrient like vitamins fiber and minerals.</div>
            </div>
        </div>

    </div>
  )
}

export default Cart