import React from 'react';

const AddToCart = ({ product }) => {
  const { id, color, size } = product;
  return (
    <div className="colors">
      <p>
        Colors:
        {color.map((curColor, index) => {
          return (
            <button key={index}>
              {curColor}
            </button>
          );
        })}
      </p>
    </div>
  );
};
export default AddToCart;
