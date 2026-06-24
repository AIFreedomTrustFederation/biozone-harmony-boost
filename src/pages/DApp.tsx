
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Github, Network, ShieldCheck, FileSearch } from "lucide-react";
import { Link } from "react-router-dom";

const DApp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-forest-50 p-4">
        <div className="container py-12 md:py-20 space-y-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-forest-600">Internal Biozoe route</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-forest-800">Circleunchain Interface Concept</h1>
          <p className="text-lg text-muted-foreground">
            This page resolves the future interface route inside the Biozoe repository.
            It is not a live DApp, custody service, token transaction system, production API,
            or deployed decentralized network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-forest-100">
            <CardHeader>
              <Network className="h-7 w-7 text-forest-600 mb-2" />
              <CardTitle>Participation route</CardTitle>
              <CardDescription>Shows where future Circleunchain participation UX can live once implementation evidence exists.</CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-forest-100">
            <CardHeader>
              <ShieldCheck className="h-7 w-7 text-forest-600 mb-2" />
              <CardTitle>Safety boundary</CardTitle>
              <CardDescription>No funds, keys, transactions, or accounts are collected or processed in this prototype.</CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-forest-100">
            <CardHeader>
              <FileSearch className="h-7 w-7 text-forest-600 mb-2" />
              <CardTitle>Build record</CardTitle>
              <CardDescription>The protocol repository remains the evidence trail for future implementation work.</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card className="max-w-4xl mx-auto border-forest-100">
          <CardHeader>
            <CardTitle>Concept Routes</CardTitle>
            <CardDescription>Working internal pages that replace the unresolved external DApp host.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Button className="bg-forest-600 hover:bg-forest-700" asChild>
              <Link to="/wallet">Wallet Concept</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/api">API Research</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/tokenomics">Circleunchain Model</Link>
            </Button>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="outline" asChild>
            <a
              href="https://github.com/AIFreedomTrustFederation/Aether_Coin_biozonecurrency"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              Protocol Repository
            </a>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default DApp;
