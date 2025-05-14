
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import { ArrowRight } from "lucide-react";

// Placeholder data
const featuredProducts = [
  {
    id: "1",
    name: "Urban Tech Hoodie",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Hoodies",
    isNew: true,
  },
  {
    id: "2",
    name: "Street Culture Tee",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "T-shirts",
  },
  {
    id: "3",
    name: "Metro Cargo Pants",
    price: 79.99,
    salePrice: 59.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Pants",
    isSale: true,
  },
  {
    id: "4",
    name: "Future Vision Cap",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Accessories",
  },
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-title">Featured Products</h2>
          <Button variant="ghost" asChild className="hidden sm:flex">
            <Link to="/shop" className="flex items-center text-streetwear-purple hover:text-streetwear-vivid-purple">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
          <Button asChild className="bg-streetwear-purple hover:bg-streetwear-vivid-purple text-white">
            <Link to="/shop">
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
