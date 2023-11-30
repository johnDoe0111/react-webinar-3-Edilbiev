import PropTypes from "prop-types";
import React from "react";
import Item from "../item";
import "./style.css";

function List({ list, onAddItemInBasket }) {
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

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
    })
  ).isRequired,
  onAddItemInBasket: PropTypes.func,
};

export default React.memo(List);
