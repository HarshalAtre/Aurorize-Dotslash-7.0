import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { products } from './productdata';
import axios from 'axios';
import './slide.css'
import { NavLink } from 'react-router-dom';
// var products
// const fetchData = async () => {
//     const response = await axios.get('http://localhost:8080/products/');
//     console.log(response)
//     products= await response.json(); 
// }
// fetchData()
const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

const Slide = ({title}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/products/'); // Replace with your actual API endpoint

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setProducts(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that the effect runs once after the initial render

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    
    <div className='product_section'>
        <div className='product_deal'>
            {/* <h2>{title}</h2> */}
           <NavLink to="/view"><button className='view_btn'>View All</button></NavLink>
        </div>
        <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={true}
        showDots={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        removeArrowOnDeviceType={["tablet","mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass='carousel-item-padding-40-px'
        containerClass='carousel-container'
        className='slide'
        >
          {
  products.map((e) => {
    return (
      <div className='product_item' key={e.id}>
        <div>
          <img className='product_img' src={e.thumbnail} alt='' />
        </div>
        <p className='products_name'>{e.title}</p>
        <p className='product_cost'>Price: &#x20B9;{e.price}</p>
        {/* <p className='product_discount'>Discount: {e.discountPercentage}% off</p> */}
      </div>
    );
  })
}

        </Carousel>

    </div>
  )
}

export default Slide