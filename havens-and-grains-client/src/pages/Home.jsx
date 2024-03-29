import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import TitleBar from "@/components/TitleBar";
import { Button } from "@/components/ui/button";
export default function Home() {
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
    {
      id: 4,
      title: "Product 4",
      price: 40,
      image: "https://picsum.photos/300?random=4",
    },
    {
      id: 5,
      title: "Product 5",
      price: 50,
      image: "https://picsum.photos/300?random=5",
    },
    {
      id: 6,
      title: "Product 6",
      price: 60,
      image: "https://picsum.photos/300?random=6",
    },
    {
      id: 7,
      title: "Product 7",
      price: 70,
      image: "https://picsum.photos/300?random=7",
    },
    {
      id: 8,
      title: "Product 8",
      price: 80,
      image: "https://picsum.photos/300?random=8",
    },
  ];
  return (
    <div className="container">
      <div className="mt-12 mb-20">
        <HeroSection />
      </div>
      <TitleBar text={"Products"} />
      <div className="grid grid-cols-3 gap-8">
        {groceryItems.map((item) => (
          <ProductCard
            product={item}
            addtocart={() => {
              console.console.log(`Add to cart ${item.title}`);
            }}
            buy={() => {
              console.log(`Buy ${item.title}`);
            }}
          />
        ))}
      </div>
    </div>
  );
}
