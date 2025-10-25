"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clock, Lightbulb, FileText, Award } from "lucide-react";

const tabs = [
  {
    icon: Clock,
    label: "Speeding Offences",
    path: "/speeding-offences"
  },
  {
    icon: Lightbulb,
    label: "Red Light Offences",
    path: "/red-light-offences"
  },
  {
    icon: FileText,
    label: "Pass Plus Certifications",
    path: "/services"
  },
  {
    icon: Award,
    label: "No Claims Bonus (NCB)",
    path: "/ncb-renewals"
  }
];

export default function ServiceTabs() {
  const pathname = usePathname();

  return (
    <div className="w-full px-4 md:px-[60px] py-12 bg-brand-dark">
      <div className="max-w-[1320px] mx-auto">
        <h2 className="text-white font-bold text-4xl mb-8 font-['Chakra_Petch'] capitalize">
          Our services
        </h2>
        
        <div className="flex flex-wrap gap-4">
          {tabs.map((tab, index) => {
            const isActive = pathname === tab.path;
            const Icon = tab.icon;
            
            return (
              <Link
                key={index}
                href={tab.path}
                className={`
                  flex items-center gap-3 px-6 py-4 rounded-full border transition-all
                  ${isActive 
                    ? 'bg-brand-dark border-white text-white' 
                    : 'bg-[#181818] border-[#3C3C3C] text-[#A8A8A8] hover:border-white/50'
                  }
                `}
              >
                <Icon className="w-6 h-6" />
                <span className="font-semibold text-base uppercase whitespace-nowrap">
                  {tab.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
