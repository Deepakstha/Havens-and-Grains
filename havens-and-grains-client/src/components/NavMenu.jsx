import React from "react";
import { Link } from "react-router-dom";

const NavMenu = () => {
  const categories = ["Category 1", "Category 2"];

  return (
    <div className="text-primary text-lg p-4">
      <div className="flex gap-4">
        <div className="flex-none">
          <Link to="/" className="">
            Home
          </Link>
        </div>
        <div className="flex-none">
          <Link to="/products" className="">
            Products
          </Link>
        </div>
        <div className="relative inline-block text-lg group">
          <div className=" cursor-pointer">Categories</div>
          <div className="hidden min-w-80 z-10 absolute bg-white shadow-lg p-4 group-hover:block">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/${category.toLowerCase().replace(/\s/g, "-")}`}
                className="block mb-2"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
