import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Where are your numbers from?",
    answer: "Our numbers are real US mobile numbers provided by major US carriers and backed by physical SIM cards. We do not use VoIP or virtual numbers that are often blocked by major platforms.",
  },
  {
    question: "When do you get new numbers?",
    answer: "We add thousands of new numbers to our pool every single day to ensure high availability and success rates for all our users.",
  },
  {
    question: "How long do your short-term numbers last?",
    answer: "Short-term verification numbers typically last for 5-10 minutes, which is more than enough time to receive and enter your verification code.",
  },
  {
    question: "What can I use your numbers for?",
    answer: "You can use our numbers for SMS and voice verifications on almost any platform, including Google, WhatsApp, Instagram, Telegram, Tinder, and thousands of others.",
  },
  {
    question: "Do you provide an API?",
    answer: "Yes! We offer a robust, well-documented REST API that allows you to automate the entire verification process. Check our documentation for more details.",
  },
  {
    question: "Are your payments secure?",
    answer: "Absolutely. We use industry-standard encryption and secure payment processors to ensure your financial information is always protected. We accept various payment methods including credit cards and cryptocurrency.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-[#f4f7fa]">
      <div className="max-w-3xl mx-auto px-10">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-[#2d5cf7] uppercase tracking-wide mb-2">Support</h2>
          <p className="text-4xl font-extrabold text-[#1e293b] tracking-tight">
            Frequently asked <span className="text-[#2d5cf7]">questions</span>
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-2xl border border-[#e2e8f0] px-6 shadow-sm overflow-hidden"
            >
              <AccordionTrigger className="text-left font-bold text-[#1e293b] hover:text-[#2d5cf7] hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#64748b] leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
