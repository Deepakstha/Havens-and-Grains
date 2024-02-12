import React from "react";

const PageNotFound = () => {
  return (
    <div className="text-center w-screen h-screen flex flex-col items-center justify-center">
      <div className="text-6xl text-primary">404</div>
      <div className="text-primary/60 text-xl">Page not found</div>
      <div>
        Go to{" "}
        <a className="text-blue-500" href="/">
          Home page
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
