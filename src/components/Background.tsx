import React from "react";

interface BackgroundChild {
  children?: React.ReactNode;
}

const Background: React.FC<BackgroundChild> = ({ children }) => {
  return (
    <>
      <img
        src="./ea9d8aa0bdca6515c4700e904ef8731d.jpg"
        alt="bg image"
        className="w-110 h-120 fixed bottom-[-30px] left-10 rounded-t-xl"
      ></img>
      {children}
      <img
        src="./5525721f5fc61121a6a22feba18d1ec2.jpg"
        alt="bg image"
        className="w-130 h-110 fixed right-20 rounded-b-xl "
      ></img>
    </>
  );
};

export default Background;
