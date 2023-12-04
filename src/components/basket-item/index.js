import PropTypes from "prop-types";
import React from "react";
import CustomButton from "../custom-button";
import "../item/style.css";

const BasketItem = ({ item, onDelete }) => {
  const callbacks = {
    onDelete: (e) => {
      e.stopPropagation();
      onDelete(item.code);
    },
  };

  return (
    <div className="Item">
      <div className="Item-code">{item.code}</div>
      <div className="Item-inner">
        <p>{item.title}</p>
        <div className="Item-inner-right-items">
          <p className="item-price">{item.price} ₽</p>
          <p>{item.quantity} шт</p>
        </div>
      </div>
      <div className="Item-actions">
        <CustomButton
          title="Удалить"
          onAdd={callbacks.onAdd}
          onDelete={callbacks.onDelete}
        />
      </div>
    </div>
  );
};

BasketItem.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default React.memo(BasketItem);
