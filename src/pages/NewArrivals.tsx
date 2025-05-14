
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const newArrivalsProducts = [
  {
    id: "na1",
    name: "Cyberpunk Bomber Jacket",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Jackets",
    isNew: true,
  },
  {
    id: "na2",
    name: "Urban Tactical Vest",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Outerwear",
    isNew: true,
  },
  {
    id: "na3",
    name: "Pixel Art Graphic Tee",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "T-shirts",
    isNew: true,
  },
  {
    id: "na4",
    name: "Neon Reflective Cargo Pants",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Pants",
    isNew: true,
  },
  {
    id: "na5",
    name: "Holographic Platform Sneakers",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Footwear",
    isNew: true,
  },
  {
    id: "na6",
    name: "Digital Camo Bucket Hat",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Accessories",
    isNew: true,
  }
];

const NewArrivals: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Page header */}
        <div className="bg-gradient-to-r from-streetwear-dark-purple to-streetwear-vivid-purple py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">New Arrivals</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Be the first to rock our latest drops. Limited quantities available, refresh your style with our newest streetwear designs.
            </p>
          </div>
        </div>

        {/* Products section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {newArrivalsProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild className="bg-streetwear-vivid-purple hover:bg-streetwear-purple text-white">
                <a href="/shop">
                  View All Products <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NewArrivals;
