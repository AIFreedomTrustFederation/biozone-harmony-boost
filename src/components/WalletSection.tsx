
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, Wallet, ArrowDownLeft, History } from "lucide-react";

const transactions = [
  { type: "receive", amount: "12.45 AEC", from: "Ecosystem Rewards", date: "Apr 5, 2025", status: "completed" },
  { type: "send", amount: "5.00 AEC", to: "Rainforest Alliance", date: "Apr 3, 2025", status: "completed" },
  { type: "receive", amount: "8.20 AEC", from: "Carbon Credits", date: "Mar 29, 2025", status: "completed" },
  { type: "send", amount: "3.75 AEC", to: "Ocean Cleanup", date: "Mar 24, 2025", status: "completed" }
];

const WalletSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Your <span className="gradient-text">Eco-Wallet</span>
          </h2>
          <p className="text-muted-foreground">
            Manage your Aether Coins and track your contribution to a sustainable future.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="balance" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="balance">Balance</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="impact">Impact</TabsTrigger>
            </TabsList>
            
            <TabsContent value="balance">
              <Card className="border-forest-100">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">Your Balance</CardTitle>
                      <CardDescription>Connected wallet: 0x8f...3e4f</CardDescription>
                    </div>
                    <Wallet className="h-8 w-8 text-forest-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center py-8">
                    <div className="text-5xl font-bold text-forest-700 mb-2">87.34 AEC</div>
                    <div className="text-forest-900/60 mb-6">≈ $6.35 USD</div>
                    
                    <div className="flex gap-4 w-full max-w-md">
                      <Button className="flex-1 bg-forest-600 hover:bg-forest-700">
                        <ArrowUpRight className="mr-2 h-4 w-4" /> Send
                      </Button>
                      <Button className="flex-1" variant="outline">
                        <ArrowDownLeft className="mr-2 h-4 w-4" /> Receive
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/50 border-t">
                  <div className="w-full flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Staking Rewards:</span>
                    <span className="font-medium text-forest-700">+2.45 AEC weekly</span>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="transactions">
              <Card className="border-forest-100">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Recent Transactions</CardTitle>
                      <CardDescription>Last 30 days</CardDescription>
                    </div>
                    <History className="h-6 w-6 text-forest-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {transactions.map((tx, index) => (
                      <div key={index} className="flex items-center justify-between border-b pb-4 last:border-0">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-full ${tx.type === 'receive' ? 'bg-forest-100 text-forest-700' : 'bg-muted text-muted-foreground'}`}>
                            {tx.type === 'receive' ? <ArrowDownLeft className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                          </div>
                          <div>
                            <div className="font-medium">{tx.type === 'receive' ? 'Received from' : 'Sent to'}</div>
                            <div className="text-sm text-muted-foreground">{tx.type === 'receive' ? tx.from : tx.to}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`font-medium ${tx.type === 'receive' ? 'text-forest-700' : ''}`}>
                            {tx.type === 'receive' ? '+' : '-'}{tx.amount}
                          </div>
                          <div className="text-xs text-muted-foreground">{tx.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="impact">
              <Card className="border-forest-100">
                <CardHeader>
                  <CardTitle>Your Environmental Impact</CardTitle>
                  <CardDescription>Based on your Aether Coin activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="p-4 bg-forest-50 rounded-lg text-center">
                      <div className="text-3xl font-bold text-forest-700 mb-1">12.5</div>
                      <div className="text-sm text-forest-600">Trees Planted</div>
                    </div>
                    <div className="p-4 bg-forest-50 rounded-lg text-center">
                      <div className="text-3xl font-bold text-forest-700 mb-1">4.2</div>
                      <div className="text-sm text-forest-600">Tons CO₂ Offset</div>
                    </div>
                    <div className="p-4 bg-forest-50 rounded-lg text-center">
                      <div className="text-3xl font-bold text-forest-700 mb-1">320</div>
                      <div className="text-sm text-forest-600">m² Land Protected</div>
                    </div>
                  </div>
                  
                  <div className="text-center py-4">
                    <p className="text-muted-foreground mb-4">
                      Your Aether Coin holdings are directly contributing to ecosystem preservation and restoration 
                      efforts around the world.
                    </p>
                    <Button variant="outline" className="border-forest-300 text-forest-700">
                      View Detailed Impact Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default WalletSection;
