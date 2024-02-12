import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { useParams } from "react-router-dom";

const ProductView = () => {
  const { id } = useParams();
  return (
    <div className="container">
      <Card>
        <CardContent className="pt-4">
          <div className="flex gap-8">
            <div>
              <img src="http://picsum.photos/300" />
            </div>
            <div></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductView;
