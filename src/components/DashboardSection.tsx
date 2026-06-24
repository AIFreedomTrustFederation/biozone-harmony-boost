
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sprout, Users, Clock, FileSearch, ShieldCheck } from 'lucide-react';

const releaseChecks = [
  {
    title: 'Concept review',
    description: 'Document the Circleunchain model, assumptions, and non-production boundaries.'
  },
  {
    title: 'Governance review',
    description: 'Define who can approve releases, stewardship criteria, and public status changes.'
  },
  {
    title: 'Technical review',
    description: 'Publish implementation evidence before making network, API, wallet, or value claims.'
  },
  {
    title: 'Security and legal review',
    description: 'Complete review before any custody, signing, participation, or value-bearing workflow exists.'
  }
];

const stewardshipChecks = [
  'Public evidence records',
  'Measurable stewardship criteria',
  'Method review',
  'Governance approval trail'
];

const DashboardSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="gradient-text">Stewardship</span> Scenarios
          </h2>
          <p className="text-muted-foreground">
            Review illustrative stewardship scenarios for biozoe coins on the future Circleunchain system.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 border-forest-100">
            <CardHeader className="flex flex-row items-start justify-between">
              <div>
                <CardTitle>Release Review Path</CardTitle>
                <CardDescription>What must happen before any production or value-bearing claim exists</CardDescription>
              </div>
              <Badge variant="outline" className="bg-forest-50 text-forest-700 border-forest-200">
                <Clock className="h-3.5 w-3.5 mr-1" />
                <span>Incubating</span>
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {releaseChecks.map((item) => (
                  <div key={item.title} className="p-4 bg-forest-50 rounded-lg border border-forest-100">
                    <h3 className="font-medium text-forest-800 mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 mt-4 gap-4">
                <div className="flex flex-col items-center bg-forest-50 p-3 rounded-lg">
                  <FileSearch className="h-5 w-5 text-forest-600 mb-1" />
                  <span className="text-xs text-muted-foreground">Value claims</span>
                  <span className="font-bold text-forest-700">Not active</span>
                </div>
                <div className="flex flex-col items-center bg-forest-50 p-3 rounded-lg">
                  <Sprout className="h-5 w-5 text-forest-600 mb-1" />
                  <span className="text-xs text-muted-foreground">Supply model</span>
                  <span className="font-bold text-forest-700">Not set</span>
                </div>
                <div className="flex flex-col items-center bg-forest-50 p-3 rounded-lg">
                  <Users className="h-5 w-5 text-forest-600 mb-1" />
                  <span className="text-xs text-muted-foreground">Participation</span>
                  <span className="font-bold text-forest-700">Research</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-forest-100">
            <CardHeader>
              <CardTitle>Stewardship Evidence</CardTitle>
              <CardDescription>Required evidence before environmental impact claims are made</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stewardshipChecks.map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <ShieldCheck className="h-5 w-5 text-forest-600 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium">{item}</div>
                      <div className="text-xs text-muted-foreground">Required before public impact claims.</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-forest-50 rounded-lg">
                <h4 className="text-sm font-semibold text-forest-700 mb-2">Research Timeline</h4>
                <div className="text-xs space-y-2">
                  <div className="flex justify-between">
                    <span>Concept Review</span>
                    <span className="font-medium">Incubating</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Governance Review</span>
                    <span className="font-medium">Planned</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Technical Review</span>
                    <span className="font-medium">Planned</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
