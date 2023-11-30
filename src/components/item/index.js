import PropTypes from "prop-types";
import React from "react";
import CustomButton from "../custom-button";
import "./style.css";

function Item({ item, onAdd, basketList, onDelete }) {
  const callbacks = {
    onAdd: (e) => {
      e.stopPropagation();
      onAdd(item);
    },
    onDelete: (e) => {
      e.stopPropagation();
      onDelete(item.code);
    },
  };

  if (basketList) {
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
  }

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
  basketList: PropTypes.array,
  onDelete: PropTypes.func,
};

export default React.memo(Item);
