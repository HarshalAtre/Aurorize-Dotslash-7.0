import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './shop_all.css';

const Shop_all = ({ recommendedMedicine }) => {
  
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

      <div className='view_deal'>
      { recommendedMedicine && <div>
      <ul>
        {Object.entries(recommendedMedicine).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>}
        <h2>All products</h2>
        <div className='cart-icon-container' onClick={openCartModal}>
          <FontAwesomeIcon icon={faShoppingCart} />
          {cart.length > 0 && <span className='cart-counter'>{cart.length}</span>}
        </div>
      </div>
      <div className='view_section'>
        {products.map((product) => (
          <div className='product_item' key={product.id} onClick={() => handleProductClick(product)}>
            <div>
              <img className='product_img' src={product.thumbnail} alt='' />
            </div>
            <p className='products_name'>{product.title}</p>
            <p className='product_cost'>Price: &#x20B9;{product.price}</p>
            <div className='btn_xx'>
              <button className='buy_now_button' onClick={handleBuyNowClick}>
                Buy Now
              </button>
              <button className='buy_now_button' onClick={handleAddToCartClick}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {isPopupVisible && selectedProduct.length > 0 && (
        <div className='popup'>
          <div className='popup-content'>
            <span className='close' onClick={closePopup}>
              &times;
            </span>
            <div className='popup-details'>
              <div className='image-container'>
                <img className='popup-img' src={selectedProduct[0].thumbnail} alt='' />
                <h2>{selectedProduct[0].title}</h2>
                <p>{selectedProduct[0].description}</p>
              </div>
              <div className='recipe-details'>
                <b>Recipe:</b>
                <p> {selectedProduct[0].recipe}</p>
              </div>
            </div>
            <p>Price: &#x20B9;{selectedProduct[0].price}</p>
            <div className='btn_xx'>
              <button className='buy_now_button' onClick={handleBuyNowClick}>
                Buy Now
              </button>
              <button className='buy_now_button' onClick={handleAddToCartClick}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      {isCartModalVisible && (
        <div className='cart-modal'>
          <div className='cart-modal-content'>
            <span className='close' onClick={closeCartModal}>
              &times;
            </span>
            <h2>Shopping Cart</h2>
            {cart.map((cartItem) => (
              <div key={cartItem.id}>
                <p>{cartItem.title}</p>
                <p>Price: &#x20B9;{cartItem.price}</p>
                {/* Add more details as needed */}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Shop_all;
