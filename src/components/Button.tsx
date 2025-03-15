import React, { children } from "react";

interface BtnChild {
  children?: React.ReactNode;
}

const Button: React.FC<BtnChild> = ({ children }) => {
  return (
    <button className="btn btn-active btn-outline btn-soft hover:!btn-accent hover:!bg-accent !rounded-3xl w-40 mt-2">
      {children}
    </button>
  );
};

export default Button;
