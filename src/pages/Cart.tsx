
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";

// Sample cart data
const cartItems = [
  {
    id: "1",
    name: "Urban Tech Hoodie",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    quantity: 1,
    size: "L",
    color: "Black"
  },
  {
    id: "3",
    name: "Metro Cargo Pants",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    quantity: 2,
    size: "M",
    color: "Gray"
  }
];

const Cart: React.FC = () => {
  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 100 ? 0 : 10;
  const total = subtotal + shipping;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
          
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-lg p-6">
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex flex-col sm:flex-row gap-4 py-4 border-b border-border last:border-0">
                        {/* Product Image */}
                        <div className="flex-shrink-0">
                          <Link to={`/product/${item.id}`}>
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-24 h-24 object-cover object-center rounded-md"
                            />
                          </Link>
                        </div>
                        
                        {/* Product Info */}
                        <div className="flex-grow flex flex-col sm:flex-row justify-between">
                          <div>
                            <Link to={`/product/${item.id}`} className="font-medium hover:text-streetwear-purple">
                              {item.name}
                            </Link>
                            <div className="text-sm text-muted-foreground mt-1">
                              Size: {item.size} | Color: {item.color}
                            </div>
                            <div className="font-medium mt-1">
                              ${item.price.toFixed(2)}
                            </div>
                          </div>
                          
                          {/* Quantity controls and remove */}
                          <div className="flex flex-col sm:items-end gap-3 mt-3 sm:mt-0">
                            {/* Quantity */}
                            <div className="flex items-center border border-border rounded-md">
                              <Button 
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button 
                                variant="ghost" 
                                size="icon"
                                className="h-8 w-8"
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            
                            {/* Remove */}
                            <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 p-0 h-auto">
                              <Trash2 className="h-4 w-4 mr-1" /> Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div>
                <div className="bg-card rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    {shipping > 0 && (
                      <div className="text-sm text-muted-foreground">
                        Spend ${(100 - subtotal).toFixed(2)} more to get free shipping
                      </div>
                    )}
                    <div className="border-t border-border pt-3 mt-3">
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6 bg-streetwear-purple hover:bg-streetwear-vivid-purple">
                    Proceed to Checkout
                  </Button>
                  
                  <div className="mt-6">
                    <h3 className="font-medium mb-2">We Accept</h3>
                    <div className="flex gap-2">
                      <div className="bg-secondary p-2 rounded w-12">Visa</div>
                      <div className="bg-secondary p-2 rounded w-12">MC</div>
                      <div className="bg-secondary p-2 rounded w-12">Amex</div>
                      <div className="bg-secondary p-2 rounded w-12">PayPal</div>
                    </div>
                  </div>
                </div>
                
                <Link to="/shop">
                  <Button variant="outline" className="mt-4 w-full">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="mb-6 flex justify-center">
                <ShoppingBag className="h-16 w-16 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Link to="/shop">
                <Button className="bg-streetwear-purple hover:bg-streetwear-vivid-purple">
                  Start Shopping
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
