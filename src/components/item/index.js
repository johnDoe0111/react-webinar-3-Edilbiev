import PropTypes from "prop-types";
import React from "react";
import CustomButton from "../custom-button";
import "./style.css";

function Item({ item, onAdd }) {
  const callbacks = {
    onAdd: (e) => {
      e.stopPropagation();
      onAdd(item);
    },
  };

  return (
    <div className="Item">
      <div className="Item-code">{item.code}</div>
      <div className="Item-title">
        <p>{item.title}</p>
        <p>{item.price} ₽</p>
      </div>
      <div className="Item-actions">
        <CustomButton title="Добавить" onAdd={callbacks.onAdd} />
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onAdd: PropTypes.func,
};

export default React.memo(Item);
