import React, { useState } from 'react';
import StarRating from './StarRating';
import './App.css';

export default function App() {
  const [rating, setRating] = useState(2);

  return (
    <div className="App">
      <StarRating
        value={rating}
        onClick={setRating}
        emptyColor="#bbb"
        filledColor="green"
        size="6x"
      />
    </div>
  );
}
