
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Leaf, ShieldCheck, Workflow, FileSearch } from "lucide-react";
import { Link } from "react-router-dom";

const Wallet = () => {
  const conceptSteps = [
    {
      title: "Participant identity",
      description: "Define how a future wallet could represent a participant without exposing unnecessary private data."
    },
    {
      title: "Stewardship commitments",
      description: "Model non-custodial commitments before any live value, signing, or custody feature exists."
    },
    {
      title: "Review records",
      description: "Keep contribution, review, and governance records separate from financial claims."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-forest-50">
        <section className="container py-16 md:py-24 space-y-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Leaf className="h-10 w-10 text-forest-600 mx-auto" />
            <p className="text-sm font-semibold uppercase tracking-wide text-forest-600">Internal Biozoe route</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-forest-800">Aether Wallet Concept</h1>
            <p className="text-lg text-muted-foreground">
              This route now resolves inside the Biozoe repository. It is a concept interface
              for future participation design, not a live wallet, custody service, signing
              tool, token balance, or production account system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-forest-100">
              <CardHeader>
                <ShieldCheck className="h-7 w-7 text-forest-600 mb-2" />
                <CardTitle>No custody</CardTitle>
                <CardDescription>No private keys, deposits, token balances, or transaction signing are handled here.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-forest-100">
              <CardHeader>
                <Workflow className="h-7 w-7 text-forest-600 mb-2" />
                <CardTitle>Concept workflow</CardTitle>
                <CardDescription>The page documents a possible future flow for participation and stewardship review.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-forest-100">
              <CardHeader>
                <FileSearch className="h-7 w-7 text-forest-600 mb-2" />
                <CardTitle>Review required</CardTitle>
                <CardDescription>Production use requires legal, security, technical, and governance review.</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card className="max-w-4xl mx-auto border-forest-100">
            <CardHeader>
              <CardTitle>Wallet Concept Flow</CardTitle>
              <CardDescription>What this route can safely model before a production wallet exists.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              {conceptSteps.map((step, index) => (
                <div key={step.title} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-100 flex items-center justify-center text-forest-700 font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h2 className="font-medium text-lg text-forest-800">{step.title}</h2>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="bg-forest-600 hover:bg-forest-700" asChild>
              <Link to="/tokenomics">Review Circleunchain Model</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/dapp">Open Interface Concept</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/AIFreedomTrustFederation/Aether_Coin_biozonecurrency" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Protocol Repository
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Wallet;
