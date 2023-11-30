import PropTypes from "prop-types";
import React from "react";
import CustomButton from "../custom-button";
import "./style.css";

function Head({ title, active, setActive }) {
  if (title === "Корзина") {
    return (
      <div className="active-head">
        <h1>{title}</h1>
        <CustomButton title="Закрыть" active={active} setActive={setActive} />
      </div>
    );
  }

  return (
    <div className="Head">
      <h1>{title}</h1>
    </div>
  );
}

Head.propTypes = {
  title: PropTypes.node.isRequired,
  active: PropTypes.bool,
  setActive: PropTypes.func,
};

export default React.memo(Head);
