import { cn as bem } from "@bem-react/classname";
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

function ModalLayout({ children, setActive }) {
  const cn = bem("ModalLayout");

  return (
    <div className={cn()} onClick={() => setActive(false)}>
      <div>{children}</div>
    </div>
  );
}

ModalLayout.propTypes = {
  children: PropTypes.node,
  setActive: PropTypes.func,
};

export default React.memo(ModalLayout);
