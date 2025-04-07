
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WalletSection from "@/components/WalletSection";

const Wallet = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <WalletSection />
      </main>
      <Footer />
    </div>
  );
};

export default Wallet;
