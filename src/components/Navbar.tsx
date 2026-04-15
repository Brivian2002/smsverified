import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-[#e2e8f0] shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex justify-between items-center h-[72px]">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#2d5cf7] rounded-lg flex items-center justify-center text-white text-sm font-extrabold">
              TV
            </div>
            <span className="text-[22px] font-extrabold tracking-tight text-[#2d5cf7]">
              TextVerified
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[15px] font-medium text-[#1e293b] hover:text-[#2d5cf7] transition-colors">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem title="Verifications" href="#">
                        Short-term US mobile numbers for SMS and voice.
                      </ListItem>
                      <ListItem title="Non-Renewable Rentals" href="#">
                        Rent a number for a fixed period (up to 7 days).
                      </ListItem>
                      <ListItem title="Renewable Rentals" href="#">
                        Long-term numbers you can keep as long as you need.
                      </ListItem>
                      <ListItem title="API Access" href="#">
                        Automate your verifications with our robust API.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a
                    href="#"
                    className="text-[15px] font-medium text-[#1e293b] hover:text-[#2d5cf7] transition-colors px-4"
                  >
                    Pricing
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a
                    href="#"
                    className="text-[15px] font-medium text-[#1e293b] hover:text-[#2d5cf7] transition-colors px-4"
                  >
                    Support
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-3">
              <Button variant="outline" className="text-sm font-semibold text-[#1e293b] border-[#e2e8f0] rounded-md px-5 h-10">
                Sign In
              </Button>
              <Button className="bg-[#2d5cf7] hover:bg-[#1a44c9] text-white rounded-md px-5 h-10 text-sm font-semibold">
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600 p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-top border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3">
                  Services
                </p>
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">
                  Verifications
                </a>
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">
                  Rentals
                </a>
              </div>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">
                Pricing
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">
                Support
              </a>
              <div className="pt-4 flex flex-col gap-2 px-3">
                <Button variant="outline" className="w-full justify-center">
                  Log In
                </Button>
                <Button className="w-full justify-center bg-blue-600 hover:bg-blue-700 text-white">
                  Sign Up
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

const ListItem = ({ title, children, href }: { title: string; children: React.ReactNode; href: string }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600"
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-500">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
