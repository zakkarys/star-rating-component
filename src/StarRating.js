import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Star({ number, value, onClick, emptyColor, filledColor, size }) {
  function handleClick() {
    onClick(number === value ? 0 : number);
  }

  return (
    <span className="clickable" onClick={handleClick} data-index={`star-${number}`}>
      <FontAwesomeIcon
        icon={faStar}
        color={number <= value ? filledColor : emptyColor}
        size={size}
      />
    </span>
  );
}

export default function StarRating({ value, onClick, emptyColor, filledColor, size }) {
  return (
    <span>
      {[...Array(5).keys()].map((position) => {
        return (
          <Star
            emptyColor={emptyColor}
            filledColor={filledColor}
            size={size}
            number={position + 1}
            value={value}
            key={position}
            onClick={onClick}
          />
        );
      })}
    </span>
  );
}