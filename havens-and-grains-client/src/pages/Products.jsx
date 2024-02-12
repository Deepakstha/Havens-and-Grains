import ProductCard from "@/components/ProductCard";
import TitleBar from "@/components/TitleBar";
import React from "react";

const Products = () => {
  const groceryItems = [
    {
      id: 1,
      title: "Product 1",
      price: 10,
      image: "https://picsum.photos/300?random=1",
    },
    {
      id: 2,
      title: "Product 2",
      price: 20,
      image: "https://picsum.photos/300?random=2",
    },
    {
      id: 3,
      title: "Product 3",
      price: 30,
      image: "https://picsum.photos/300?random=3",
    },
  ];

  return (
    <div className="container">
      <TitleBar text={"Rice"} />
      <div className="grid grid-cols-3 gap-8">
        {groceryItems.map((item) => (
          <ProductCard
            product={item}
            buy={() => {
              console.log(`Buy ${item.title}`);
            }}
          />
        ))}
      </div>
      <TitleBar text={"Pulses"} />
      <div className="grid grid-cols-3  gap-8">
        {groceryItems.map((item) => (
          <ProductCard
            product={item}
            buy={() => {
              console.log(`Buy ${item.title}`);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
