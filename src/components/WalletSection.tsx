
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, Shield, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WalletSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Secure <span className="gradient-text">Wallet</span> Solutions
          </h2>
          <p className="text-muted-foreground">
            Store and manage your Aether Coin with our secure, eco-conscious wallet solution. 
            Built with both security and sustainability in mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <div className="space-y-6">
              <Card className="border-forest-100 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-forest-600" />
                    Enhanced Security
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    Multi-factor authentication and biometric verification ensure your assets
                    remain secure while providing ease of access.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="border-forest-100 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Download className="h-5 w-5 text-forest-600" />
                    Seamless Transactions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    Effortlessly send, receive, and track your Aether Coin with a user-friendly
                    interface designed for both beginners and experienced users.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-forest-600 hover:bg-forest-700 text-white" size="lg" asChild>
                  <Link to="/wallet">
                    <Wallet className="mr-2 h-4 w-4" />
                    Launch Wallet
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-forest-300 text-forest-700">
                  Learn More
                </Button>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <div className="relative">
              <div className="glass-card-forest rounded-xl overflow-hidden p-1">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg overflow-hidden">
                  <div className="wallet-header bg-forest-600 px-4 py-3 text-white flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Wallet className="h-5 w-5" />
                      <span className="font-medium">Aether Wallet</span>
                    </div>
                    <div className="text-sm opacity-80">v1.2.0</div>
                  </div>
                  
                  <div className="px-4 py-6">
                    <div className="text-sm text-muted-foreground mb-2">Current Balance</div>
                    <div className="text-3xl font-bold text-forest-800 mb-1">1,245.83 ATC</div>
                    <div className="text-forest-600 font-medium mb-6">$90.70 USD</div>
                    
                    <div className="flex gap-2 mb-4">
                      <Button size="sm" className="bg-forest-600 hover:bg-forest-700 text-white">Send</Button>
                      <Button size="sm" className="bg-forest-600 hover:bg-forest-700 text-white">Receive</Button>
                      <Button size="sm" variant="outline" className="border-forest-300 text-forest-700">Swap</Button>
                    </div>
                    
                    <div className="space-y-3 mt-6">
                      <div className="text-sm font-medium mb-2">Recent Transactions</div>
                      <div className="flex justify-between items-center py-2 border-b border-muted">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-forest-100 flex items-center justify-center">
                            <span className="text-xs text-forest-600">↑</span>
                          </div>
                          <div>
                            <div className="text-sm font-medium">Sent ATC</div>
                            <div className="text-xs text-muted-foreground">April 5, 2025</div>
                          </div>
                        </div>
                        <div className="text-sm font-medium text-red-500">-42.5 ATC</div>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-muted">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-forest-100 flex items-center justify-center">
                            <span className="text-xs text-forest-600">↓</span>
                          </div>
                          <div>
                            <div className="text-sm font-medium">Received ATC</div>
                            <div className="text-xs text-muted-foreground">April 3, 2025</div>
                          </div>
                        </div>
                        <div className="text-sm font-medium text-green-500">+128.7 ATC</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 inset-0 blur-2xl opacity-20 bg-forest-300 rounded-full transform -translate-x-1/4 translate-y-1/4 animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WalletSection;
