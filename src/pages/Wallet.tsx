
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Wallet = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Blank content - will be linked to external wallet app */}
      </main>
      <Footer />
    </div>
  );
};

export default Wallet;
