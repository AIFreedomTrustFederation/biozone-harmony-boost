
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Hourglass, ShieldCheck, Coins, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PresaleSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Join the <span className="gradient-text">Research List</span>
          </h2>
          <p className="text-muted-foreground">
            Follow the <Link to="/tokenomics" className="text-forest-600 hover:underline">Aether Coin</Link> concept as it develops. This prototype does not offer a live token sale, investment product, or wallet custody service.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="contribute" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="contribute">How to Follow</TabsTrigger>
              <TabsTrigger value="benefits">Research Areas</TabsTrigger>
              <TabsTrigger value="impact">Future Impact</TabsTrigger>
            </TabsList>
            
            <TabsContent value="contribute">
              <Card className="border-forest-100">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">Follow the Research</CardTitle>
                      <CardDescription>Simple steps to track the concept responsibly</CardDescription>
                    </div>
                    <Hourglass className="h-8 w-8 text-forest-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6 py-4">
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-100 flex items-center justify-center text-forest-700 font-semibold">1</div>
                      <div>
                        <h3 className="font-medium text-lg">Register Interest</h3>
                        <p className="text-muted-foreground">Join the research list for updates. No payment, KYC, or token allocation is collected in this prototype.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-100 flex items-center justify-center text-forest-700 font-semibold">2</div>
                      <div>
                        <h3 className="font-medium text-lg">Review the Concept</h3>
                        <p className="text-muted-foreground">Read the tokenomics and stewardship assumptions before treating any idea as more than research.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-100 flex items-center justify-center text-forest-700 font-semibold">3</div>
                      <div>
                        <h3 className="font-medium text-lg">Wait for Verified Releases</h3>
                        <p className="text-muted-foreground">Production wallet, token, or sale claims require separate documentation, legal review, and security review.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1 bg-forest-600 hover:bg-forest-700">
                      Register Interest <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button className="flex-1" variant="outline" asChild>
                      <Link to="/tokenomics">View Tokenomics</Link>
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/50 border-t">
                  <div className="w-full flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Current Stage:</span>
                    <span className="font-medium text-forest-700">Concept Review</span>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="benefits">
              <Card className="border-forest-100">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Research Areas</CardTitle>
                      <CardDescription>Areas to validate before any production release</CardDescription>
                    </div>
                    <ShieldCheck className="h-6 w-6 text-forest-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col p-4 bg-forest-50 rounded-lg">
                      <Coins className="h-6 w-6 text-forest-600 mb-2" />
                      <h3 className="font-medium mb-1">Token Model</h3>
                      <p className="text-sm text-muted-foreground">Define supply, allocation, and utility assumptions without implying price or return.</p>
                    </div>
                    
                    <div className="flex flex-col p-4 bg-forest-50 rounded-lg">
                      <Users className="h-6 w-6 text-forest-600 mb-2" />
                      <h3 className="font-medium mb-1">Governance Model</h3>
                      <p className="text-sm text-muted-foreground">Explore how stewardship decisions could be made transparently and fairly.</p>
                    </div>
                    
                    <div className="flex flex-col p-4 bg-forest-50 rounded-lg">
                      <ShieldCheck className="h-6 w-6 text-forest-600 mb-2" />
                      <h3 className="font-medium mb-1">Incentive Design</h3>
                      <p className="text-sm text-muted-foreground">Research non-extractive incentives tied to measurable stewardship outcomes.</p>
                    </div>
                    
                    <div className="flex flex-col p-4 bg-forest-50 rounded-lg">
                      <Hourglass className="h-6 w-6 text-forest-600 mb-2" />
                      <h3 className="font-medium mb-1">Release Boundaries</h3>
                      <p className="text-sm text-muted-foreground">Separate concepts, prototypes, audits, and production releases clearly.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="impact">
              <Card className="border-forest-100">
                <CardHeader>
                  <CardTitle>Projected Environmental Impact</CardTitle>
                  <CardDescription>Illustrative goals that require validation before launch</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="p-4 bg-forest-50 rounded-lg text-center">
                      <div className="text-3xl font-bold text-forest-700 mb-1">100K+</div>
                      <div className="text-sm text-forest-600">Tree-Planting Scenario</div>
                    </div>
                    <div className="p-4 bg-forest-50 rounded-lg text-center">
                      <div className="text-3xl font-bold text-forest-700 mb-1">50K</div>
                      <div className="text-sm text-forest-600">Tons CO₂ to Offset</div>
                    </div>
                    <div className="p-4 bg-forest-50 rounded-lg text-center">
                      <div className="text-3xl font-bold text-forest-700 mb-1">5K</div>
                      <div className="text-sm text-forest-600">Hectares to Protect</div>
                    </div>
                  </div>
                  
                  <div className="text-center py-4">
                    <p className="text-muted-foreground mb-4">
                      These figures are placeholders for research modeling. No live contribution or token sale is active in this prototype.
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

export default PresaleSection;
