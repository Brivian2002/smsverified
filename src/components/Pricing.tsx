import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { motion } from "motion/react";

const plans = [
  {
    name: "Verifications",
    price: "From $0.25",
    description: "One-time use short-term numbers for instant SMS/Voice verification.",
    features: [
      "Real US Mobile Numbers",
      "Instant Code Delivery",
      "Pay-as-you-go Credits",
      "All Major Platforms Supported",
      "24/7 Availability",
    ],
    cta: "Start Verifying",
    popular: false,
  },
  {
    name: "Non-Renewable Rentals",
    price: "From $5.00",
    description: "Rent a dedicated number for a fixed period (up to 7 days).",
    features: [
      "Dedicated Number",
      "Unlimited SMS/Voice",
      "Fixed Duration (1-7 days)",
      "No Auto-Renewal",
      "Perfect for Short Projects",
    ],
    cta: "Rent Now",
    popular: true,
  },
  {
    name: "Renewable Rentals",
    price: "From $15.00/mo",
    description: "Keep your number as long as you need with monthly renewals.",
    features: [
      "Permanent Number Access",
      "Monthly Auto-Renewal",
      "Unlimited SMS/Voice",
      "Priority Support",
      "API Integration Included",
    ],
    cta: "Get Long-term Number",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-[#2d5cf7] uppercase tracking-wide mb-2">Pricing</h2>
          <p className="text-4xl font-extrabold text-[#1e293b] sm:text-5xl tracking-tight">
            Great products, <span className="text-[#2d5cf7]">simple pricing</span>
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-[#64748b]">
            Choose the service that best fits your needs. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full flex flex-col relative rounded-2xl ${plan.popular ? 'border-[#2d5cf7] border-2 shadow-xl scale-105 z-10' : 'border-[#e2e8f0] shadow-sm'}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Badge className="bg-[#2d5cf7] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[#1e293b]">{plan.name}</CardTitle>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-extrabold text-[#1e293b]">{plan.price}</span>
                  </div>
                  <p className="mt-4 text-[#64748b] text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="mt-1 h-5 w-5 rounded-full bg-[#eff6ff] flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-[#2d5cf7]" />
                        </div>
                        <span className="text-sm text-[#64748b]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className={`w-full h-12 rounded-lg font-bold transition-all ${plan.popular ? 'bg-[#2d5cf7] hover:bg-[#1a44c9] text-white' : 'bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#1e293b] border border-[#e2e8f0]'}`}>
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
