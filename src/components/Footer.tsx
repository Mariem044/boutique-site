
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-foreground pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="inline-block font-heading font-bold text-2xl">
              <span className="text-streetwear-purple">STREET</span>
              <span>WEAR</span>
            </Link>
            <p className="text-muted-foreground">
              Premium streetwear clothing and accessories for the modern urban lifestyle.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-foreground hover:text-streetwear-purple">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground hover:text-streetwear-purple">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground hover:text-streetwear-purple">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Shop */}
          <div>
            <h3 className="font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/shop" className="hover:text-streetwear-purple">All Products</Link></li>
              <li><Link to="/new-arrivals" className="hover:text-streetwear-purple">New Arrivals</Link></li>
              <li><Link to="/bestsellers" className="hover:text-streetwear-purple">Best Sellers</Link></li>
              <li><Link to="/collections" className="hover:text-streetwear-purple">Collections</Link></li>
              <li><Link to="/sale" className="hover:text-streetwear-purple">Sale</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Information */}
          <div>
            <h3 className="font-bold text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-streetwear-purple">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-streetwear-purple">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-streetwear-purple">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-streetwear-purple">Shipping & Returns</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-streetwear-purple">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Subscribe</h3>
            <p className="text-muted-foreground mb-4">Get 10% off your first order by joining our newsletter</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-2 rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-streetwear-purple"
              />
              <button 
                type="submit" 
                className="w-full bg-streetwear-purple hover:bg-streetwear-vivid-purple text-white py-2 px-4 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-border mt-10 pt-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} StreetWear. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
