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
  Shield,
  TrendingDown,
} from "lucide-react";
import ContactModal from "@/components/speeding/ContactModal";
import RedLightImageSlideshow from "@/components/speeding/RedLightImageSlideshow";

export default function RedLightOffences() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("related");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const redLightOffences = [
    {
      category: "Fixed Penalty Notice",
      title: "Red Light Traffic Violation",
      description:
        "Standard red light camera offence where you've passed through a red traffic light. Don't worry though—we can definitely get this sorted for you. We'll handle the negotiation and challenge for your case professionally.",
      price: "£100.00",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F058fdd9048ee40f580ca41b569bee55c%2F644c5a8910fb4b608e4a034f0fcfcca8?format=webp&width=800",
      icon: PoundSterling,
      stripeColor: "#3B82F6",
    },
    {
      category: "Serious Violation",
      title: "Red Light Running - Dangerous",
      description:
        "More serious red light violations that pose significant traffic safety risks. But don't panic—we've handled cases like yours before and we can definitely help remove this from your record. We'll work to minimize penalties and protect your driving record.",
      price: "£250.00",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F058fdd9048ee40f580ca41b569bee55c%2F644c5a8910fb4b608e4a034f0fcfcca8?format=webp&width=800",
      icon: Shield,
      stripeColor: "#F97316",
    },
    {
      category: "Prosecution Case",
      title: "Court Prosecution & Sentencing",
      description:
        "The most severe category where you face prosecution in court. We understand how serious this is, but we're confident we can help sort it out for you. We specialize in these cases and will work hard to achieve the best possible outcome for you.",
      price: "£450.00",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F058fdd9048ee40f580ca41b569bee55c%2F644c5a8910fb4b608e4a034f0fcfcca8?format=webp&width=800",
      icon: TrendingDown,
      stripeColor: "#DC2626",
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
                RED LIGHT CAMERA OFFENCES
              </h1>
              <p className="text-white text-lg leading-[34px] mb-12">
                {`Expert legal assistance for red light camera violations. We've
                helped thousands get their cases resolved. Let us get yours
                sorted too. With our proven track record, we're confident we'll
                get you the best possible outcome.`}
              </p>
              <a
                href="#expert-red-light-defence"
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
          <div id="expert-red-light-defence" className="scroll-mt-20">
            <h3 className="text-white font-['Chakra_Petch'] text-3xl sm:text-5xl font-bold capitalize mb-8 sm:mb-[84px]">
              Expert Red Light Offence Defence
            </h3>

            <div className="bg-[#121212] border border-[#3C3C3C] rounded-[32px] p-8">
              <div className="grid lg:grid-cols-[425px_1fr] gap-6 sm:gap-8">
                {/* Product Image */}
                <div className="relative w-full h-[250px] sm:h-[425px] rounded-[22px] overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F058fdd9048ee40f580ca41b569bee55c%2Ff253f3cef6864246834f5281f6e0041d?format=webp&width=800"
                    alt="Red Light Offence Defence"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent"></div>
                </div>

                {/* Product Details */}
                <div className="flex flex-col">
                  <h4 className="text-white font-['Chakra_Petch'] text-2xl font-bold capitalize mb-3">
                    Red Light Camera Defence Service
                  </h4>
                  <p className="text-white text-base leading-8 mb-8">
                    {`Caught on a red light camera? Don't worry, we've got this.
                    With our proven track record and expert legal team, we'll
                    get your case sorted professionally and efficiently. We know
                    exactly how to handle these situations and we're confident
                    we'll resolve your red light offence with the best possible
                    outcome for you.`}
                  </p>

                  <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12">
                    <div className="bg-[#181818] border border-[#3C3C3C] rounded-lg p-4 text-center">
                      <p className="text-[#EF4444] text-xl sm:text-2xl font-bold">
                        3+
                      </p>
                      <p className="text-white text-[10px] sm:text-xs mt-2">
                        Points saved avg.
                      </p>
                    </div>
                    <div className="bg-[#181818] border border-[#3C3C3C] rounded-lg p-4 text-center">
                      <p className="text-[#25D366] text-xl sm:text-2xl font-bold">
                        97%
                      </p>
                      <p className="text-white text-[10px] sm:text-xs mt-2">
                        Success rate
                      </p>
                    </div>
                    <div className="bg-[#181818] border border-[#3C3C3C] rounded-lg p-4 text-center">
                      <p className="text-[#3B82F6] text-xl sm:text-2xl font-bold">
                        2hrs
                      </p>
                      <p className="text-white text-[10px] sm:text-xs mt-2">
                        Response time
                      </p>
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
                Offence Categories
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

            {/* Offence Categories Tab */}
            {activeTab === "related" && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {redLightOffences.map((offence, index) => {
                    const IconComponent = offence.icon;
                    return (
                      <div
                        key={index}
                        className="bg-[#121212] border border-[#3C3C3C] rounded-[32px] p-6 md:p-8 hover:border-[#5C5C5C] transition-colors"
                        style={{
                          borderLeft: `8px solid ${offence.stripeColor}`,
                        }}
                      >
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-[#181818] rounded-lg">
                                <IconComponent className="w-6 h-6 text-brand-red" />
                              </div>
                              <span className="text-brand-red text-xs font-bold uppercase">
                                {offence.category}
                              </span>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-white font-bold text-xl mb-2 font-['Chakra_Petch'] capitalize">
                              {offence.title}
                            </h3>
                            <p className="text-white text-sm leading-6 mb-4">
                              {offence.description}
                            </p>
                          </div>

                          <div className="flex items-center gap-3 pt-4">
                            <div className="flex items-center justify-center px-4 py-3 rounded-xl border border-white bg-[#181818]">
                              <span className="text-white font-semibold text-sm uppercase">
                                {offence.price}
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
                      question:
                        "What happens if I got caught running a red light?",
                      answer:
                        "You'll typically receive a Fixed Penalty Notice (FPN) within 28 days. This includes a £130 fine and 3 penalty points. However, you have the right to challenge this notice or appeal the decision. Our team can help you understand your options and the best course of action.",
                    },
                    {
                      question: "Can you get the notice dismissed?",
                      answer:
                        "In many cases, yes. We examine the evidence thoroughly - camera calibration, timing of the light, your distance from the intersection, and procedural compliance. Legal defects or technical issues can provide grounds for dismissal or substantial penalty reduction.",
                    },
                    {
                      question: "Will this affect my insurance?",
                      answer:
                        "An uncontested notice will add 3 points to your licence and likely increase premiums. A successful challenge eliminates these impacts. Even if unsuccessful, we may be able to negotiate reduced points, which minimizes insurance consequences.",
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
