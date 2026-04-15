import { useEffect, useRef } from "react";

export default function AdBanner() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Set atOptions
    (window as any).atOptions = {
      'key' : '45318c08fb018bb9e050ea71b2761d68',
      'format' : 'iframe',
      'height' : 50,
      'width' : 320,
      'params' : {}
    };

    const script = document.createElement("script");
    script.src = "https://www.highperformanceformat.com/45318c08fb018bb9e050ea71b2761d68/invoke.js";
    script.async = true;
    
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center py-4 bg-[#f4f7fa] border-b border-[#e2e8f0]">
      <div className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-widest mb-1">Advertisement</div>
      <div ref={containerRef} className="w-[320px] h-[50px] bg-white border border-[#e2e8f0] rounded overflow-hidden flex items-center justify-center">
        {/* Ad injected here */}
      </div>
    </div>
  );
}
