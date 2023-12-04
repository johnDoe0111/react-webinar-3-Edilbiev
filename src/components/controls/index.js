import PropTypes from "prop-types";
import React from "react";
import CustomButton from "../custom-button";
import "./style.css";

function Controls({ setActive, basketInfo }) {
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
              {basketInfo.totalQuantity && basketInfo.totalPrice !== 0
                ? `${basketInfo.totalQuantity} ${getNounForm(
                    basketInfo.totalQuantity,
                    "товар",
                    "товара",
                    "товаров"
                  )} / ${basketInfo.totalPrice} ₽`
                : "пусто"}
            </span>
          </p>
        </div>
      </div>
      <CustomButton title="Перейти" setActive={setActive} />
    </div>
  );
}

Controls.propTypes = {
  setActive: PropTypes.func,
  basketInfo: PropTypes.object,
};

export default React.memo(Controls);
