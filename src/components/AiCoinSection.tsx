
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Cpu, Database, Brain, CircleDollarSign, Coins, Sparkles, ArrowUpRight, Code, BrainCircuit } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const aiDistribution = [
  { name: 'Training Rewards', value: 45, color: '#6b21a8' },
  { name: 'Developer Fund', value: 20, color: '#9333ea' },
  { name: 'Ecosystem Growth', value: 15, color: '#a855f7' },
  { name: 'Community Rewards', value: 10, color: '#c084fc' },
  { name: 'Reserve Pool', value: 10, color: '#d8b4fe' }
];

const useCases = [
  {
    title: "LLM Training",
    description: "Explore how contributed compute could be tracked in a future governed network",
    icon: <Brain className="h-8 w-8 text-purple-600" />
  },
  {
    title: "AI Compute Resources",
    description: "Model how GPU/CPU resources might be measured before any reward system exists",
    icon: <Cpu className="h-8 w-8 text-purple-600" />
  },
  {
    title: "Model Validation",
    description: "Research human-reviewed validation flows for future model releases",
    icon: <BrainCircuit className="h-8 w-8 text-purple-600" />
  },
  {
    title: "Data Curation",
    description: "Prototype consent-first data curation and quality review workflows",
    icon: <Database className="h-8 w-8 text-purple-600" />
  }
];

const AiCoinSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="text-purple-600">AICoin</span> (ICON)
          </h2>
          <p className="text-muted-foreground">
            A research token concept for a future governed AI training network. This prototype models how compute, validation, and data stewardship could be represented before any production reward system exists.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-purple-100">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Token Distribution</CardTitle>
                <CircleDollarSign className="h-6 w-6 text-purple-600" />
              </div>
              <CardDescription>Allocation of the 500M ICON total supply</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={aiDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      fill="#8884d8"
                      paddingAngle={2}
                      dataKey="value"
                      label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {aiDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Legend verticalAlign="bottom" height={36} />
                    <Tooltip formatter={(value) => [`${value}%`, 'Allocation']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 mt-6 gap-4">
                <div className="flex flex-col items-center bg-purple-50 p-3 rounded-lg">
                  <Coins className="h-5 w-5 text-purple-600 mb-1" />
                  <span className="text-xs text-muted-foreground">Total Supply</span>
                  <span className="font-bold text-purple-700">500M ICON</span>
                </div>
                <div className="flex flex-col items-center bg-purple-50 p-3 rounded-lg">
                  <CircleDollarSign className="h-5 w-5 text-purple-600 mb-1" />
                  <span className="text-xs text-muted-foreground">Initial Price</span>
                  <span className="font-bold text-purple-700">$0.015</span>
                </div>
                <div className="flex flex-col items-center bg-purple-50 p-3 rounded-lg">
                  <Sparkles className="h-5 w-5 text-purple-600 mb-1" />
                  <span className="text-xs text-muted-foreground">Token Utility</span>
                  <span className="font-bold text-purple-700">AI Training</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-purple-100">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>AICoin Mining Metrics</CardTitle>
                <Cpu className="h-6 w-6 text-purple-600" />
              </div>
              <CardDescription>Understanding the ICON proof of training model</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-b pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">Reward Rate</h3>
                    <span className="text-sm bg-purple-50 px-2 py-1 rounded text-purple-700">
                      Dynamic
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">Based on your GPU/CPU contribution and network demand</p>
                </div>
                <div className="border-b pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">Minimum Requirements</h3>
                    <span className="text-sm bg-purple-50 px-2 py-1 rounded text-purple-700">
                      8GB VRAM
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">Modern GPU with at least 8GB VRAM or equivalent CPU resources</p>
                </div>
                <div className="border-b pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">Verification Method</h3>
                    <span className="text-sm bg-purple-50 px-2 py-1 rounded text-purple-700">
                      Proof of Training
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">Verified contributions to model training validated on-chain</p>
                </div>
                <div className="border-b pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">Payment Schedule</h3>
                    <span className="text-sm bg-purple-50 px-2 py-1 rounded text-purple-700">
                      Daily
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">Concept metrics shown for research modeling only</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="border-purple-100 mb-16">
          <CardHeader>
            <CardTitle>ICON Token Utility</CardTitle>
            <CardDescription>How ICON powers our decentralized AI training network</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex flex-col p-4 bg-purple-50 rounded-lg">
                  <div className="mb-3">{useCase.icon}</div>
                  <h3 className="font-medium mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-purple-100">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Start Mining ICON</CardTitle>
                <Code className="h-6 w-6 text-purple-600" />
              </div>
              <CardDescription>Join our decentralized AI training network</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Review how a future hardware contribution flow could work before any production network or token reward is active.
                  Follow our simple setup guide to get started.
                </p>
                <div className="grid grid-cols-1 gap-2 mt-4">
                  <Button className="bg-purple-600 hover:bg-purple-700 w-full">
                    Download Mining Software
                  </Button>
                  <Button variant="outline" className="border-purple-200 text-purple-700 w-full">
                    View Setup Guide
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-purple-100">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Research Ecosystem</CardTitle>
                <ArrowUpRight className="h-6 w-6 text-purple-600" />
              </div>
              <CardDescription>Understanding how AetherCoin and ICON research relate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-purple-700">ICON (AICoin)</span> models how processing-power contributions could be represented in a governed research network.
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-forest-600">Biozoe coins</span>, including Biozoe Coin and AetherCoin, depend on the future Circleunchain system.
                </p>
                <div className="grid grid-cols-1 gap-2 mt-4">
                  <Button variant="outline" className="border-purple-200 text-purple-700 w-full" asChild>
                    <Link to="/tokenomics">Learn About Circleunchain</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AiCoinSection;
