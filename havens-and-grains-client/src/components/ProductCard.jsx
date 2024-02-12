import { Button } from "@/components/ui/button";
import { CardStackPlusIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const ProductCard = ({ product, addtocart, buy }) => {
  return (
    <Card>
      <a href={`/products/${product.id}`}>
        <CardHeader className="rounded-b-md bg-accent mb-4">
          <CardTitle className="text-2xl">{product.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <img className="h-auto w-full" src={product.image} />
          <div className="mt-4 text-xl">Rs. {product.price}</div>
        </CardContent>
      </a>
      <CardFooter className="flex justify-between">
        <Button onClick={addtocart}>
          <CardStackPlusIcon className="mr-2 h-4 w-4" /> Add to cart
        </Button>
        <Button onClick={buy}>Buy</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
