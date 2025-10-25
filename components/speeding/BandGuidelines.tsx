"use client";

import { useState } from "react";

export default function BandGuidelines() {
  const [hoveredRow, setHoveredRow] = useState(null);

  const rows = [
    {
      speedLimit: "20",
      bandA: "21 - 30",
      bandB: "31 - 40",
      bandC: "41 And Above",
    },
    {
      speedLimit: "30",
      bandA: "31 - 40",
      bandB: "41 - 50",
      bandC: "51 And Above",
    },
    {
      speedLimit: "40",
      bandA: "41 - 55",
      bandB: "56 - 65",
      bandC: "66 And Above",
    },
    {
      speedLimit: "50",
      bandA: "51 - 65",
      bandB: "66 - 75",
      bandC: "76 And Above",
    },
    {
      speedLimit: "60",
      bandA: "61 - 80",
      bandB: "81 - 90",
      bandC: "91 And Above",
    },
    {
      speedLimit: "70",
      bandA: "71 - 90",
      bandB: "91 - 100",
      bandC: "101 And Above",
    },
  ];

  return (
    <section
      id="band-guidelines"
      className="scroll-mt-20 py-8 md:py-12 px-4 md:px-[60px] bg-brand-dark"
    >
      <div className="max-w-[1320px] mx-auto">
        <h2 className="text-white font-bold text-2xl md:text-3xl mb-3 md:mb-6 font-['Chakra_Petch'] capitalize">
          Band A - B - C Guidelines
        </h2>

        {/* Mobile View - Card Layout */}
        <div className="md:hidden space-y-4">
          {rows.map((row, index) => (
            <div
              key={index}
              className="bg-[#121212] rounded-[16px] border border-[#3C3C3C] p-4 transition-all duration-300 active:scale-95 active:bg-[#1a1a1a] active:border-brand-red/50 cursor-pointer hover:border-brand-red/30"
            >
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-[#A8A8A8] text-xs font-medium uppercase mb-1">
                    Speed Limit
                  </p>
                  <p className="text-white font-bold text-lg">
                    {row.speedLimit} mph
                  </p>
                </div>
                <div>
                  <p className="text-[#A8A8A8] text-xs font-medium uppercase mb-1">
                    Recorded Speed
                  </p>
                  <p className="text-white font-bold text-lg">—</p>
                </div>

                <div className="col-span-2 border-t border-[#3C3C3C] pt-3 mt-3">
                  <p className="text-[#A8A8A8] text-xs font-medium uppercase mb-2">
                    Bands
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[#A8A8A8] text-sm">Band A:</span>
                      <span className="text-white font-semibold text-sm">
                        {row.bandA}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#A8A8A8] text-sm">Band B:</span>
                      <span className="text-white font-semibold text-sm">
                        {row.bandB}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#A8A8A8] text-sm">Band C:</span>
                      <span className="text-white font-semibold text-sm">
                        {row.bandC}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View - Grid Table */}
        <div className="hidden md:block bg-[#121212] rounded-[32px] p-4 md:p-9 border border-[#3C3C3C] overflow-x-auto">
          <div className="grid grid-cols-4 gap-0 min-w-full">
            {/* Header Row */}
            <div className="col-span-1 bg-brand-dark border border-[#3C3C3C] rounded-tl-[22px] p-6">
              <h3 className="text-white font-semibold text-xl md:text-2xl font-['Chakra_Petch'] uppercase text-center">
                Speed Limit (MPH)
              </h3>
            </div>
            <div className="col-span-3 bg-brand-dark border border-[#3C3C3C] rounded-tr-[22px] p-6">
              <h3 className="text-white font-semibold text-xl md:text-2xl font-['Chakra_Petch'] uppercase text-center">
                Recorded Speed (MPH)
              </h3>
            </div>

            {/* Speed Limit Column */}
            <div className="bg-brand-dark border border-[#3C3C3C] p-6 flex flex-col justify-between min-h-[420px]">
              {rows.map((row, index) => (
                <div
                  key={index}
                  className={`text-white text-center font-semibold text-xl md:text-2xl font-['Chakra_Petch'] transition-colors duration-200 px-3 py-2 rounded ${
                    hoveredRow === index ? "bg-white/10" : ""
                  }`}
                  onMouseEnter={() => setHoveredRow(index)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  {row.speedLimit}
                </div>
              ))}
            </div>

            {/* Band A Column */}
            <div className="bg-brand-dark border border-[#3C3C3C] p-6 flex flex-col justify-between min-h-[420px] relative">
              <div className="absolute right-0 top-0 bottom-0 w-px bg-[#3C3C3C]"></div>
              {rows.map((row, index) => (
                <div
                  key={index}
                  className={`text-white text-center font-semibold text-xl md:text-2xl font-['Chakra_Petch'] transition-colors duration-200 px-3 py-2 rounded ${
                    hoveredRow === index ? "bg-white/10" : ""
                  }`}
                  onMouseEnter={() => setHoveredRow(index)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  {row.bandA}
                </div>
              ))}
            </div>

            {/* Band B Column */}
            <div className="bg-brand-dark border border-[#3C3C3C] p-6 flex flex-col justify-between min-h-[420px] relative">
              <div className="absolute right-0 top-0 bottom-0 w-px bg-[#3C3C3C]"></div>
              {rows.map((row, index) => (
                <div
                  key={index}
                  className={`text-white text-center font-semibold text-xl md:text-2xl font-['Chakra_Petch'] transition-colors duration-200 px-3 py-2 rounded ${
                    hoveredRow === index ? "bg-white/10" : ""
                  }`}
                  onMouseEnter={() => setHoveredRow(index)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  {row.bandB}
                </div>
              ))}
            </div>

            {/* Band C Column */}
            <div className="bg-brand-dark border border-[#3C3C3C] p-6 flex flex-col justify-between min-h-[420px]">
              {rows.map((row, index) => (
                <div
                  key={index}
                  className={`text-white text-center font-semibold text-xl md:text-2xl font-['Chakra_Petch'] transition-colors duration-200 px-3 py-2 rounded ${
                    hoveredRow === index ? "bg-white/10" : ""
                  }`}
                  onMouseEnter={() => setHoveredRow(index)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  {row.bandC}
                </div>
              ))}
            </div>

            {/* Footer Row */}
            <div className="bg-brand-dark border border-[#3C3C3C] rounded-bl-[22px] p-6">
              <p className="text-white text-center font-semibold text-sm md:text-base font-['Chakra_Petch'] capitalize">
                Sentencing Range
              </p>
            </div>
            <div className="bg-brand-dark border border-[#3C3C3C] p-6">
              <p className="text-white text-center font-semibold text-sm md:text-base font-['Chakra_Petch'] capitalize">
                Band A Fine
              </p>
            </div>
            <div className="bg-brand-dark border border-[#3C3C3C] p-6">
              <p className="text-white text-center font-semibold text-sm md:text-base font-['Chakra_Petch'] capitalize">
                Band B Fine
              </p>
            </div>
            <div className="bg-brand-dark border border-[#3C3C3C] rounded-br-[22px] p-6">
              <p className="text-white text-center font-semibold text-sm md:text-base font-['Chakra_Petch'] capitalize">
                Band C Fine
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
