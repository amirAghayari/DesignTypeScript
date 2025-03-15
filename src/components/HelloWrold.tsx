import React from "react";

interface HelloWorldProps {
  name?: string;
}

const HelloWrold: React.FC<HelloWorldProps> = ({ name = "World" }) => {
  return (
    <div>
      <h1>Hello , {name} !</h1>
    </div>
  );
};

export default HelloWrold;
