import React from "react";
import Title from "./Title";
import HeaderText from "./HeaderText";

const Header: React.FC = () => {
  return (
    <div className="absolute left-30 top-10  w-200 z-10">
      <Title>Interior design</Title>
      <HeaderText>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam esse
        neque officia vitae fuga quibusdam at, placeat recusandae ullam nulla
        suscipit voluptatum, itaque reiciendis voluptatibus iste quod nisi
        repudiandae odit.
      </HeaderText>
    </div>
  );
};

export default Header;
