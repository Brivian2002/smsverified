import { ShieldCheck, Twitter, Facebook, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e2e8f0] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#2d5cf7] rounded-lg flex items-center justify-center text-white text-sm font-extrabold">
                TV
              </div>
              <span className="text-[22px] font-extrabold tracking-tight text-[#2d5cf7]">
                TextVerified
              </span>
            </div>
            <p className="text-[#64748b] max-w-xs leading-relaxed mb-8">
              The premier provider of real US mobile numbers for SMS and voice verifications. Protect your privacy with physical SIM-backed numbers.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#64748b] hover:text-[#2d5cf7] hover:bg-[#eff6ff] transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#64748b] hover:text-[#2d5cf7] hover:bg-[#eff6ff] transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#64748b] hover:text-[#2d5cf7] hover:bg-[#eff6ff] transition-all">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#64748b] hover:text-[#2d5cf7] hover:bg-[#eff6ff] transition-all">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[#1e293b] uppercase tracking-wider mb-6">Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#64748b] hover:text-[#2d5cf7] transition-colors">Verifications</a></li>
              <li><a href="#" className="text-[#64748b] hover:text-[#2d5cf7] transition-colors">Non-Renewable Rentals</a></li>
              <li><a href="#" className="text-[#64748b] hover:text-[#2d5cf7] transition-colors">Renewable Rentals</a></li>
              <li><a href="#" className="text-[#64748b] hover:text-[#2d5cf7] transition-colors">API Access</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[#1e293b] uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#64748b] hover:text-[#2d5cf7] transition-colors">About Us</a></li>
              <li><a href="#" className="text-[#64748b] hover:text-[#2d5cf7] transition-colors">Pricing</a></li>
              <li><a href="#" className="text-[#64748b] hover:text-[#2d5cf7] transition-colors">Support</a></li>
              <li><a href="#" className="text-[#64748b] hover:text-[#2d5cf7] transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[#1e293b] uppercase tracking-wider mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#64748b] hover:text-[#2d5cf7] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-[#64748b] hover:text-[#2d5cf7] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-[#64748b] hover:text-[#2d5cf7] transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#e2e8f0] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#94a3b8]">
            © {new Date().getFullYear()} TextVerified Clone. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-xs font-medium text-[#94a3b8]">
              <div className="h-2 w-2 rounded-full bg-[#10b981]" />
              System Status: Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
