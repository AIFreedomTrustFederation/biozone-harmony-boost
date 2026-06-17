
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Circle, Leaf, Shield, Recycle, ChartPie, ChartBar, Sprout } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const circleDistribution = [
  { name: 'Stewardship Pools', value: 40, color: '#4d994d' },
  { name: 'Ecosystem Development', value: 25, color: '#2c7873' },
  { name: 'Governance Review', value: 15, color: '#5c946e' },
  { name: 'Education', value: 10, color: '#80c080' },
  { name: 'Resilience Reserve', value: 10, color: '#6aaa96' }
];

const vesting = [
  { role: 'Stewardship Pools', schedule: 'Concept review before any public participation flow' },
  { role: 'Ecosystem Development', schedule: 'Released through documented project milestones' },
  { role: 'Governance Review', schedule: 'Held until governance, legal, and security review' },
  { role: 'Education', schedule: 'Used for public documentation and community understanding' },
  { role: 'Resilience Reserve', schedule: 'Reserved for future ecological and operational resilience' }
];

const circleUtility = [
  {
    title: "Biozone Protection",
    description: "Research support for conservation of critical ecological zones",
    icon: <Leaf className="h-8 w-8 text-forest-600" />
  },
  {
    title: "Governance",
    description: "Transparent review of stewardship priorities without speculative token governance claims",
    icon: <Shield className="h-8 w-8 text-forest-600" />
  },
  {
    title: "Circle Participation",
    description: "Model non-extractive participation tied to measurable stewardship outcomes",
    icon: <Circle className="h-8 w-8 text-forest-600" />
  },
  {
    title: "Evidence Records",
    description: "Model how ecological evidence could be acknowledged without blockchain or crypto framing",
    icon: <Recycle className="h-8 w-8 text-forest-600" />
  }
];

const TokenomicsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="gradient-text"><Link to="/tokenomics" className="hover:opacity-90">Biozoe</Link></span> Circleunchain Model
          </h2>
          <p className="text-muted-foreground">
            Exploring AetherCoin as a biozoe currency planned for the Circleunchain system.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-forest-100">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Circle Distribution</CardTitle>
                <ChartPie className="h-6 w-6 text-forest-600" />
              </div>
              <CardDescription>Illustrative allocation model for AetherCoin after Circleunchain foundations exist</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={circleDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      fill="#8884d8"
                      paddingAngle={2}
                      dataKey="value"
                      label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {circleDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Legend verticalAlign="bottom" height={36} />
                    <Tooltip formatter={(value) => [`${value}%`, 'Allocation']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 mt-6 gap-4">
                <div className="flex flex-col items-center bg-forest-50 p-3 rounded-lg">
                  <Circle className="h-5 w-5 text-forest-600 mb-1" />
                  <span className="text-xs text-muted-foreground">Modeled Units</span>
                  <span className="font-bold text-forest-700">200M Biozoe</span>
                </div>
                <div className="flex flex-col items-center bg-forest-50 p-3 rounded-lg">
                  <Sprout className="h-5 w-5 text-forest-600 mb-1" />
                  <span className="text-xs text-muted-foreground">Primary Aim</span>
                  <span className="font-bold text-forest-700">Stewardship</span>
                </div>
                <div className="flex flex-col items-center bg-forest-50 p-3 rounded-lg">
                  <Shield className="h-5 w-5 text-forest-600 mb-1" />
                  <span className="text-xs text-muted-foreground">Status</span>
                  <span className="font-bold text-forest-700">Research</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-forest-100">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Release Boundaries</CardTitle>
                <ChartBar className="h-6 w-6 text-forest-600" />
              </div>
              <CardDescription>How concept areas stay separated from production claims</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {vesting.map((item, index) => (
                  <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">{item.role}</h3>
                      <span className="text-sm bg-forest-50 px-2 py-1 rounded text-forest-700">
                        {circleDistribution.find(t => t.name === item.role)?.value}%
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.schedule}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="border-forest-100 mb-16">
          <CardHeader>
            <CardTitle>Circle Utility</CardTitle>
            <CardDescription>How AetherCoin could support stewardship as a biozoe currency without becoming crypto</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {circleUtility.map((utility, index) => (
                <div key={index} className="flex flex-col p-4 bg-forest-50 rounded-lg">
                  <div className="mb-3">{utility.icon}</div>
                  <h3 className="font-medium mb-2">{utility.title}</h3>
                  <p className="text-sm text-muted-foreground">{utility.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center max-w-3xl mx-auto">
          <div className="p-6 bg-forest-50 rounded-lg">
            <Circle className="h-10 w-10 text-forest-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Review the <Link to="/tokenomics" className="text-forest-600 hover:underline">AetherCoin Circleunchain</Link> Concept</h3>
            <p className="text-muted-foreground mb-4">
              This prototype documents concept-stage assumptions only. It is not crypto, not blockchain, not a live sale, not an investment offer, and not a custody service.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-forest-600 hover:bg-forest-700">
                Join Research List
              </Button>
              <Button variant="outline" className="border-forest-300 text-forest-700">
                Download Whitepaper
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
