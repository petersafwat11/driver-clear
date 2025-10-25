"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  MessageCircle,
  Clock,
  Lightbulb,
  FileText,
  Award,
  Scroll,
  ChevronDown,
  PoundSterling,
} from "lucide-react";
import ContactModal from "@/components/speeding/ContactModal";

export default function NCBRenewals() {
  const pathname = usePathname();
  const [selectedYear, setSelectedYear] = useState(1);
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState("related");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const basePrice = 50;
  const pricePerYear = 25;
  const totalPrice = basePrice + (selectedYear - 1) * pricePerYear;

  const speedingTickets = [
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

  const handlePayNow = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[750px] flex items-center overflow-hidden">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/ee7abae589eeae807c5ea7e055968bda78e9d860?width=1996"
          alt="NCB Renewals hero"
          className="absolute inset-0 w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent"></div>

        <div className="relative z-10 w-full px-4 md:px-[60px] py-20 flex items-center">
          <div className="max-w-[1320px] mx-auto w-full">
            <div className="max-w-[650px]">
              <h1 className="text-white font-['Chakra_Petch'] text-5xl md:text-[70px] font-bold tracking-[2.8px] leading-tight mb-6">
                AN OVERVIEW OF OUR SERVICES
              </h1>
              <p className="text-white text-lg leading-[34px] mb-12">
                Discover all of our services we expertise in with a quick and
                clear summary. Decide which service would serve your needs the
                most before making a purchase.
              </p>
              <a
                href="#expert-ncb-pricing"
                className="inline-flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-white text-white font-bold text-base rounded-xl hover:bg-white/10 hover:border-white/80 transition-all duration-300"
              >
                <PoundSterling className="w-5 h-5" />
                <span>VIEW PRICING</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 md:px-[60px] py-16 md:py-24">
        <div className="max-w-[1320px] mx-auto">
          <h2 className="text-white font-['Chakra_Petch'] text-[28px] sm:text-[40px] font-bold capitalize mb-8 sm:mb-[84px]">
            Our services
          </h2>

          {/* Service Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-8 sm:mb-16">
            <Link
              href="/speeding-offences"
              className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-3 sm:py-4 rounded-full border transition-all text-xs sm:text-base ${
                pathname === "/speeding-offences"
                  ? "bg-brand-dark border-white text-white"
                  : "bg-[#181818] border-[#3C3C3C] text-[#A8A8A8] hover:border-white/50"
              }`}
            >
              <Clock className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <span className="font-semibold uppercase whitespace-nowrap hidden sm:inline">
                Speeding Offences
              </span>
              <span className="font-semibold uppercase whitespace-nowrap sm:hidden">
                Speeding
              </span>
            </Link>

            <Link
              href="/red-light-offences"
              className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-3 sm:py-4 rounded-full border transition-all text-xs sm:text-base ${
                pathname === "/red-light-offences"
                  ? "bg-brand-dark border-white text-white"
                  : "bg-[#181818] border-[#3C3C3C] text-[#A8A8A8] hover:border-white/50"
              }`}
            >
              <Lightbulb className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <span className="font-semibold uppercase whitespace-nowrap hidden sm:inline">
                Red Light Offences
              </span>
              <span className="font-semibold uppercase whitespace-nowrap sm:hidden">
                Red Light
              </span>
            </Link>

            <Link
              href="/services"
              className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-3 sm:py-4 rounded-full border transition-all text-xs sm:text-base ${
                pathname === "/services"
                  ? "bg-brand-dark border-white text-white"
                  : "bg-[#181818] border-[#3C3C3C] text-[#A8A8A8] hover:border-white/50"
              }`}
            >
              <FileText className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <span className="font-semibold uppercase whitespace-nowrap hidden sm:inline">
                Pass Plus Certifications
              </span>
              <span className="font-semibold uppercase whitespace-nowrap sm:hidden">
                Pass Plus
              </span>
            </Link>

            <Link
              href="/ncb-renewals"
              className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-3 sm:py-4 rounded-full border transition-all text-xs sm:text-base ${
                pathname === "/ncb-renewals"
                  ? "bg-brand-dark border-white text-white"
                  : "bg-[#181818] border-[#3C3C3C] text-[#A8A8A8] hover:border-white/50"
              }`}
            >
              <Award className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <span className="font-semibold uppercase whitespace-nowrap hidden sm:inline">
                No Claims Bonus (NCB)
              </span>
              <span className="font-semibold uppercase whitespace-nowrap sm:hidden">
                NCB
              </span>
            </Link>

            <Link
              href="/pcn-clearances"
              className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-3 sm:py-4 rounded-full border transition-all text-xs sm:text-base ${
                pathname === "/pcn-clearances"
                  ? "bg-brand-dark border-white text-white"
                  : "bg-[#181818] border-[#3C3C3C] text-[#A8A8A8] hover:border-white/50"
              }`}
            >
              <Scroll className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <span className="font-semibold uppercase whitespace-nowrap hidden sm:inline">
                PCN Clearances
              </span>
              <span className="font-semibold uppercase whitespace-nowrap sm:hidden">
                PCN
              </span>
            </Link>
          </div>

          {/* NCB Product Card */}
          <div id="expert-ncb-pricing" className="scroll-mt-20">
            <h3 className="text-white font-['Chakra_Petch'] text-[28px] sm:text-[40px] font-bold capitalize mb-8 sm:mb-[84px]">
              No Claims Bonus (NCB)
            </h3>

            <div className="bg-[#121212] border border-[#3C3C3C] rounded-[32px] p-8">
              <div className="grid lg:grid-cols-[425px_1fr] gap-6 sm:gap-8">
                {/* Product Image */}
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/894afc58db2846fbf66f2cd09b0e69d210683f1b?width=850"
                  alt="NCB Certificate"
                  className="w-full h-[250px] sm:h-[425px] object-cover rounded-[22px]"
                />

                {/* Product Details */}
                <div className="flex flex-col">
                  <h4 className="text-white font-['Chakra_Petch'] text-2xl font-bold capitalize mb-3">
                    Proof of No Claims Discount
                  </h4>
                  <p className="text-white text-base leading-8 mb-12">
                    {`Secure your No Claims Bonus certificate with ease. Our
                    service provides official proof of your claim-free driving
                    record, helping you save money on your insurance premiums.
                    Whether you're switching insurers or renewing your policy,
                    we'll deliver your NCB certificate quickly and efficiently.`}
                  </p>

                  {/* Price */}
                  <div className="mb-16">
                    <div className="px-[19px] py-3 border border-white rounded-xl bg-[#181818] inline-block">
                      <span className="text-white text-base font-semibold uppercase">
                        £{totalPrice}.00
                      </span>
                    </div>
                  </div>

                  {/* Year Selection */}
                  <div className="mb-12">
                    <p className="text-white text-sm font-medium mb-4">
                      SELECT OPTION
                    </p>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      {[1, 2, 3, 4, 5].map((year) => (
                        <button
                          key={year}
                          onClick={() => setSelectedYear(year)}
                          className={`px-4 py-2 rounded-full text-sm font-medium uppercase transition-colors ${
                            selectedYear === year
                              ? "border border-white bg-[#181818] text-white"
                              : "border border-[#3C3C3C] bg-[#181818] text-[#A8A8A8] hover:border-white hover:text-white"
                          }`}
                        >
                          {year} Year{year > 1 ? "s" : ""}
                        </button>
                      ))}

                      {/* More Years Dropdown */}
                      <div className="relative">
                        <button
                          onClick={() => setShowYearDropdown(!showYearDropdown)}
                          className={`px-4 py-2 rounded-full border text-sm font-medium uppercase transition-colors ${
                            selectedYear > 5
                              ? "border-white bg-[#181818] text-white"
                              : "border-[#3C3C3C] bg-[#181818] text-[#A8A8A8] hover:border-white hover:text-white"
                          }`}
                        >
                          {selectedYear > 5
                            ? `${selectedYear} Years`
                            : "More Years"}
                        </button>
                        {showYearDropdown && (
                          <div className="absolute top-full mt-2 left-0 bg-[#181818] border border-[#3C3C3C] rounded-xl p-2 max-h-64 overflow-y-auto z-10 min-w-[120px]">
                            {Array.from({ length: 20 }, (_, i) => i + 6).map(
                              (year) => (
                                <button
                                  key={year}
                                  onClick={() => {
                                    setSelectedYear(year);
                                    setShowYearDropdown(false);
                                  }}
                                  className={`block w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                                    selectedYear === year
                                      ? "bg-white/20 text-white font-semibold"
                                      : "text-white hover:bg-white/10"
                                  }`}
                                >
                                  {year} Years
                                </button>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handlePayNow}
                      className="px-11 py-3 bg-white rounded-xl text-brand-dark text-sm font-bold hover:bg-gray-100 transition-colors"
                    >
                      PAY NOW
                    </button>
                    <a
                      href="https://wa.me/447729213427"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#25D366] to-[#20BA5A] rounded-xl text-white text-sm font-bold hover:from-[#20BA5A] hover:to-[#1DA851] transition-all"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WHATSAPP US
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-16 md:mt-24">
            <div className="flex gap-4 sm:gap-12 overflow-x-auto pb-4 border-b border-[#3C3C3C] mb-12 md:mb-16">
              <button
                onClick={() => setActiveTab("related")}
                className={`pb-4 font-['Chakra_Petch'] text-lg sm:text-2xl font-bold capitalize relative whitespace-nowrap ${
                  activeTab === "related" ? "text-white" : "text-[#A8A8A8]"
                }`}
              >
                Related Services
                {activeTab === "related" && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"></div>
                )}
              </button>
              <button
                onClick={() => setActiveTab("faqs")}
                className={`pb-4 font-['Chakra_Petch'] text-lg sm:text-2xl font-bold capitalize relative whitespace-nowrap ${
                  activeTab === "faqs" ? "text-white" : "text-[#A8A8A8]"
                }`}
              >
                FAQS
                {activeTab === "faqs" && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"></div>
                )}
              </button>
            </div>

            {/* Related Services - Speeding Ticket Cards */}
            {activeTab === "related" && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {speedingTickets.map((ticket, index) => (
                    <div
                      key={index}
                      className="bg-[#121212] border border-[#3C3C3C] rounded-[32px] p-6 md:p-8"
                      style={{ borderLeft: `8px solid ${ticket.stripeColor}` }}
                    >
                      <div className="space-y-4">
                        <div className="relative w-full h-[200px]">
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
                              className="text-6xl font-black text-white drop-shadow-lg"
                              style={{
                                textShadow:
                                  "0 4px 12px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 255, 255, 0.2)",
                              }}
                            >
                              {ticket.band}
                            </span>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-white font-bold text-xl mb-2 font-['Chakra_Petch'] capitalize">
                            {ticket.title}
                          </h3>
                          <p className="text-white text-sm leading-6 mb-4">
                            {ticket.description}
                          </p>
                        </div>

                        <div className="flex items-center gap-3 pt-4">
                          <div className="flex items-center justify-center px-4 py-3 rounded-xl border border-white bg-[#181818]">
                            <span className="text-white font-semibold text-sm uppercase">
                              {ticket.price}
                            </span>
                          </div>
                          <button
                            onClick={handlePayNow}
                            className="bg-white text-brand-dark text-xs font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors flex-shrink-0"
                          >
                            PAY NOW
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs Tab */}
            {activeTab === "faqs" && (
              <div className="max-w-[1097px]">
                <h4 className="text-white font-['Chakra_Petch'] text-[22px] sm:text-[28px] font-bold capitalize mb-12 md:mb-16">
                  Frequently Asked Questions
                </h4>
                <div className="space-y-4">
                  {[
                    {
                      question: "What is a No Claims Bonus certificate?",
                      answer:
                        "A No Claims Bonus certificate is an official document that proves you haven't made any insurance claims during a specified period. This can significantly reduce your insurance premiums.",
                    },
                    {
                      question:
                        "How long does it take to receive my certificate?",
                      answer:
                        "After verification, your NCB certificate will be delivered electronically within 24 hours.",
                    },
                    {
                      question: "Can I use this for any insurance provider?",
                      answer:
                        "Yes, our NCB certificates are recognized by all major UK insurance providers.",
                    },
                  ].map((faq, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        setExpandedFAQ(expandedFAQ === index ? null : index)
                      }
                      className="w-full text-left"
                    >
                      <div className="bg-[#121212] border border-[#3C3C3C] rounded-xl p-4 sm:p-6 hover:border-white/30 transition-colors">
                        <div className="flex items-center justify-between gap-2">
                          <h5 className="text-white text-base sm:text-lg font-semibold">
                            {faq.question}
                          </h5>
                          <ChevronDown
                            className={`w-5 sm:w-6 h-5 sm:h-6 text-white/60 transition-transform duration-300 flex-shrink-0 ml-2 sm:ml-4 ${
                              expandedFAQ === index ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                        {expandedFAQ === index && (
                          <p className="text-white text-sm sm:text-base leading-7 sm:leading-8 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-[#3C3C3C]">
                            {faq.answer}
                          </p>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Footer />
    </div>
  );
}
