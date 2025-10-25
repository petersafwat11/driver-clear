"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpeedingOffencesHero from "@/components/speeding/SpeedingOffencesHero";
import SpeedingTicketCards from "@/components/speeding/SpeedingTicketCards";
import BandGuidelines from "@/components/speeding/BandGuidelines";
import { Clock, Lightbulb, FileText, Award, Scroll } from "lucide-react";

export default function SpeedingOffences() {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      <main>
        <SpeedingOffencesHero />

        {/* Service Buttons Section */}
        <section className="px-4 md:px-[60px] py-6 md:py-12">
          <div className="max-w-[1320px] mx-auto">
            <h2 className="text-white font-['Chakra_Petch'] text-[28px] sm:text-[40px] font-bold capitalize mb-4 sm:mb-[50px]">
              Our services
            </h2>

            <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-8">
              <Link
                href="/speeding-offences"
                className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-3 sm:py-4 rounded-full border transition-all text-xs sm:text-base ${
                pathname === '/speeding-offences'
                  ? 'bg-brand-dark border-white text-white'
                  : 'bg-[#181818] border-[#3C3C3C] text-[#A8A8A8] hover:border-white/50'
              }`}
            >
              <Clock className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <span className="font-semibold uppercase whitespace-nowrap hidden sm:inline">Speeding Offences</span>
              <span className="font-semibold uppercase whitespace-nowrap sm:hidden">Speeding</span>
              </Link>

              <Link
                href="/red-light-offences"
                className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-3 sm:py-4 rounded-full border transition-all text-xs sm:text-base ${
                pathname === '/red-light-offences'
                  ? 'bg-brand-dark border-white text-white'
                  : 'bg-[#181818] border-[#3C3C3C] text-[#A8A8A8] hover:border-white/50'
              }`}
            >
              <Lightbulb className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <span className="font-semibold uppercase whitespace-nowrap hidden sm:inline">Red Light Offences</span>
              <span className="font-semibold uppercase whitespace-nowrap sm:hidden">Red Light</span>
              </Link>

              <Link
                href="/services"
                className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-3 sm:py-4 rounded-full border transition-all text-xs sm:text-base ${
                pathname === '/services'
                  ? 'bg-brand-dark border-white text-white'
                  : 'bg-[#181818] border-[#3C3C3C] text-[#A8A8A8] hover:border-white/50'
              }`}
            >
              <FileText className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <span className="font-semibold uppercase whitespace-nowrap hidden sm:inline">Pass Plus Certifications</span>
              <span className="font-semibold uppercase whitespace-nowrap sm:hidden">Pass Plus</span>
              </Link>

              <Link
                href="/ncb-renewals"
                className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-3 sm:py-4 rounded-full border transition-all text-xs sm:text-base ${
                pathname === '/ncb-renewals'
                  ? 'bg-brand-dark border-white text-white'
                  : 'bg-[#181818] border-[#3C3C3C] text-[#A8A8A8] hover:border-white/50'
              }`}
            >
              <Award className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <span className="font-semibold uppercase whitespace-nowrap hidden sm:inline">No Claims Bonus (NCB)</span>
              <span className="font-semibold uppercase whitespace-nowrap sm:hidden">NCB</span>
              </Link>

              <Link
                href="/pcn-clearances"
                className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-3 sm:py-4 rounded-full border transition-all text-xs sm:text-base ${
                pathname === '/pcn-clearances'
                  ? 'bg-brand-dark border-white text-white'
                  : 'bg-[#181818] border-[#3C3C3C] text-[#A8A8A8] hover:border-white/50'
              }`}
            >
              <Scroll className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <span className="font-semibold uppercase whitespace-nowrap hidden sm:inline">PCN Clearances</span>
              <span className="font-semibold uppercase whitespace-nowrap sm:hidden">PCN</span>
              </Link>
            </div>
          </div>
        </section>

        <SpeedingTicketCards />
        <BandGuidelines />
      </main>
      <Footer />
    </div>
  );
}
