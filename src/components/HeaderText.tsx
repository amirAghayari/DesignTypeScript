import React, { children } from "react";
import Button from "./Button";

interface TextChild {
  children?: React.ReactNode;
}

const HeaderText: React.FC<TextChild> = ({ children }) => {
  return (
    <>
      <p className="!text-xl text-wrap">{children}</p>
      <Button>Explore</Button>
    </>
  );
};

export default HeaderText;
