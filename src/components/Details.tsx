import React from "react";
import DetailsText from "./DetailsText";

const Details: React.FC = () => {
  return (
    <div className="w-250 bg-gray-400/80 h-80 absolute top-120 right-30 !rounded-[200px] flex gap-2">
      <DetailsText title="5.8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        provident rerum odit ullam culpa, temporibus, nam quia vero cum quis
        nemo quisquam iusto! Cum fuga nihil hic quis architecto? Dolor!
      </DetailsText>

      <DetailsText title="99+">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        provident rerum odit ullam culpa, temporibus, nam quia vero cum quis
        nemo quisquam iusto! Cum fuga nihil hic quis architecto? Dolor!
      </DetailsText>

      <DetailsText title="110K">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        provident rerum odit ullam culpa, temporibus, nam quia vero cum quis
        nemo quisquam iusto! Cum fuga nihil hic quis architecto? Dolor!
      </DetailsText>
    </div>
  );
};

export default Details;
