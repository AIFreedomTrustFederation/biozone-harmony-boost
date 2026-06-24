
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Database, Link as LinkIcon, Server, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const ApiPage = () => {
  const [copied, setCopied] = useState(false);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Code copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container py-12 space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold font-display text-forest-800">
              AetherCoin Circleunchain API Research
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Review concept API shapes for future Circleunchain stewardship records. These examples are documentation prototypes, not live production endpoints.
            </p>
          </div>
          
          <Tabs defaultValue="overview" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="authentication">Authentication</TabsTrigger>
              <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
              <TabsTrigger value="examples">Code Examples</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Server className="h-5 w-5 text-forest-600" />
                    API Overview
                  </CardTitle>
                  <CardDescription>
                    These API examples describe possible future access patterns for wallet, stewardship, and model-workflow research.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Proposed base path</h3>
                    <div className="bg-muted p-3 rounded-md font-mono text-sm">
                      https://api.aifreedomtrust.com/v1
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Core Features</h3>
                    <ul className="space-y-2 list-disc pl-6">
                      <li>Concept access patterns for future Circleunchain stewardship records</li>
                      <li>Research flows for distributed model-work coordination</li>
                      <li>Prototype transaction and stewardship record shapes</li>
                      <li>Wallet-interface and commitment-model examples</li>
                      <li>Smart-contract interaction concepts requiring future review</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="h-5 w-5 text-forest-600" />
                      Node Network
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      This section models future node-network metrics. It does not represent a live production network.
                    </p>
                    <div className="grid gap-2 text-sm">
                      <div className="flex justify-between gap-4">
                        <span>Network uptime</span>
                        <span className="font-medium text-forest-700">Not live</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>Active nodes</span>
                        <span className="font-medium text-forest-700">Not deployed</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>Processing capacity</span>
                        <span className="font-medium text-forest-700">Requires implementation evidence</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5 text-forest-600" />
                      Integration Options
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Candidate integration shapes that require future implementation and review.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-forest-500"></span>
                        REST API concept
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-forest-500"></span>
                        GraphQL endpoint concept
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-forest-500"></span>
                        Event-stream concept
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-forest-500"></span>
                        SDK interface concept
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="authentication" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-forest-600" />
                    API Authentication
                  </CardTitle>
                  <CardDescription>
                    Future authenticated requests require implementation and review
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">API Key Concept</h3>
                    <p className="text-muted-foreground mb-4">
                      Production API access is not active in this prototype. The header below shows the intended shape for future authenticated requests.
                    </p>
                    <div className="bg-muted p-3 rounded-md font-mono text-sm">
                      Authorization: Bearer YOUR_API_KEY
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">API access status</h3>
                    <p className="text-muted-foreground">
                      API keys are not issued by this prototype. Use the public repositories
                      to review the concept and track future implementation work.
                    </p>
                    <Button className="bg-forest-600 hover:bg-forest-700" asChild>
                      <a href="https://github.com/AIFreedomTrustFederation/Aether_Coin_biozonecurrency" target="_blank" rel="noopener noreferrer">Review Protocol Repository</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-forest-600" />
                    Example Authentication
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
                    <pre>{`fetch('https://api.aifreedomtrust.com/v1/wallet/balance', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`}</pre>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <Button variant="outline" onClick={() => copyCode(`fetch('https://api.aifreedomtrust.com/v1/wallet/balance', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`)}>
                    {copied ? "Copied!" : "Copy Code"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="endpoints" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LinkIcon className="h-5 w-5 text-forest-600" />
                    API Endpoints
                  </CardTitle>
                  <CardDescription>
                    Proposed endpoints for future Circleunchain review
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Endpoint</th>
                          <th className="text-left py-3 px-4">Method</th>
                          <th className="text-left py-3 px-4">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-mono text-sm">/v1/coin/data</td>
                          <td className="py-3 px-4">GET</td>
                          <td className="py-3 px-4">Concept route for future coin metadata after review</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-mono text-sm">/v1/wallet/{'{address}'}</td>
                          <td className="py-3 px-4">GET</td>
                          <td className="py-3 px-4">Get concept wallet information including modeled balances and commitments</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-mono text-sm">/v1/transactions/{'{address}'}</td>
                          <td className="py-3 px-4">GET</td>
                          <td className="py-3 px-4">Review concept stewardship record history for a participant</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-mono text-sm">/v1/transactions</td>
                          <td className="py-3 px-4">POST</td>
                          <td className="py-3 px-4">Concept route for submitting future stewardship records</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-mono text-sm">/v1/staking/{'{address}'}</td>
                          <td className="py-3 px-4">GET</td>
                          <td className="py-3 px-4">Get modeled commitment information for a wallet</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-mono text-sm">/v1/llm/train</td>
                          <td className="py-3 px-4">POST</td>
                          <td className="py-3 px-4">Concept route for future model-work coordination</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-mono text-sm">/v1/llm/inference</td>
                          <td className="py-3 px-4">POST</td>
                          <td className="py-3 px-4">Concept route for future reviewed inference workflows</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-mono text-sm">/v1/llm/models</td>
                          <td className="py-3 px-4">GET</td>
                          <td className="py-3 px-4">Concept route for future reviewed model records</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="examples" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-forest-600" />
                    JavaScript/TypeScript Examples
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-base font-medium mb-2">Review Concept Wallet Record</h3>
                    <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
                      <pre>{`const getWalletBalance = async (address) => {
  const response = await fetch(
    \`https://api.aifreedomtrust.com/v1/wallet/\${address}\`, 
    {
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY'
      }
    }
  );
  return await response.json();
};

// Design-sketch usage only
getWalletBalance('0x123abc...')
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`}</pre>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-base font-medium mb-2">Review Model-Work Request Shape</h3>
                    <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
                      <pre>{`const submitTrainingJob = async (trainingData, modelConfig) => {
  const response = await fetch(
    'https://api.aifreedomtrust.com/v1/llm/train', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'
      },
      body: JSON.stringify({ trainingData, modelConfig })
    }
  );
  return await response.json();
};`}</pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-forest-600" />
                    SDK Concept
                  </CardTitle>
                  <CardDescription>
                    No installable production SDK is published from this prototype.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-base font-medium mb-2">Future package boundary</h3>
                    <p className="text-muted-foreground">
                      A real SDK package should be linked only after a package repository,
                      release artifact, version, and validation record exist.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-base font-medium mb-2">Concept client shape</h3>
                    <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
                      <pre>{`type CircleunchainClient = {
  reviewParticipant(address: string): Promise<ConceptParticipantRecord>;
  listStewardshipRecords(address: string): Promise<ConceptStewardshipRecord[]>;
};

// This is a design sketch, not an installable SDK or live endpoint.`}</pre>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <Button asChild>
                    <a href="https://github.com/AIFreedomTrustFederation/Aether_Coin_biozonecurrency" target="_blank" rel="noopener noreferrer">Review Protocol Repository</a>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-forest-800">Ready to Review the Concept?</h2>
            <p className="text-muted-foreground">
              Review the public protocol repository and concept model before any production service is offered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button 
                size="lg" 
                className="bg-forest-600 hover:bg-forest-700"
                asChild
              >
                <a href="https://github.com/AIFreedomTrustFederation/Aether_Coin_biozonecurrency" target="_blank" rel="noopener noreferrer">Review Protocol Repository</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
              >
                <Link to="/tokenomics">Read Concept Model</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApiPage;
