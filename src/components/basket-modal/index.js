import PropTypes from "prop-types";
import React from "react";
import Head from "../head";
import List from "../list";
import "./style.css";

const BasketModal = ({
  active,
  setActive,
  basketList,
  onDeleteItem,
  totalPrice,
}) => {
  return (
    <div className={active ? "modal active" : ""}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <Head title="Корзина" active={active} setActive={setActive} />
        <List basketList={basketList} onDelete={onDeleteItem} active={active} />
        <div className="items-sum">
          <p>Итого</p>
          <p className="total-price">{totalPrice} ₽</p>
        </div>
      </div>
    </div>
  );
};

BasketModal.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  basketList: PropTypes.array.isRequired,
  onDeleteItem: PropTypes.func,
  totalPrice: PropTypes.number,
};

export default React.memo(BasketModal);
