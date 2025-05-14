
import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "hoodies",
    name: "Hoodies & Sweatshirts",
    image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    count: 45,
  },
  {
    id: "tshirts",
    name: "T-Shirts",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    count: 62,
  },
  {
    id: "pants",
    name: "Pants & Joggers",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    count: 38,
  },
  {
    id: "accessories",
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    count: 24,
  },
];

const CategorySection: React.FC = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-10">Shop by Category</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/shop/category/${category.id}`}
              className="group relative rounded-lg overflow-hidden hover-glow h-[300px]"
            >
              <div className="absolute inset-0">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 w-full p-6">
                <h3 className="text-white text-xl font-bold mb-1">
                  {category.name}
                </h3>
                <p className="text-gray-200">
                  {category.count} products
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
