import React, { useState, useEffect } from "react";

function AnimatedContainer({ show = true, children, onFadeOutEnd }) {
  const [visible, setVisible] = useState(show);
  useEffect(() => {
    if (!show) {
      setTimeout(() => {
        setVisible(false);
        if (onFadeOutEnd) onFadeOutEnd();
      }, 400);
    } else {
      setVisible(true);
    }
  }, [show, onFadeOutEnd]);

  if (!visible && !show) return null;
  return (
    <div className={show ? "fade-in slide-in" : "fade-out"}>{children}</div>
  );
}

export default AnimatedContainer;
