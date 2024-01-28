import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
import Shop_all from '../shop_all/Shop_all';
import Fake from './fake';
// import Fake from "./Fake"/;
function Navbar() {
    const [userInput, setUserInput] = useState('');
  const [recommendedMedicine, setRecommendedMedicine] = useState(null);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleFetchData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5002/recommend_medicine?user_input=${userInput}`);
      const data = await response.json();
      console.log(data);
      setRecommendedMedicine(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div > 
        <header>
            <nav>
                <div class="left">
                    <div class='navlogo'>
                    <NavLink to="/"><img src='./logo.png'alt=''/></NavLink>
                    </div>
                    <div class='nav_searchbaar'>
                        <input value={userInput} onChange={handleInputChange} type="text" placeholder="search" />
                        <div onClick={handleFetchData} class="search_icon">
                            <SearchIcon  id='search'/>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div className='nav_btn'>
                        <NavLink to="/login">Sign in</NavLink>
                        </div>
                        <div className='cart_btn'>
                        <Badge badgeContent={1} color="success">
                        <NavLink to="/buynow"><ShoppingBasketRoundedIcon id="icon"/></NavLink>
                        </Badge>
                    </div>
                    <NavLink to="/notime"><Avatar className='avtar'/></NavLink>
                </div>
            </nav>
        </header>
        <div className='fake'> 
        <Fake  recommendedMedicine={recommendedMedicine} />
        </div>
        
    </div>
  )
}

export default Navbar