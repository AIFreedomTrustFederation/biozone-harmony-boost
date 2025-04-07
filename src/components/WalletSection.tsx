
import React from "react";
import { Button } from "@/components/ui/button";

const WalletSection = () => {
  const handleWalletClick = () => {
    window.location.href = "https://atc.aifreedomtrust.com/wallet";
  };

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-6">
            Access Your Aether Wallet
          </h2>
          <p className="text-lg text-forest-600 max-w-2xl mx-auto mb-8">
            Manage your Aether holdings securely with our integrated wallet solution.
            Track balances, make transfers, and participate in the ecosystem.
          </p>
          <Button 
            onClick={handleWalletClick} 
            className="bg-forest-600 hover:bg-forest-700 text-white px-8 py-3 rounded-lg text-lg"
          >
            Launch Wallet
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WalletSection;
