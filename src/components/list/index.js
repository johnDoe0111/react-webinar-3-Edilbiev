import PropTypes from "prop-types";
import React from "react";
import BasketItem from "../basket-item";
import Item from "../item";
import "./style.css";

function List({ list, onAddItemInBasket, active, basketList, onDelete }) {
  if (!active) {
    return (
      <div className="List">
        {list.map((item) => (
          <div key={item.code} className="List-item">
            <Item item={item} onAdd={onAddItemInBasket} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="List">
      {basketList.map((item) => (
        <div key={item.code} className="List-item">
          <BasketItem item={item} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
}

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
    })
  ),
  onAddItemInBasket: PropTypes.func,
  active: PropTypes.bool,
  basketList: PropTypes.array,
  onDelete: PropTypes.func,
};

export default React.memo(List);
