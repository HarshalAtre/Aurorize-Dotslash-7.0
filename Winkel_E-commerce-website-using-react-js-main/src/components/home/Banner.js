import { style } from '@mui/system'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import "./banner.css"
const data = ["./hero.jpg","shop1.jpg"]


const Banner = () => {
  return (
        <Carousel className='carasousel'
        autoPlay={true}
        animation='slide'
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        navButtonsProps={{
            style:{
                backgroundColor:"#cb712c",
                color:"#ffffff"
            }
        }}
        >
            {
                data.map((imag,i)=>{
                    return(
                        <>
                        <img src={imag} alt="" className='banner_img'/>
                        </>
                    )
                })
            }

        </Carousel>
  )
}

export default Banner