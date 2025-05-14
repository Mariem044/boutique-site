
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, Menu, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Mobile menu trigger */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[250px] sm:w-[300px]">
            <div className="flex flex-col gap-6 mt-8">
              <h2 className="font-heading font-bold text-xl mb-4">Menu</h2>
              <Link to="/" className="text-lg py-2 hover:text-streetwear-purple">Home</Link>
              <Link to="/shop" className="text-lg py-2 hover:text-streetwear-purple">Shop</Link>
              <Link to="/new-arrivals" className="text-lg py-2 hover:text-streetwear-purple">New Arrivals</Link>
              <Link to="/collections" className="text-lg py-2 hover:text-streetwear-purple">Collections</Link>
              <Link to="/about" className="text-lg py-2 hover:text-streetwear-purple">About</Link>
            </div>
          </SheetContent>
        </Sheet>
        
        {/* Logo */}
        <Link to="/" className="flex items-center font-heading font-bold text-2xl">
          <span className="text-streetwear-purple">STREET</span>
          <span>WEAR</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-streetwear-purple transition-colors">Home</Link>
          <Link to="/shop" className="font-medium hover:text-streetwear-purple transition-colors">Shop</Link>
          <Link to="/new-arrivals" className="font-medium hover:text-streetwear-purple transition-colors">New Arrivals</Link>
          <Link to="/collections" className="font-medium hover:text-streetwear-purple transition-colors">Collections</Link>
          <Link to="/about" className="font-medium hover:text-streetwear-purple transition-colors">About</Link>
        </div>
        
        {/* Right section: search, account, cart */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => setSearchOpen(!searchOpen)}
            className="hover:bg-secondary">
            <Search className="h-5 w-5" />
          </Button>
          
          <Link to="/account">
            <Button variant="ghost" size="icon" className="hover:bg-secondary">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="hover:bg-secondary relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-streetwear-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Search overlay */}
      {searchOpen && (
        <div className="container mx-auto px-4 py-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-secondary p-3 rounded-md outline-none focus:ring-2 focus:ring-streetwear-purple"
              autoFocus
            />
            <Button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              size="sm"
              variant="ghost"
              onClick={() => setSearchOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
