import PropTypes from "prop-types";
import React from "react";
import CustomButton from "../custom-button";
import "./style.css";

function Controls({ active, setActive, basketQuantity, totalPrice }) {
  function getNounForm(number, one, few, many) {
    if (number === 0) {
      return many;
    }

    const mod10 = number % 10;
    const mod100 = number % 100;

    if (mod100 >= 11 && mod100 <= 19) {
      return many;
    }

    if (mod10 === 1) {
      return one;
    }

    if (mod10 >= 2 && mod10 <= 4) {
      return few;
    }

    return many;
  }

  return (
    <div className="Controls">
      <div className="basket">
        <div>
          <p>
            В корзине:{" "}
            <span>
              {basketQuantity
                ? `${basketQuantity} ${getNounForm(
                    basketQuantity,
                    "товар",
                    "товара",
                    "товаров"
                  )} / ${totalPrice()} ₽`
                : "пусто"}
            </span>
          </p>
        </div>
      </div>
      <CustomButton title="Перейти" active={active} setActive={setActive} />
    </div>
  );
}

Controls.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func,
  basketQuantity: PropTypes.number,
  totalPrice: PropTypes.func,
};

export default React.memo(Controls);

// const buttonConfigs = {
//   Перейти: { onClick: () => setActive(!active) },
//   Закрыть: { onClick: () => setActive(!active) },
//   Добавить: { onClick: onAdd },
//   Удалить: { onClick: onDelete },
// };

// const config = buttonConfigs[title] || {};
