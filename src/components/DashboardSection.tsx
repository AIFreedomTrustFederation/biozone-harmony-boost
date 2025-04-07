
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 0.0425 },
  { name: 'Feb', value: 0.0486 },
  { name: 'Mar', value: 0.0512 },
  { name: 'Apr', value: 0.0578 },
  { name: 'May', value: 0.0643 },
  { name: 'Jun', value: 0.0691 },
  { name: 'Jul', value: 0.0728 }
];

const biozoneData = [
  { name: 'Amazon Rainforest', allocation: 25, progress: 68 },
  { name: 'Great Barrier Reef', allocation: 18, progress: 72 },
  { name: 'Congo Basin', allocation: 15, progress: 45 },
  { name: 'Sundarbans Mangroves', allocation: 12, progress: 59 }
];

const DashboardSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Live <span className="gradient-text">Ecosystem</span> Dashboard
          </h2>
          <p className="text-muted-foreground">
            Track the real-time impact of Aether Coin on global ecosystem restoration efforts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 border-forest-100">
            <CardHeader>
              <CardTitle>Aether Coin Value (USD)</CardTitle>
              <CardDescription>Last 6 months performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis 
                      domain={[0.04, 0.08]} 
                      tickFormatter={(value) => `$${value.toFixed(4)}`}
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip 
                      formatter={(value) => [`$${value}`, 'Value']}
                      labelFormatter={(label) => `${label} 2025`}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#4d994d" 
                      strokeWidth={2}
                      dot={{ fill: '#4d994d', r: 4 }}
                      activeDot={{ r: 6, fill: '#3d7d3d' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-forest-100">
            <CardHeader>
              <CardTitle>Biozone Impact</CardTitle>
              <CardDescription>Current restoration progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {biozoneData.map((zone, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{zone.name}</span>
                      <span className="text-sm text-muted-foreground">{zone.progress}%</span>
                    </div>
                    <Progress value={zone.progress} className="h-2 bg-forest-100" indicatorClassName="bg-forest-500" />
                    <div className="text-xs text-muted-foreground">
                      Allocation: {zone.allocation}% of total funds
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
