import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Smartphone, Globe } from "lucide-react";

const liveNumbers = [
  { country: "United States", code: "+1", flag: "🇺🇸", number: "(202) 555-0123", status: "Online", service: "WhatsApp" },
  { country: "United Kingdom", code: "+44", flag: "🇬🇧", number: "7700 900123", status: "Online", service: "Google" },
  { country: "Canada", code: "+1", flag: "🇨🇦", number: "(416) 555-0456", status: "Online", service: "Tinder" },
  { country: "Australia", code: "+61", flag: "🇦🇺", number: "412 345 678", status: "Online", service: "Telegram" },
  { country: "Germany", code: "+49", flag: "🇩🇪", number: "151 23456789", status: "Online", service: "Discord" },
  { country: "France", code: "+33", flag: "🇫🇷", number: "6 12 34 56 78", status: "Online", service: "Uber" },
];

export default function LiveNumbers() {
  const adContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject the container ad script
    const script = document.createElement("script");
    script.src = "https://pl29158275.profitablecpmratenetwork.com/0364a3fe3ff187d6a2410284de711550/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    
    if (adContainerRef.current) {
      adContainerRef.current.appendChild(script);
    }

    return () => {
      if (adContainerRef.current) {
        adContainerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Live Numbers Feed */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#eff6ff] rounded-xl flex items-center justify-center text-[#2d5cf7]">
                <Smartphone className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#1e293b]">Live Numbers</h2>
                <p className="text-sm text-[#64748b]">Real-time availability from 50+ countries</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {liveNumbers.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-4 border-[#e2e8f0] hover:border-[#2d5cf7] transition-colors group cursor-pointer">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{item.flag}</span>
                        <span className="text-xs font-bold text-[#64748b] uppercase tracking-wider">{item.country}</span>
                      </div>
                      <Badge className="bg-[#10b981] text-white text-[10px] uppercase">{item.status}</Badge>
                    </div>
                    <div className="text-lg font-mono font-bold text-[#1e293b] mb-1 group-hover:text-[#2d5cf7] transition-colors">
                      {item.number}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-[#94a3b8] font-medium">Last used for: {item.service}</span>
                      <span className="text-[10px] font-bold text-[#2d5cf7]">Use Now →</span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <a href="https://www.profitablecpmratenetwork.com/ek0fhmtzv2?key=da373f69c512a87e62048b1feef30303" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#2d5cf7] hover:underline">
                <Globe className="h-4 w-4" />
                View all available countries and numbers
              </a>
            </div>
          </div>

          {/* Ad Container */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="text-xs font-bold text-[#94a3b8] uppercase tracking-widest mb-4 text-center">Sponsored</div>
              <div id="container-0364a3fe3ff187d6a2410284de711550" ref={adContainerRef} className="min-h-[250px] bg-gray-50 rounded-xl border border-dashed border-[#e2e8f0] flex items-center justify-center">
                {/* Ad will be injected here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
