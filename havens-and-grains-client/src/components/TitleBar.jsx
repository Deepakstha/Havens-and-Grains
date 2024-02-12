import React from "react";

const TitleBar = ({ text }) => {
  return (
    <div className="bg-primary my-8 text-primary-foreground py-4 text-center text-4xl">
      {text}
    </div>
  );
};

export default TitleBar;
