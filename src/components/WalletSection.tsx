
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wallet, ArrowRight, Clock, BarChart3, Send, Plus, Download } from "lucide-react";
import { Link } from "react-router-dom";

const transactions = [
  { id: 1, type: "Recorded", amount: "+2.5 Biozoe", from: "Circle Node A", date: "Example record A" },
  { id: 2, type: "Committed", amount: "-5.0 Biozoe", to: "Ecosystem Pool", date: "Example record B" },
  { id: 3, type: "Shared", amount: "-1.2 Biozoe", to: "Circle Node B", date: "Example record C" },
];

const WalletSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="gradient-text">Aether Wallet</span> Interface
          </h2>
          <p className="text-muted-foreground">
            Explore a concept participation interface for <Link to="/tokenomics" className="text-forest-600 hover:underline">AetherCoin</Link>. This prototype does not provide custody, transaction signing, or production wallet security.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-forest-100 overflow-hidden">
            <CardHeader className="bg-forest-50 border-b border-forest-100">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Aether Wallet</CardTitle>
                  <CardDescription>Illustrative interface only. No connected wallet, live balance, exchange rate, or yield.</CardDescription>
                </div>
                <Wallet className="h-8 w-8 text-forest-600" />
              </div>
            </CardHeader>
            
            <Tabs defaultValue="dashboard">
              <div className="px-6 pt-6">
                <TabsList className="grid grid-cols-3">
                  <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                  <TabsTrigger value="transactions">Sample Activity</TabsTrigger>
                  <TabsTrigger value="stake">Commitment Models</TabsTrigger>
                </TabsList>
              </div>
              
              <CardContent className="p-6">
                <TabsContent value="dashboard" className="space-y-6">
                  <div className="text-center py-6">
                    <p className="text-sm text-muted-foreground mb-1">Illustrative Balance (not live)</p>
                    <h3 className="text-4xl font-bold text-forest-800">45.28 Biozoe (example)</h3>
                    <p className="text-sm text-forest-600">No verified fiat price or exchange rate</p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Button variant="outline" disabled className="flex-col h-20 border-forest-200">
                      <Send className="h-4 w-4 mb-1" />
                      <span>Send</span>
                    </Button>
                    <Button variant="outline" disabled className="flex-col h-20 border-forest-200">
                      <Download className="h-4 w-4 mb-1" />
                      <span>Receive</span>
                    </Button>
                    <Button variant="outline" disabled className="flex-col h-20 border-forest-200">
                      <Plus className="h-4 w-4 mb-1" />
                      <span>Buy</span>
                    </Button>
                    <Button variant="outline" disabled className="flex-col h-20 border-forest-200">
                      <BarChart3 className="h-4 w-4 mb-1" />
                      <span>Stake</span>
                    </Button>
                  </div>
                  
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-medium mb-3 flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      Sample Activity (fictional)
                    </h4>
                    <div className="space-y-3">
                      {transactions.slice(0, 2).map((tx) => (
                        <div key={tx.id} className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">{tx.type}</p>
                            <p className="text-xs text-muted-foreground">
                              {tx.from ? `From: ${tx.from}` : `To: ${tx.to}`}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className={`font-medium ${tx.amount.startsWith('+') ? 'text-green-600' : ''}`}>
                              {tx.amount}
                            </p>
                            <p className="text-xs text-muted-foreground">{tx.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="ghost" disabled className="w-full mt-2 text-sm h-8">
                      View all transactions
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="transactions" className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-medium">Fictional Activity History</h3>
                    <div className="border rounded-lg divide-y">
                      {transactions.map((tx) => (
                        <div key={tx.id} className="p-4 flex justify-between items-center">
                          <div>
                            <p className="font-medium">{tx.type}</p>
                            <p className="text-xs text-muted-foreground">
                              {tx.from ? `From: ${tx.from}` : `To: ${tx.to}`}
                            </p>
                            <p className="text-xs text-muted-foreground">{tx.date}</p>
                          </div>
                          <p className={`font-medium ${tx.amount.startsWith('+') ? 'text-green-600' : ''}`}>
                            {tx.amount}
                          </p>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full" variant="outline" disabled>
                      Load More
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="stake" className="space-y-6">
                  <div className="text-center py-4">
                    <h3 className="text-lg font-medium mb-1">Illustrative Commitment (not live)</h3>
                    <p className="text-3xl font-bold text-forest-800">12.5 Biozoe (example)</p>
                    <p className="text-sm text-muted-foreground">No staking service or yield is offered</p>
                  </div>
                  
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-medium mb-3">Commitment Models (illustrative)</h4>
                    <div className="space-y-3">
                      <div className="bg-background rounded border p-3">
                        <div className="flex justify-between mb-2">
                          <h5 className="font-medium">Ecosystem Pool</h5>
                          <span className="text-sm bg-forest-100 px-2 py-0.5 rounded text-forest-700">Concept only</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Model how staking-like commitments could support ecosystem development.
                        </p>
                        <Button size="sm" disabled className="bg-forest-600 hover:bg-forest-700">
                          Not available
                        </Button>
                      </div>
                      
                      <div className="bg-background rounded border p-3">
                        <div className="flex justify-between mb-2">
                          <h5 className="font-medium">Conservation Pool</h5>
                          <span className="text-sm bg-forest-100 px-2 py-0.5 rounded text-forest-700">Concept only</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Research stronger recognition for supporting direct conservation efforts.
                        </p>
                        <Button size="sm" disabled className="bg-forest-600 hover:bg-forest-700">
                          Not available
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </CardContent>
            </Tabs>
          </Card>
          
          <div className="mt-8 text-center">
            <Button className="bg-forest-600 hover:bg-forest-700" asChild>
              <Link to="/wallet">
                Explore Wallet Concept <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WalletSection;
