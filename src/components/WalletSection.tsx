
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, Wallet, ArrowDownLeft, History, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Link } from "react-router-dom";

// Projected milestones - not actual data
const projectedTransactions = [
  { type: "receive", amount: "12.45 AEC", from: "Ecosystem Rewards", date: "Post-Launch", status: "projected" },
  { type: "send", amount: "5.00 AEC", to: "Rainforest Alliance", date: "Post-Launch", status: "projected" },
  { type: "receive", amount: "8.20 AEC", from: "Carbon Credits", date: "Post-Launch", status: "projected" },
  { type: "send", amount: "3.75 AEC", to: "Ocean Cleanup", date: "Post-Launch", status: "projected" }
];

const WalletSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Your <span className="gradient-text">Eco-Wallet</span>
          </h2>
          <p className="text-muted-foreground">
            Coming soon: Manage your Aether Coins and track your contribution to a sustainable future.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mb-8">
          <Alert variant="warning" className="bg-amber-50 border-amber-200">
            <AlertCircle className="h-4 w-4 text-amber-600" />
            <AlertTitle className="text-amber-800">Presale Phase</AlertTitle>
            <AlertDescription className="text-amber-700">
              Both AEC and ICON tokens are currently in presale phase and have not yet launched. 
              The information below represents projected milestones, not actual wallet data.
            </AlertDescription>
          </Alert>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="balance" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="balance">Projected Balance</TabsTrigger>
              <TabsTrigger value="transactions">Future Transactions</TabsTrigger>
              <TabsTrigger value="impact">Potential Impact</TabsTrigger>
            </TabsList>
            
            <TabsContent value="balance">
              <Card className="border-forest-100">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">Projected Balance</CardTitle>
                      <CardDescription>Wallet functionality coming after launch</CardDescription>
                    </div>
                    <Wallet className="h-8 w-8 text-forest-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center py-8">
                    <div className="text-5xl font-bold text-forest-700 mb-2">87.34 AEC</div>
                    <div className="text-forest-900/60 mb-2">≈ $6.35 USD (Projected)</div>
                    <div className="text-sm text-muted-foreground mb-6">Sample data - actual balances will be available after launch</div>
                    
                    <div className="flex gap-4 w-full max-w-md">
                      <Button className="flex-1 bg-forest-600 hover:bg-forest-700" disabled>
                        <ArrowUpRight className="mr-2 h-4 w-4" /> Send (Coming Soon)
                      </Button>
                      <Button className="flex-1" variant="outline" disabled>
                        <ArrowDownLeft className="mr-2 h-4 w-4" /> Receive (Coming Soon)
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/50 border-t">
                  <div className="w-full">
                    <p className="text-sm text-center text-muted-foreground">
                      <Link to="/tokenomics" className="text-forest-700 hover:underline">
                        View Tokenomics
                      </Link>
                      {" "}|{" "}
                      <Link to="/aicon" className="text-forest-700 hover:underline">
                        Learn About AICoin
                      </Link>
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="transactions">
              <Card className="border-forest-100">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Example Transactions</CardTitle>
                      <CardDescription>Projected functionality after launch</CardDescription>
                    </div>
                    <History className="h-6 w-6 text-forest-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {projectedTransactions.map((tx, index) => (
                      <div key={index} className="flex items-center justify-between border-b pb-4 last:border-0">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-full ${tx.type === 'receive' ? 'bg-forest-100 text-forest-700' : 'bg-muted text-muted-foreground'}`}>
                            {tx.type === 'receive' ? <ArrowDownLeft className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                          </div>
                          <div>
                            <div className="font-medium">{tx.type === 'receive' ? 'Receive from' : 'Send to'}</div>
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
                  <div className="mt-6 text-center text-sm text-muted-foreground">
                    This is sample data to illustrate potential transaction types after launch.
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="impact">
              <Card className="border-forest-100">
                <CardHeader>
                  <CardTitle>Projected Environmental Impact</CardTitle>
                  <CardDescription>Target milestones after launch</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="p-4 bg-forest-50 rounded-lg text-center">
                      <div className="text-3xl font-bold text-forest-700 mb-1">12.5</div>
                      <div className="text-sm text-forest-600">Trees Planted (Goal)</div>
                    </div>
                    <div className="p-4 bg-forest-50 rounded-lg text-center">
                      <div className="text-3xl font-bold text-forest-700 mb-1">4.2</div>
                      <div className="text-sm text-forest-600">Tons CO₂ Offset (Goal)</div>
                    </div>
                    <div className="p-4 bg-forest-50 rounded-lg text-center">
                      <div className="text-3xl font-bold text-forest-700 mb-1">320</div>
                      <div className="text-sm text-forest-600">m² Land Protected (Goal)</div>
                    </div>
                  </div>
                  
                  <div className="text-center py-4">
                    <p className="text-muted-foreground mb-4">
                      These are our projected impact goals for future Aether Coin holdings once launched.
                      Join our presale to help turn these projections into reality.
                    </p>
                    <Button variant="outline" className="border-forest-300 text-forest-700" asChild>
                      <Link to="/tokenomics">View Tokenomics</Link>
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
