import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import "../shop_all/"
// import "../shop_all/shop_all.css"

const Fake = ({ recommendedMedicine }) => {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState([]); // Initialize as an array
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartModalVisible, setIsCartModalVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/products/');

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
  }, []);

  const handleProductClick = (product) => {
    // Append the selected product to the selectedProduct array
    setSelectedProduct(prevSelectedProduct => [...prevSelectedProduct, product]);
  
    // Show the popup
    setIsPopupVisible(true);
  };
  

  const handleBuyNowClick = () => {
    // Implement buy now logic (e.g., redirect to a checkout page)
    console.log('Buy Now clicked for:', selectedProduct);
  };

  const handleAddToCartClick = () => {
    if (selectedProduct && Array.isArray(selectedProduct)) {
      // Log the number of objects in selectedProduct before adding a new one
      console.log('Before adding to cart - Number of objects:', selectedProduct.length);
  
      // Append the selected product to the cart
      setCart(prevCart => [...prevCart, ...selectedProduct]);
  
      // Log the number of objects in selectedProduct after adding a new one
      console.log('After adding to cart - Number of objects:', selectedProduct.length);
  
      console.log('Added to cart:', selectedProduct);
    } else {
      console.error('Error: selectedProduct is not an array or is null');
    }
  };
  
  

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const openCartModal = () => {
    setIsCartModalVisible(true);
  };

  const closeCartModal = () => {
    setIsCartModalVisible(false);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
 console.log(recommendedMedicine )
  return (
    <>
    
    <div className="view_deal" style={{marginTop:"100px",position:"absolute",width:"100vw",   display:"flex",alignItems:'center',listStyle:"none"}}>
    { recommendedMedicine && <div>
      <ul>
        {Object.entries(recommendedMedicine).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>}
    </div>
    </>
  );
};

export default Fake;
