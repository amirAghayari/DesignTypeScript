import React from "react";

interface TitleChild {
  children?: React.ReactNode;
}

const Title: React.FC<TitleChild> = ({ children }) => {
  return <h1 className="!text-9xl font-bold text-nowrap">{children}</h1>;
};

export default Title;
