import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Smartphone, Zap, Globe, Lock, Cpu } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    title: "SMS Verification",
    description: "Short-term US numbers for one-time verification codes. Fast, private, and 100% reliable for all major platforms.",
    icon: "💬",
  },
  {
    title: "Voice Calls",
    description: "Receive automated voice calls for verification. Perfect for services that require phone-call auth instead of SMS.",
    icon: "📞",
  },
  {
    title: "Long-Term Rentals",
    description: "Keep a dedicated number for days or weeks. Ideal for accounts you need to access multiple times over a long period.",
    icon: "🏠",
    badge: "Hot",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-[#f4f7fa]">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white p-8 rounded-2xl border border-[#e2e8f0] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#eff6ff] text-[#2d5cf7] rounded-xl flex items-center justify-center mb-5 text-2xl">
                  {feature.icon}
                </div>
                <CardHeader className="p-0 mb-3">
                  <CardTitle className="text-xl font-bold text-[#1e293b] flex items-center gap-2">
                    {feature.title}
                    {feature.badge && (
                      <span className="bg-[#10b981] text-white px-2 py-0.5 rounded-full text-[11px] font-bold uppercase">
                        {feature.badge}
                      </span>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-sm text-[#64748b] leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
