"use client";

import { Tag, MessageCircle, Mail } from "lucide-react";
import { useState } from "react";
import ContactModal from "./ContactModal";

const tickets = [
  {
    band: "A",
    title: "Band A Ticket Removal",
    description:
      "Band A covers slight speed limit breaches, typically minor slips that fall just above the allowable leeway. These are common for drivers in everyday scenarios and are the least severe, do not let this mistake cause months of stress and struggle, act now.",
    price: "£120.00",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F058fdd9048ee40f580ca41b569bee55c%2F644c5a8910fb4b608e4a034f0fcfcca8?format=webp&width=800",
    tintColor: "rgba(0, 0, 0, 0.2)",
    stripeColor: "#3B82F6",
  },
  {
    band: "B",
    title: "Band B Ticket Removal",
    description:
      "Band B speeding tickets are moderate to severe traffic infractions that will often result in a substantial fine and 6 points on your driving licence. You will receive this notice when you are approximately 10-20 miles over the speed limit. Act immediately to address this serious matter and contact us now to prevent further consequences.",
    price: "£120.00",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F058fdd9048ee40f580ca41b569bee55c%2F644c5a8910fb4b608e4a034f0fcfcca8?format=webp&width=800",
    tintColor: "rgba(0, 0, 0, 0.2)",
    stripeColor: "#F97316",
  },
  {
    band: "C",
    title: "Band C Ticket Removal",
    description:
      "Band C is the most severe speeding offence you can receive and is usually associated with offenses like dangerous driving or driving without due care and attention. The specific penalty will often result in disqualification, a heavy fine plus more points on your driving license if you do not mitigate the problem early by signing up with DriveClear Removals.",
    price: "£120.00",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F058fdd9048ee40f580ca41b569bee55c%2F644c5a8910fb4b608e4a034f0fcfcca8?format=webp&width=800",
    tintColor: "rgba(0, 0, 0, 0.2)",
    stripeColor: "#EF4444",
  },
];

export default function SpeedingTicketCards() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWhichBandClick = () => {
    const tableElement = document.getElementById("band-guidelines");
    if (tableElement) {
      tableElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handlePayNow = () => {
    setIsModalOpen(true);
  };

  return (
    <section
      id="speeding-tickets"
      className="scroll-mt-20 py-8 md:py-12 px-4 md:px-[60px] bg-brand-dark"
    >
      <div className="max-w-[1320px] mx-auto">
        <h2 className="text-white font-bold text-3xl sm:text-5xl mb-4 sm:mb-8 font-['Chakra_Petch'] capitalize">
          Speeding Offences
        </h2>

        <div className="space-y-8">
          {tickets.map((ticket, index) => (
            <div
              key={index}
              className="bg-[#121212] border border-[#3C3C3C] rounded-[32px] p-6 md:p-8"
              style={{ borderLeft: `8px solid ${ticket.stripeColor}` }}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="relative w-[180px] h-[180px] flex-shrink-0">
                  <img
                    src={ticket.image}
                    alt={ticket.title}
                    className="w-full h-full rounded-[22px] object-cover"
                  />
                  <div
                    className="absolute inset-0 rounded-[22px]"
                    style={{ backgroundColor: ticket.tintColor }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center rounded-[22px]">
                    <span
                      className="text-8xl font-black text-white drop-shadow-lg"
                      style={{
                        textShadow:
                          "0 4px 12px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 255, 255, 0.2)",
                      }}
                    >
                      {ticket.band}
                    </span>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-2xl mb-3 font-['Chakra_Petch'] capitalize">
                        {ticket.title}
                      </h3>
                      <p className="text-white text-base leading-8">
                        {ticket.description}
                      </p>
                    </div>

                    <button
                      onClick={handleWhichBandClick}
                      className="flex items-center gap-2 text-white text-base underline hover:text-brand-red transition-colors whitespace-nowrap cursor-pointer"
                    >
                      <Tag className="w-5 h-5" />
                      <span className="uppercase font-medium">
                        Which band is my ticket?
                      </span>
                    </button>
                  </div>

                  <div className="flex items-center gap-3 pt-4">
                    <div className="flex items-center justify-center px-5 py-3 rounded-xl border border-white bg-[#181818]">
                      <span className="text-white font-semibold text-base uppercase">
                        {ticket.price}
                      </span>
                    </div>
                    <button
                      onClick={handlePayNow}
                      className="bg-white text-brand-dark text-sm font-bold px-10 py-3.5 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      PAY NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div
            className="bg-[#121212] border border-[#3C3C3C] rounded-[32px] p-6 md:p-8"
            style={{ borderLeft: "8px solid #64748B" }}
          >
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="relative w-[180px] h-[180px] flex-shrink-0 overflow-hidden rounded-[22px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F058fdd9048ee40f580ca41b569bee55c%2F644c5a8910fb4b608e4a034f0fcfcca8?format=webp&width=800"
                  alt="Other speeding fines"
                  className="w-full h-full object-cover"
                  style={{ filter: "blur(18px)" }}
                />
                <div
                  className="absolute inset-0 rounded-[22px]"
                  style={{ backgroundColor: "rgba(100, 100, 100, 0.4)" }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center rounded-[22px]">
                  <span
                    className="text-5xl font-black text-white drop-shadow-lg"
                    style={{
                      textShadow:
                        "0 4px 12px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    ?
                  </span>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex-1">
                  <h3 className="text-white font-bold text-2xl mb-3 font-['Chakra_Petch'] capitalize">
                    Other Speeding Fines & Offences
                  </h3>
                  <p className="text-white text-base leading-8">
                    Any other speeding fines, court dates or offences? We&apos;ve got
                    you covered. Contact us for a personalised quote and
                    specialist advice tailored to your unique situation.
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 flex-wrap">
                  <a
                    href="https://wa.me/447729213427"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white text-brand-dark text-sm font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="uppercase">WhatsApp</span>
                  </a>
                  <a
                    href="mailto:contact@example.com"
                    className="flex items-center gap-2 border border-white text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="uppercase">Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
