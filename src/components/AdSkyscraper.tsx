import { useEffect, useRef } from "react";

export default function AdSkyscraper() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Set atOptions
    (window as any).atOptions = {
      'key' : 'd9e8e6177e0105991a92a438214bbdaa',
      'format' : 'iframe',
      'height' : 600,
      'width' : 160,
      'params' : {}
    };

    const script = document.createElement("script");
    script.src = "https://www.highperformanceformat.com/d9e8e6177e0105991a92a438214bbdaa/invoke.js";
    script.async = true;
    
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="hidden xl:block fixed right-4 top-1/2 -translate-y-1/2 z-40">
      <div className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-widest mb-2 text-center">Ad</div>
      <div ref={containerRef} className="w-[160px] h-[600px] bg-gray-50 border border-[#e2e8f0] rounded-lg overflow-hidden flex items-center justify-center">
        {/* Ad injected here */}
      </div>
    </div>
  );
}
