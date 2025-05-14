
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, ShoppingCart, Star, Truck, Package, Minus, Plus } from "lucide-react";
import FeaturedProducts from "@/components/FeaturedProducts";

// Sample product data - in a real app, this would come from an API
const product = {
  id: "1",
  name: "Urban Tech Hoodie",
  price: 89.99,
  description: "Premium streetwear hoodie with minimalist design and technical fabric. Features a relaxed fit, adjustable hood, and hidden pocket for your essentials. Perfect for urban exploration and everyday comfort.",
  images: [
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", 
    "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  ],
  rating: 4.8,
  reviews: 124,
  sizes: ["S", "M", "L", "XL", "XXL"],
  colors: ["Black", "Gray", "Navy"],
  category: "Hoodies",
  brand: "StreetWear",
  specs: [
    "80% cotton, 20% polyester blend",
    "Relaxed, oversized fit",
    "Front kangaroo pocket",
    "Hidden interior pocket with zipper",
    "Ribbed cuffs and hem",
    "Drawstring hood",
    "Machine washable"
  ]
};

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => Math.max(1, q - 1));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Breadcrumbs */}
        <div className="bg-secondary py-2">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm">
              <Link to="/" className="hover:text-streetwear-purple">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/shop" className="hover:text-streetwear-purple">Shop</Link>
              <span className="mx-2">/</span>
              <Link to={`/shop/category/${product.category.toLowerCase()}`} className="hover:text-streetwear-purple">{product.category}</Link>
              <span className="mx-2">/</span>
              <span className="text-muted-foreground">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Product Detail Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-[4/5] bg-secondary rounded-lg overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Image Thumbnails */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2 transition-colors ${
                      selectedImage === index 
                        ? "border-streetwear-purple" 
                        : "border-transparent hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - View ${index + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Brand, Name, and Rating */}
              <div>
                <div className="text-streetwear-purple font-medium">{product.brand}</div>
                <h1 className="text-2xl md:text-3xl font-bold mt-1">{product.name}</h1>
                
                <div className="flex items-center mt-2 gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-streetwear-orange text-streetwear-orange" 
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>
              </div>

              {/* Price */}
              <div className="text-2xl font-bold">${product.price.toFixed(2)}</div>

              {/* Description */}
              <p className="text-muted-foreground">
                {product.description}
              </p>

              {/* Size Selection */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Size:</span>
                  <Link to="/size-guide" className="text-sm text-streetwear-purple hover:underline">
                    Size Guide
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      className={`w-12 h-12 p-0 ${
                        selectedSize === size 
                          ? "bg-streetwear-purple hover:bg-streetwear-vivid-purple" 
                          : ""
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <div className="mb-2 font-medium">Color:</div>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <Button
                      key={color}
                      variant={selectedColor === color ? "default" : "outline"}
                      className={`${
                        selectedColor === color 
                          ? "bg-streetwear-purple hover:bg-streetwear-vivid-purple" 
                          : ""
                      }`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <div className="mb-2 font-medium">Quantity:</div>
                <div className="flex items-center border border-border rounded-md w-fit">
                  <Button 
                    variant="ghost"
                    size="icon"
                    onClick={decrementQuantity}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-10 text-center">{quantity}</span>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={incrementQuantity}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button 
                  size="lg" 
                  className="flex items-center gap-2 flex-1 bg-streetwear-purple hover:bg-streetwear-vivid-purple"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline" className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Add to Wishlist
                </Button>
              </div>

              {/* Shipping Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm">
                  <Truck className="h-4 w-4 text-streetwear-purple" />
                  <span>Free shipping on orders over $100</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Package className="h-4 w-4 text-streetwear-purple" />
                  <span>30 days easy return</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="container mx-auto px-4 py-8 border-t border-border">
          <Tabs defaultValue="details">
            <TabsList className="w-full grid grid-cols-3 mb-8">
              <TabsTrigger value="details">Product Details</TabsTrigger>
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="space-y-4">
              <h2 className="text-xl font-semibold">Product Details</h2>
              <p>{product.description}</p>
              <p>The {product.name} is designed for versatility, perfect for casual streetwear looks or active urban exploration. Its technical fabric provides comfort while maintaining style, embodying the brand's commitment to functional fashion.</p>
            </TabsContent>
            
            <TabsContent value="specs" className="space-y-4">
              <h2 className="text-xl font-semibold">Specifications</h2>
              <ul className="list-disc pl-5 space-y-1">
                {product.specs.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </TabsContent>
            
            <TabsContent value="reviews" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Reviews</h2>
                <Button className="bg-streetwear-purple hover:bg-streetwear-vivid-purple">Write a Review</Button>
              </div>
              <p className="text-muted-foreground">Customer reviews coming soon.</p>
            </TabsContent>
          </Tabs>
        </section>
        
        {/* Related Products */}
        <section className="py-12 border-t border-border">
          <div className="container mx-auto px-4">
            <h2 className="section-title">You May Also Like</h2>
            <FeaturedProducts />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
