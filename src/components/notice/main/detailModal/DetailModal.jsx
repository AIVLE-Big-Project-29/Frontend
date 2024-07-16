import React from 'react';

const DetailModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <p>Price: {data.price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default DetailModal;
