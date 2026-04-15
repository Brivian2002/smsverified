import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { CheckCircle2, Shield, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center max-w-[800px] mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[48px] font-extrabold tracking-tight text-[#0f172a] leading-[1.1] mb-5">
              Reliable SMS & Voice <br />
              Verifications for Any App
            </h1>
            <p className="text-[18px] text-[#64748b] mb-10 leading-relaxed">
              Bypass SMS locks and protect your privacy with our clean, non-VoIP US phone numbers. Instant access to verifications for Google, WhatsApp, Tinder, and 500+ other services.
            </p>
            
            <div className="bg-white p-2 pl-6 rounded-[50px] border border-[#e2e8f0] flex items-center max-w-[500px] mx-auto shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] mb-10">
              <input 
                type="text" 
                placeholder="Search for a service (e.g. Uber, Discord...)" 
                className="border-none outline-none flex-1 text-base text-[#1e293b] placeholder:text-[#94a3b8]"
              />
              <Button className="bg-[#2d5cf7] hover:bg-[#1a44c9] text-white rounded-[50px] px-8 h-12 text-sm font-bold">
                Find Number
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#f1f5f9] p-8 rounded-xl flex flex-wrap justify-around items-center gap-8"
        >
          <div className="text-center">
            <span className="block text-2xl font-bold text-[#2d5cf7]">1.2M+</span>
            <span className="text-[12px] uppercase tracking-wider text-[#64748b] font-semibold">Verifications Daily</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-bold text-[#2d5cf7]">50,000+</span>
            <span className="text-[12px] uppercase tracking-wider text-[#64748b] font-semibold">Real Mobile Sim-Cards</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-bold text-[#2d5cf7]">99.9%</span>
            <span className="text-[12px] uppercase tracking-wider text-[#64748b] font-semibold">Success Rate</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-bold text-[#2d5cf7]">24/7</span>
            <span className="text-[12px] uppercase tracking-wider text-[#64748b] font-semibold">Support Coverage</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
