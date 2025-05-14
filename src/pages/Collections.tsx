
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const collections = [
  {
    id: "cyberpunk",
    name: "Cyberpunk Aesthetic",
    description: "Futuristic streetwear inspired by dystopian cyber aesthetics and neon cityscapes.",
    image: "https://images.unsplash.com/photo-1601574465779-76d6dbb88557?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    itemCount: 15,
  },
  {
    id: "urban-tech",
    name: "Urban Tech",
    description: "Technical fabrics and utilitarian designs for the modern city dweller.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    itemCount: 12,
  },
  {
    id: "retro-wave",
    name: "Retro Wave",
    description: "80s-inspired graphics and bold colors for a nostalgic yet contemporary look.",
    image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    itemCount: 9,
  },
  {
    id: "minimal-street",
    name: "Minimal Street",
    description: "Clean lines and monochromatic palettes for understated street style.",
    image: "https://images.unsplash.com/photo-1566208541068-ffaf44177a7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    itemCount: 18,
  }
];

const Collections: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Page header */}
        <div className="bg-gradient-to-r from-streetwear-blue to-streetwear-vivid-purple py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Collections</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Explore our curated collections, each with its own unique aesthetic and attitude.
            </p>
          </div>
        </div>

        {/* Collections grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {collections.map((collection) => (
                <Link 
                  key={collection.id}
                  to={`/collections/${collection.id}`}
                  className="block hover-glow"
                >
                  <Card className="overflow-hidden h-full bg-card border-streetwear-charcoal">
                    <div className="relative h-64">
                      <img 
                        src={collection.image} 
                        alt={collection.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-streetwear-vivid-purple text-white px-3 py-1 rounded-full text-sm">
                        {collection.itemCount} items
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold mb-2">{collection.name}</h2>
                      <p className="text-muted-foreground mb-4">{collection.description}</p>
                      <Button variant="outline" className="group border-streetwear-purple text-streetwear-purple hover:bg-streetwear-purple hover:text-white">
                        Explore Collection
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
