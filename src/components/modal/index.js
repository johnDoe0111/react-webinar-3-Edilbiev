import PropTypes from "prop-types";
import React from "react";
import Head from "../head";
import Item from "../item";
import "./style.css";

const Modal = ({ active, setActive, basketList, onDeleteItem, totalPrice }) => {
  if (active) {
    return (
      <div
        className={active ? "modal active" : "modal"}
        onClick={() => setActive(false)}
      >
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <Head title="Корзина" active={active} setActive={setActive} />
          <div className="basket-list">
            {basketList.map((item) => (
              <div key={item.code} className="basket-list__item">
                <Item
                  item={item}
                  active={active}
                  basketList={basketList}
                  onDelete={onDeleteItem}
                />
              </div>
            ))}
          </div>
          <div className="items-sum">
            <p>Итого</p>
            <p className="total-price">{totalPrice()} ₽</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

Modal.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  basketList: PropTypes.array.isRequired,
  onDeleteItem: PropTypes.func,
  totalPrice: PropTypes.func,
};

export default React.memo(Modal);
