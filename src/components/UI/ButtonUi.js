import React from "react";

function ButtonUi({ title, variant, fz, fw, pad, br, action }) {
  return (
    <button
      onClick={action}
      style={{
        background:
          variant === "primary"
            ? "#F6F8FB"
            : variant === "secondary"
            ? "#186FD4"
            : "",
        color:
          variant === "primary"
            ? "#117FE3"
            : variant === "secondary"
            ? "#fff"
            : "",
        fontSize: `${fz}px`,
        fontWeight: `${fw}`,
        padding: `${pad}`,
        borderRadius: `${br}`,
      }}
    >
      {title}
    </button>
  );
}

export default ButtonUi;
