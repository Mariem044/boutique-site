
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, ChevronUp, SlidersHorizontal } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

// Placeholder data
const products = [
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
  {
    id: "5",
    name: "District Graphic Tee",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "T-shirts",
  },
  {
    id: "6",
    name: "Downtown Jacket",
    price: 129.99,
    salePrice: 99.99,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Jackets",
    isSale: true,
  },
  {
    id: "7",
    name: "Concrete Sneakers",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Footwear",
    isNew: true,
  },
  {
    id: "8",
    name: "Night Owl Beanie",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Accessories",
  },
];

const categories = ["All", "Hoodies", "T-shirts", "Pants", "Jackets", "Footwear", "Accessories"];

const Shop = () => {
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedCategories, setSelectedCategories] = useState(["All"]);
  const [sortBy, setSortBy] = useState("featured");
  const [filterExpanded, setFilterExpanded] = useState({
    category: true,
    price: true,
    size: false,
    color: false,
  });

  const toggleCategory = (category: string) => {
    if (category === "All") {
      setSelectedCategories(["All"]);
      return;
    }

    let newCategories = [...selectedCategories];
    if (newCategories.includes("All")) {
      newCategories = [category];
    } else if (newCategories.includes(category)) {
      newCategories = newCategories.filter((c) => c !== category);
      if (newCategories.length === 0) {
        newCategories = ["All"];
      }
    } else {
      newCategories.push(category);
    }
    setSelectedCategories(newCategories);
  };

  const toggleFilter = (filter: keyof typeof filterExpanded) => {
    setFilterExpanded({
      ...filterExpanded,
      [filter]: !filterExpanded[filter],
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Page header */}
        <div className="bg-secondary py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold">Shop</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Desktop view */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="space-y-6">
                {/* Categories */}
                <div>
                  <div 
                    className="flex justify-between items-center mb-3 cursor-pointer"
                    onClick={() => toggleFilter("category")}
                  >
                    <h3 className="font-semibold">Categories</h3>
                    {filterExpanded.category ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                  
                  {filterExpanded.category && (
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`category-${category}`} 
                            checked={selectedCategories.includes(category)} 
                            onCheckedChange={() => toggleCategory(category)}
                          />
                          <label 
                            htmlFor={`category-${category}`}
                            className="text-sm cursor-pointer"
                          >
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price Range */}
                <div>
                  <div 
                    className="flex justify-between items-center mb-3 cursor-pointer"
                    onClick={() => toggleFilter("price")}
                  >
                    <h3 className="font-semibold">Price Range</h3>
                    {filterExpanded.price ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                  
                  {filterExpanded.price && (
                    <div className="space-y-4">
                      <Slider
                        defaultValue={[0, 200]}
                        max={200}
                        step={1}
                        value={priceRange}
                        onValueChange={setPriceRange}
                      />
                      <div className="flex items-center justify-between">
                        <span className="text-sm">${priceRange[0]}</span>
                        <span className="text-sm">${priceRange[1]}+</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-grow">
              {/* Mobile filter trigger */}
              <div className="lg:hidden mb-4 flex justify-between items-center">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <SlidersHorizontal className="h-4 w-4" />
                      Filter Products
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left">
                    <div className="mt-6 space-y-6">
                      {/* Mobile Categories */}
                      <div>
                        <h3 className="font-semibold mb-3">Categories</h3>
                        <div className="space-y-2">
                          {categories.map((category) => (
                            <div key={category} className="flex items-center space-x-2">
                              <Checkbox 
                                id={`mobile-category-${category}`} 
                                checked={selectedCategories.includes(category)} 
                                onCheckedChange={() => toggleCategory(category)}
                              />
                              <label 
                                htmlFor={`mobile-category-${category}`}
                                className="text-sm cursor-pointer"
                              >
                                {category}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Mobile Price Range */}
                      <div>
                        <h3 className="font-semibold mb-3">Price Range</h3>
                        <div className="space-y-4">
                          <Slider
                            defaultValue={[0, 200]}
                            max={200}
                            step={1}
                            value={priceRange}
                            onValueChange={setPriceRange}
                          />
                          <div className="flex items-center justify-between">
                            <span className="text-sm">${priceRange[0]}</span>
                            <span className="text-sm">${priceRange[1]}+</span>
                          </div>
                        </div>
                      </div>

                      <SheetClose asChild>
                        <Button className="w-full mt-6 bg-streetwear-purple hover:bg-streetwear-vivid-purple">
                          Apply Filters
                        </Button>
                      </SheetClose>
                    </div>
                  </SheetContent>
                </Sheet>

                {/* Sort dropdown for mobile */}
                <select 
                  className="bg-background border border-border rounded p-2 text-sm"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
              </div>

              {/* Desktop sorting */}
              <div className="hidden lg:flex justify-between items-center mb-6">
                <p className="text-sm text-muted-foreground">Showing {products.length} results</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Sort by:</span>
                  <select 
                    className="bg-background border border-border rounded p-2 text-sm"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>
              </div>

              {/* Product grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex gap-2">
                  <Button variant="outline" disabled className="w-10 h-10 p-0 flex items-center justify-center">
                    1
                  </Button>
                  <Button variant="ghost" className="w-10 h-10 p-0 flex items-center justify-center">
                    2
                  </Button>
                  <Button variant="ghost" className="w-10 h-10 p-0 flex items-center justify-center">
                    3
                  </Button>
                  <Button variant="ghost" className="w-10 h-10 p-0 flex items-center justify-center">
                    4
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
