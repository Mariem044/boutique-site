
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-streetwear-dark-purple min-h-[600px] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-streetwear-dark-purple via-streetwear-dark-purple to-streetwear-purple opacity-80"></div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-center py-16">
        <div className="max-w-xl">
          <span className="inline-block bg-streetwear-purple bg-opacity-20 text-streetwear-purple px-4 py-1 rounded-full font-medium text-sm mb-6">
            NEW COLLECTION 2024
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight animate-fade-in">
            Elevate Your <span className="text-streetwear-purple">Urban</span> Style
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
            Discover the latest trends in streetwear fashion. Limited editions and exclusive drops that define the culture.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-streetwear-purple hover:bg-streetwear-vivid-purple text-white"
              asChild
            >
              <Link to="/shop">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-streetwear-dark-purple"
              asChild
            >
              <Link to="/collections">
                Explore Collections
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
