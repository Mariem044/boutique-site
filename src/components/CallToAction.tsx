
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1539189017111-9e6b8ee1fae7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
          alt="Urban background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-streetwear-dark-purple/80"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Join the StreetWear Community
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Sign up for exclusive access to limited drops, special offers, and urban style inspiration.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="px-6 py-3 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-streetwear-purple min-w-[300px]"
            />
            <Button 
              size="lg" 
              className="bg-streetwear-purple hover:bg-streetwear-vivid-purple text-white"
            >
              Subscribe Now
            </Button>
          </div>
          <p className="text-sm text-gray-300 mt-4">
            By subscribing, you agree to our <Link to="/privacy-policy" className="underline">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
