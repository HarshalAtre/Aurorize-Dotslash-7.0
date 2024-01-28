import React, { useState } from 'react';

const YourComponent = () => {
  const [userInput, setUserInput] = useState(''); // State to store user input
  const [recommendedMedicine, setRecommendedMedicine] = useState(null); // State to store recommended medicine

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleFetchData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5002/recommend_medicine?user_input=${userInput}`);
      const data = await response.json();
      console.log(data)
      setRecommendedMedicine(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div style={{marginTop:"90px"}}>
      <label>
        Enter user input:
        <input type="text" value={userInput} onChange={handleInputChange} />
      </label>

      <button onClick={handleFetchData}>Fetch Data</button>

      {recommendedMedicine && (
        <div>
          <h2>Recommended Medicine:</h2>
          {/* <p>{recommendedMedicine}</p> */}
        </div>
      )}
    </div>
  );
};

export default YourComponent;
