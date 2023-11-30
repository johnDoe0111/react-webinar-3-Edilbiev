import PropTypes from "prop-types";
import React from "react";
import "./style.css";

const CustomButton = ({ title, active, setActive, onAdd, onDelete }) => {
  const buttonConfigs = {
    Перейти: { onClick: () => setActive(!active) },
    Закрыть: { onClick: () => setActive(!active) },
    Добавить: { onClick: onAdd },
    Удалить: { onClick: onDelete },
  };

  const config = buttonConfigs[title] || {};

  return <button onClick={config.onClick}>{title}</button>;
};

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
  setActive: PropTypes.func,
  onAdd: PropTypes.func,
  onDelete: PropTypes.func,
};

export default React.memo(CustomButton);
