import React from "react";

interface DetailsTextChild {
  children?: React.ReactNode;
  title: string;
}

const DetailsText: React.FC<DetailsTextChild> = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5 w-60 ml-22 ">
      <h2 className="font-extrabold border-b-4 border-solid border-gray-900 w-18 p-4">
        {title}
      </h2>
      <p>{children}</p>
    </div>
  );
};

export default DetailsText;
