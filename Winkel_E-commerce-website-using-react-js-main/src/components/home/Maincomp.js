import React from 'react'
import Banner from './Banner'
import Slide from './Slide'
import Banner2 from './Banner2'
import Banner3 from './Banner3'

const Maincomp = () => {
  return (
    <div className='home_section'>
        <div className='banner_part'>
            <Banner/>
        </div>
        <div className='slide_part'>
          <Slide title={"Steal Deal"}/>
        </div>
        <div className='banner_part2'>
          <Banner2/>
        </div>
        <div className='slide_part2'>
          <Slide title={"Newly Added"}/>
        </div>
        <div className='banner_part3'>
          <Banner3/>
        </div>

    </div>
  )
} 

export default Maincomp