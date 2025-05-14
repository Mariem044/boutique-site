
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Account = () => {
  const [user, setUser] = useState({
    name: "Alex Johnson",
    email: "alex@example.com",
    avatarUrl: ""
  });
  
  // Mock orders for demonstration
  const orders = [
    { id: "ORD-1234", date: "2023-05-10", status: "Delivered", total: "$149.99" },
    { id: "ORD-5678", date: "2023-04-22", status: "Processing", total: "$89.99" },
    { id: "ORD-9012", date: "2023-03-15", status: "Delivered", total: "$219.99" },
  ];
  
  // Mock addresses
  const addresses = [
    { 
      id: 1, 
      type: "Shipping", 
      address: "123 Street Rd",
      city: "New York",
      state: "NY",
      zip: "10001",
      isDefault: true
    },
    { 
      id: 2, 
      type: "Billing", 
      address: "456 Avenue St",
      city: "Los Angeles",
      state: "CA",
      zip: "90001",
      isDefault: false
    }
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto py-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold">My Account</h1>
          <p className="text-muted-foreground">Manage your account details and preferences</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* User Profile Section */}
          <Card className="md:col-span-1">
            <CardHeader className="text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src={user.avatarUrl} />
                <AvatarFallback className="bg-streetwear-purple text-white text-xl">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <CardTitle>{user.name}</CardTitle>
              <CardDescription>{user.email}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full mb-2">Edit Profile</Button>
              <Button variant="outline" className="w-full text-destructive">Sign Out</Button>
            </CardContent>
          </Card>
          
          {/* Main Content */}
          <Card className="md:col-span-3">
            <Tabs defaultValue="orders">
              <CardHeader>
                <TabsList className="grid grid-cols-4 w-full">
                  <TabsTrigger value="orders">Orders</TabsTrigger>
                  <TabsTrigger value="addresses">Addresses</TabsTrigger>
                  <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
              </CardHeader>
              
              <CardContent>
                {/* Orders Tab */}
                <TabsContent value="orders" className="space-y-4">
                  <h3 className="text-xl font-semibold">Your Orders</h3>
                  
                  {orders.length > 0 ? (
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <Card key={order.id}>
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-center">
                              <CardTitle className="text-base">Order #{order.id}</CardTitle>
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                order.status === "Delivered" 
                                  ? "bg-green-100 text-green-800" 
                                  : "bg-yellow-100 text-yellow-800"
                              }`}>
                                {order.status}
                              </span>
                            </div>
                            <CardDescription>{order.date}</CardDescription>
                          </CardHeader>
                          <CardFooter className="flex justify-between pt-2">
                            <span className="font-medium">{order.total}</span>
                            <Button variant="outline" size="sm">View Details</Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground mb-4">You haven't placed any orders yet</p>
                      <Button asChild>
                        <a href="/shop">Start Shopping</a>
                      </Button>
                    </div>
                  )}
                </TabsContent>
                
                {/* Addresses Tab */}
                <TabsContent value="addresses" className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Your Addresses</h3>
                    <Button size="sm">Add New Address</Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {addresses.map((address) => (
                      <Card key={address.id}>
                        <CardHeader>
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-base">{address.type} Address</CardTitle>
                            {address.isDefault && (
                              <span className="bg-secondary px-2 py-1 rounded-full text-xs">
                                Default
                              </span>
                            )}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p>{address.address}</p>
                          <p>{address.city}, {address.state} {address.zip}</p>
                        </CardContent>
                        <CardFooter className="flex justify-between gap-2">
                          <Button variant="outline" size="sm" className="flex-1">Edit</Button>
                          <Button variant="outline" size="sm" className="flex-1 text-destructive">
                            Remove
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                {/* Wishlist Tab */}
                <TabsContent value="wishlist" className="text-center py-8">
                  <h3 className="text-xl font-semibold mb-4">Your Wishlist</h3>
                  <p className="text-muted-foreground mb-4">You don't have any items in your wishlist yet</p>
                  <Button asChild>
                    <a href="/shop">Browse Products</a>
                  </Button>
                </TabsContent>
                
                {/* Settings Tab */}
                <TabsContent value="settings" className="space-y-6">
                  <h3 className="text-xl font-semibold">Account Settings</h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" value={user.name} />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" value={user.email} />
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                    
                    <Button>Save Changes</Button>
                  </div>
                </TabsContent>
              </CardContent>
            </Tabs>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Account;
