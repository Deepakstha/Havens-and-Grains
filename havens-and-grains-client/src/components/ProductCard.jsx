import { Button } from "@/components/ui/button";
import { CardStackPlusIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const ProductCard = ({ title, image, price, buy, addtocart }) => {
  return (
    <Card>
      <CardHeader className="rounded-b-md bg-accent mb-4">
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <img className="h-auto w-full" src={image} />
        <div className="mt-4 text-xl">Rs. {price}</div>
      </CardContent>
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
