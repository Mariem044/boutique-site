
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  salePrice?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  category,
  isNew = false,
  isSale = false,
  salePrice,
}) => {
  return (
    <div className="product-card group">
      {/* Product image with overlay */}
      <div className="relative overflow-hidden">
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt={name}
            className="w-full h-[320px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
        
        {/* Quick action buttons */}
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-2">
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full h-10 w-10"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full h-10 w-10"
            >
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Tags */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {isNew && (
            <span className="bg-streetwear-blue text-white text-xs font-semibold px-2 py-1 rounded">
              NEW
            </span>
          )}
          {isSale && (
            <span className="bg-streetwear-orange text-white text-xs font-semibold px-2 py-1 rounded">
              SALE
            </span>
          )}
        </div>
      </div>
      
      {/* Product info */}
      <div className="p-4">
        <div className="text-sm text-muted-foreground mb-1">{category}</div>
        <Link to={`/product/${id}`} className="block">
          <h3 className="font-medium text-lg mb-2 hover:text-streetwear-purple transition-colors">
            {name}
          </h3>
        </Link>
        <div className="flex items-center space-x-2">
          {isSale && salePrice !== undefined ? (
            <>
              <span className="font-semibold text-streetwear-orange">${salePrice.toFixed(2)}</span>
              <span className="text-muted-foreground line-through">${price.toFixed(2)}</span>
            </>
          ) : (
            <span className="font-semibold">${price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
