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
  AlertCircle,
  Shield,
  TrendingDown,
  PoundSterling,
} from "lucide-react";
import ContactModal from "@/components/speeding/ContactModal";
import RedLightImageSlideshow from "@/components/speeding/RedLightImageSlideshow";

export default function PCNClearances() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("related");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const pcnViolations = [
    {
      category: "Standard PCN",
      title: "Parking Charge Notice",
      description:
        "Standard parking violations like expired meters or restricted zones. Don't worry—we can definitely get this sorted for you. We'll challenge the notice professionally on your behalf.",
      price: "£30.00",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F058fdd9048ee40f580ca41b569bee55c%2F644c5a8910fb4b608e4a034f0fcfcca8?format=webp&width=800",
      icon: AlertCircle,
      stripeColor: "#8B5CF6",
    },
    {
      category: "Serious Violation",
      title: "Traffic Enforcement Notice",
      description:
        "More serious parking violations with higher penalties. But don't panic—we've handled cases like yours before and we can definitely help remove this from your record. We'll work to minimize penalties.",
      price: "£70.00",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F058fdd9048ee40f580ca41b569bee55c%2F644c5a8910fb4b608e4a034f0fcfcca8?format=webp&width=800",
      icon: Shield,
      stripeColor: "#EC4899",
    },
    {
      category: "Legal Action",
      title: "Bailiff & Court Proceedings",
      description:
        "When parking debt escalates to legal proceedings. We understand how serious this is, but we're confident we can help sort it out for you. We specialize in these cases and will work hard to achieve the best possible outcome.",
      price: "£120.00",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F058fdd9048ee40f580ca41b569bee55c%2F644c5a8910fb4b608e4a034f0fcfcca8?format=webp&width=800",
      icon: TrendingDown,
      stripeColor: "#F59E0B",
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
        <RedLightImageSlideshow />

        <div className="relative z-10 w-full px-4 md:px-[60px] py-20 flex items-center">
          <div className="max-w-[1320px] mx-auto w-full">
            <div className="max-w-[650px]">
              <h1 className="text-white font-['Chakra_Petch'] text-5xl md:text-[70px] font-bold tracking-[2.8px] leading-tight mb-6">
                PCN CLEARANCES
              </h1>
              <p className="text-white text-lg leading-[34px] mb-12">
                {`Expert assistance for parking charge notices. We've helped
                thousands get their cases resolved. Let us get yours sorted too.
                With our proven track record, we're confident we'll get you the
                best possible outcome.`}
              </p>
              <a
                href="#expert-pcn-pricing"
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

          {/* Main Service Card */}
          <div id="expert-pcn-pricing" className="scroll-mt-20">
            <h3 className="text-white font-['Chakra_Petch'] text-3xl sm:text-5xl font-bold capitalize mb-8 sm:mb-[84px]">
              Expert PCN Clearance Service
            </h3>

            <div className="bg-[#121212] border border-[#3C3C3C] rounded-[32px] p-8">
              <div className="grid lg:grid-cols-[425px_1fr] gap-6 sm:gap-8">
                {/* Product Image */}
                <div className="relative w-full h-[250px] sm:h-[425px] rounded-[22px] overflow-hidden">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/894afc58db2846fbf66f2cd09b0e69d210683f1b?width=850"
                    alt="PCN Clearance Defence"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent"></div>
                </div>

                {/* Product Details */}
                <div className="flex flex-col">
                  <h4 className="text-white font-['Chakra_Petch'] text-2xl font-bold capitalize mb-3">
                    Parking Charge Notice Removal Service
                  </h4>
                  <p className="text-white text-base leading-8 mb-8">
                    {`Received a parking charge notice? Don't worry, we've got
                    this. With our proven track record and expert team, we'll
                    get your case sorted professionally and efficiently. We know
                    exactly how to handle these situations and we're confident
                    we'll resolve your PCN with the best possible outcome.`}
                  </p>

                  <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12">
                    <div className="bg-[#181818] border border-[#3C3C3C] rounded-lg p-4 text-center">
                      <p className="text-[#8B5CF6] text-2xl font-bold">2K+</p>
                      <p className="text-white text-xs mt-2">{`PCN's cleared`}</p>
                    </div>
                    <div className="bg-[#181818] border border-[#3C3C3C] rounded-lg p-4 text-center">
                      <p className="text-[#25D366] text-2xl font-bold">92%</p>
                      <p className="text-white text-xs mt-2">Success rate</p>
                    </div>
                    <div className="bg-[#181818] border border-[#3C3C3C] rounded-lg p-4 text-center">
                      <p className="text-[#3B82F6] text-2xl font-bold">3hrs</p>
                      <p className="text-white text-xs mt-2">Response time</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
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
                      FREE CONSULTATION
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
                Violation Categories
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

            {/* Violation Categories Tab */}
            {activeTab === "related" && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {pcnViolations.map((violation, index) => {
                    const IconComponent = violation.icon;
                    return (
                      <div
                        key={index}
                        className="bg-[#121212] border border-[#3C3C3C] rounded-[32px] p-6 md:p-8 hover:border-[#5C5C5C] transition-colors"
                        style={{
                          borderLeft: `8px solid ${violation.stripeColor}`,
                        }}
                      >
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-[#181818] rounded-lg">
                                <IconComponent className="w-6 h-6 text-brand-red" />
                              </div>
                              <span className="text-brand-red text-xs font-bold uppercase">
                                {violation.category}
                              </span>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-white font-bold text-xl mb-2 font-['Chakra_Petch'] capitalize">
                              {violation.title}
                            </h3>
                            <p className="text-white text-sm leading-6 mb-4">
                              {violation.description}
                            </p>
                          </div>

                          <div className="flex items-center gap-3 pt-4">
                            <div className="flex items-center justify-center px-4 py-3 rounded-xl border border-white bg-[#181818]">
                              <span className="text-white font-semibold text-sm uppercase">
                                {violation.price}
                              </span>
                            </div>
                            <a
                              href="https://wa.me/447729213427"
                              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] to-[#20BA5A] hover:from-[#20BA5A] hover:to-[#1DA851] text-white text-xs font-bold px-6 py-3 rounded-xl transition-all flex-shrink-0"
                            >
                              <MessageCircle className="w-4 h-4" />
                              WHATSAPP US
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* FAQs Tab */}
            {activeTab === "faqs" && (
              <div className="max-w-[1097px]">
                <h4 className="text-white font-['Chakra_Petch'] text-[28px] font-bold capitalize mb-12 md:mb-16">
                  Frequently Asked Questions
                </h4>
                <div className="space-y-4">
                  {[
                    {
                      question: "What is a Parking Charge Notice?",
                      answer:
                        "A Parking Charge Notice (PCN) is a penalty issued by a parking enforcement officer when you violate parking regulations. These can range from expired meters to parking in restricted zones. You have the right to challenge this notice or appeal the decision.",
                    },
                    {
                      question: "Can you get my PCN cancelled?",
                      answer:
                        "In many cases, yes. We examine the parking enforcement details, signage compliance, and procedural compliance. Legal defects or procedural issues can provide grounds for cancellation or substantial penalty reduction.",
                    },
                    {
                      question: "Will this affect my credit rating?",
                      answer:
                        "An unpaid PCN that escalates to bailiff action can affect your credit rating. A successful challenge eliminates these impacts. Early intervention is crucial—contact us immediately to discuss your options.",
                    },
                  ].map((faq, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        setExpandedFAQ(expandedFAQ === index ? null : index)
                      }
                      className="w-full text-left"
                    >
                      <div className="bg-[#121212] border border-[#3C3C3C] rounded-xl p-6 hover:border-white/30 transition-colors">
                        <div className="flex items-center justify-between">
                          <h5 className="text-white text-lg font-semibold">
                            {faq.question}
                          </h5>
                          <ChevronDown
                            className={`w-6 h-6 text-white/60 transition-transform duration-300 flex-shrink-0 ml-4 ${
                              expandedFAQ === index ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                        {expandedFAQ === index && (
                          <p className="text-white text-base leading-8 mt-4 pt-4 border-t border-[#3C3C3C]">
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
