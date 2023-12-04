import PropTypes from "prop-types";
import React from "react";
import "./style.css";

const CustomButton = ({ title, setActive, onAdd, onDelete }) => {
  const buttonConfigs = {
    Перейти: { onClick: () => setActive(true) },
    Закрыть: { onClick: () => setActive(false) },
    Добавить: { onClick: onAdd },
    Удалить: { onClick: onDelete },
  };

  const config = buttonConfigs[title] || {};

  return <button onClick={config.onClick}>{title}</button>;
};

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  setActive: PropTypes.func,
  onAdd: PropTypes.func,
  onDelete: PropTypes.func,
};

export default React.memo(CustomButton);
