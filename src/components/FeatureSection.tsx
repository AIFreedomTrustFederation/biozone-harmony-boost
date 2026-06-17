
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Leaf, Recycle, Shield, Sprout, TreeDeciduous } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <Leaf className="h-10 w-10 text-forest-600" />,
    title: "Ecosystem Restoration",
    description: "Research pathways for supporting ecological restoration without extractive crypto mechanics."
  },
  {
    icon: <Shield className="h-10 w-10 text-forest-600" />,
    title: "Biozoe Protection",
    description: "Model how ecological stewardship commitments could be represented transparently."
  },
  {
    icon: <Activity className="h-10 w-10 text-forest-600" />,
    title: "Circleunchain Records",
    description: "Prototype records for ecological goals, assumptions, and supporting evidence without blockchain framing."
  },
  {
    icon: <Recycle className="h-10 w-10 text-forest-600" />,
    title: "Stewardship Acknowledgment",
    description: "Explore how verified stewardship actions could be acknowledged without speculation or financial-return promises."
  },
  {
    icon: <Sprout className="h-10 w-10 text-forest-600" />,
    title: "Growth Incentives",
    description: "Research incentives that stay tied to measurable ecological and community outcomes."
  },
  {
    icon: <TreeDeciduous className="h-10 w-10 text-forest-600" />,
    title: "Transparent Impact",
    description: "Experiment with auditable impact records while keeping claims status-labeled."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Defining the <span className="gradient-text">Circleunchain</span>
          </h2>
          <p className="text-muted-foreground">
            AetherCoin is a biozoe currency planned for Circleunchain. Biozoe is the opposite of crypto; Circleunchain is the opposite of blockchain. This incubating interface focuses on the system before any live financial product.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="eco-card-hover border-forest-100">
              <CardHeader>
                <div className="mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-sm">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
