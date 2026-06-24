import React from "react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Leaf, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const flightPaperUrl = "https://aifreedomtrustfederation.github.io/AI-Freedom-Trust/docs/aetherion-flight-paper-post-quantum-sovereign-network.md";
  const federationRootUrl = "https://aifreedomtrustfederation.github.io/";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex min-h-16 items-center gap-4 py-2">
        <div className="mr-4 flex shrink-0 items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-forest-600" />
            <span className="text-xl font-display font-semibold text-forest-800">Circleunchain</span>
          </Link>
        </div>
        
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Button variant="link" asChild>
                  <Link to="/">Home</Link>
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Ecosystem</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 md:w-[520px] lg:w-[640px] lg:grid-cols-2">
                  <NavigationMenuLink asChild>
                    <Link to="/tokenomics" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Biozoe Coins</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Biozoe Coin, AetherCoin, and future coins built on Circleunchain
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/aicon" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Circleunchain System</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        The opposite of blockchain: the foundation for biozoe coins
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/wallet" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Participation Concept</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Internal wallet concept route with no custody or live balances
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/dapp" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Interface Concept</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Internal route for future Circleunchain interface design
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/api" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">API Research</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Research-oriented API shapes, not a deployed production API
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Button variant="link" asChild>
                  <a href={federationRootUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Federation
                  </a>
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Button variant="link" asChild>
                  <Link to="/api">API</Link>
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Button variant="link" asChild>
                  <a href={flightPaperUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Flight Paper
                  </a>
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Button variant="link" asChild>
                  <a href="https://github.com/AIFreedomTrustFederation/biozone-harmony-boost" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Source
                  </a>
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Legal</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[200px]">
                  <NavigationMenuLink asChild>
                    <Link to="/terms-of-service" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Terms of Service</div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/privacy-policy" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Privacy Policy</div>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="ml-auto flex shrink-0 items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex" asChild>
            <a href={federationRootUrl} target="_blank" rel="noopener noreferrer">Federation Root</a>
          </Button>
          <Button 
            size="sm" 
            className="bg-forest-600 hover:bg-forest-700"
            asChild
          >
            <a href={flightPaperUrl} target="_blank" rel="noopener noreferrer">
              <span className="hidden sm:inline">Read Paper</span>
              <span className="sm:hidden">Paper</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
