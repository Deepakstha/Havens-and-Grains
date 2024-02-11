import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const NavMenu = () => {
  // Assuming 'catagories' is the correct spelling for 'categories'
  const catagories = ["Category   1", "Category   2"];

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex justify-between">
        <NavigationMenuItem>
          <NavigationMenuLink as={Link} to="/">
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink as={Link} to="/products">
            Products
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            {catagories.map((cat, index) => (
              <NavigationMenuLink key={index}>{cat}</NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
