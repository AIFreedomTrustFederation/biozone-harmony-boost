
import React from "react";
import { Leaf, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const flightPaperUrl = "https://aifreedomtrustfederation.github.io/AI-Freedom-Trust/docs/aetherion-flight-paper-post-quantum-sovereign-network.md";
  const federationRootUrl = "https://aifreedomtrustfederation.github.io/";
  const publicPortalUrl = "https://aifreedomtrustfederation.github.io/www.aifreedomtrust.com/";
  const sourceRepoUrl = "https://github.com/AIFreedomTrustFederation/biozone-harmony-boost";
  const protocolRepoUrl = "https://github.com/AIFreedomTrustFederation/Aether_Coin_biozonecurrency";

  return (
    <footer className="bg-forest-800 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-forest-300" />
              <span className="text-xl font-display font-semibold text-white">Circleunchain</span>
            </div>
            <p className="text-forest-200/80 text-sm">
              The system for Biozoe Coin, AetherCoin, and future biozoe coins. The system comes first.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">About</h3>
            <ul className="space-y-2 text-forest-200/80 text-sm">
              <li><a href={federationRootUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">Federation Root</a></li>
              <li><a href={publicPortalUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">Public Portal</a></li>
              <li><Link to="/tokenomics" className="hover:text-white">Circleunchain Model</Link></li>
              <li>
                <a href={flightPaperUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center">
                  Aetherion Flight Paper <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-forest-200/80 text-sm">
              <li><a href={sourceRepoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">Website Source</a></li>
              <li><a href={protocolRepoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">Protocol Research</a></li>
              <li><Link to="/api" className="hover:text-white">API Research</Link></li>
              <li><Link to="/wallet" className="hover:text-white">Participation Concept</Link></li>
              <li>
                <a href={flightPaperUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center">
                  White Paper <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-forest-200/80 text-sm">
              <li><Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><a href="https://aifreedomtrustfederation.github.io/docs/status.md" target="_blank" rel="noopener noreferrer" className="hover:text-white">Public Claim Boundaries</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-forest-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-forest-300/70">
            &copy; {new Date().getFullYear()} AI Freedom Trust Federation. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0 text-sm text-forest-300/70">
            <a href={sourceRepoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">Source</a>
            <a href={protocolRepoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">Protocol Repo</a>
            <a href={federationRootUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">Federation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
