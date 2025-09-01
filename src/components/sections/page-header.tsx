import React from "react";

interface PageHeaderProps {
  title: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <div className="relative w-full py-32 px-8 overflow-hidden bg-gradient-to-br from-gray-200 via-gray-100 to-white">
      {/* Enhanced More Apparent Pattern Overlay */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(228,74,44,0.12)_50%,transparent_75%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(228,74,44,0.10)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(228,74,44,0.08)_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(228,74,44,0.06)_0%,transparent_30%,rgba(228,74,44,0.04)_70%,transparent_100%)]" />
      </div>
      
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-[#e44a2c] rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-[#e44a2c] rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-1.5 h-1.5 bg-[#e44a2c] rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Single Color Typography Design */}
        <div className="relative mb-12">
          <div className="text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-tighter text-[#333333] leading-none">
            {title}
          </div>
        </div>
        
        {/* Thinner but Longer Divider Line */}
        <div className="flex items-center justify-center">
          <div className="w-48 h-0.5 bg-[#e44a2c]"></div>
        </div>
      </div>
    </div>
  );
};