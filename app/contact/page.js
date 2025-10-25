"use client"
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MessageCircle, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ firstName: "", email: "", phone: "", message: "" });
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error sending message. Please try again.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[580px] flex items-center overflow-hidden">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/cefe8178b68aeb9d7c083ad447bb8e3f021c27c7?width=2880"
          alt="Contact hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent"></div>

        <div className="relative z-10 w-full px-4 md:px-[60px] py-20 flex items-center">
          <div className="max-w-[1320px] mx-auto w-full">
            <div className="max-w-[650px]">
              <h1 className="text-white font-['Chakra_Petch'] text-5xl md:text-[70px] font-bold tracking-[2.8px] leading-tight mb-6">
                GET IN TOUCH!
              </h1>
              <p className="text-white text-lg leading-[34px]">
                {`Have questions or need assistance? We're here to help. Reach out
                to our dedicated team today and let us provide you with the
                support you deserve. Whether it's a quick inquiry or detailed
                consultation, we're just a message away.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-8 md:py-24 px-4 md:px-[60px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#121212] border border-[#3C3C3C] rounded-[32px] p-4 md:p-8">
            <div className="grid md:grid-cols-[442px_1fr] gap-6 md:gap-8">
              {/* Left Side - Contact Info */}
              <div className="bg-brand-dark rounded-[20px] p-4 md:p-6 relative overflow-hidden">
                {/* Background Circle */}
                <div className="absolute right-[-100px] bottom-[-100px] w-[326px] h-[326px] rounded-full bg-white/[0.07]"></div>

                <div className="relative z-10">
                  <h2 className="text-white font-['Chakra_Petch'] text-xl md:text-2xl font-bold capitalize mb-3 md:mb-4">
                    You Can Also Reach Us At
                  </h2>
                  <p className="text-white text-xs md:text-sm font-light leading-6 mb-6 md:mb-8">
                    Get in touch with us using any of the methods below. For the
                    quickest response, we recommend reaching out via
                    WhatsApp—our team is ready to assist you promptly and answer
                    any questions you may have.
                  </p>

                  {/* Contact Details */}
                  <div className="space-y-4 md:space-y-6">
                    {/* WhatsApp Button */}
                    <a
                      href="https://wa.me/447729213427"
                      className="flex items-center gap-3 md:gap-4 p-4 md:p-5 bg-white/5 border border-white/20 rounded-xl hover:bg-white/10 hover:border-brand-red transition-all duration-300 group"
                    >
                      <div className="w-10 md:w-12 h-10 md:h-12 bg-brand-red/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red/30 transition-colors">
                        <MessageCircle className="w-5 md:w-6 h-5 md:h-6 text-brand-red" />
                      </div>
                      <div>
                        <p className="text-white text-xs md:text-sm font-semibold">
                          WhatsApp
                        </p>
                        <p className="text-gray-400 text-[10px] md:text-xs font-medium">
                          +44 7729 213427
                        </p>
                      </div>
                    </a>

                    {/* Email Button */}
                    <a
                      href="mailto:support@driveclear.co.uk"
                      className="flex items-center gap-3 md:gap-4 p-4 md:p-5 bg-white/5 border border-white/20 rounded-xl hover:bg-white/10 hover:border-brand-red transition-all duration-300 group"
                    >
                      <div className="w-10 md:w-12 h-10 md:h-12 bg-brand-red/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red/30 transition-colors">
                        <Mail className="w-5 md:w-6 h-5 md:h-6 text-brand-red" />
                      </div>
                      <div>
                        <p className="text-white text-xs md:text-sm font-semibold">
                          Email
                        </p>
                        <p className="text-gray-400 text-[10px] md:text-xs font-medium">
                          support@driveclear.co.uk
                        </p>
                      </div>
                    </a>

                    {/* Opening Hours */}
                    <div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-white/5 border border-white/20 rounded-xl">
                      <div className="w-10 md:w-12 h-10 md:h-12 bg-brand-red/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 md:w-6 h-5 md:h-6 text-brand-red" />
                      </div>
                      <div>
                        <p className="text-white text-xs md:text-sm font-semibold mb-2 md:mb-3">
                          Opening Hours
                        </p>
                        <div className="space-y-1">
                          <p className="text-gray-400 text-[10px] md:text-xs font-medium">
                            Monday - Friday
                          </p>
                          <p className="text-gray-300 text-[10px] md:text-xs">
                            8:00 AM - 10:00 PM
                          </p>
                          <p className="text-gray-400 text-[10px] md:text-xs font-medium mt-1.5">
                            Saturday - Sunday
                          </p>
                          <p className="text-gray-300 text-[10px] md:text-xs">
                            10:00 AM - 6:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="py-0 md:py-2">
                <h2 className="text-white font-['Chakra_Petch'] text-2xl md:text-[32px] font-bold capitalize mb-4 md:mb-8">
                  Contact Us
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-6"
                >
                  <div>
                    <label className="text-white text-sm md:text-base font-medium mb-2 block">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter First Name"
                      className="w-full h-12 md:h-14 bg-[#121212] border border-[#3C3C3C] rounded-xl px-3.5 text-white placeholder-[#A8A8A8] text-sm focus:outline-none focus:border-brand-red transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-white text-sm md:text-base font-medium mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Email Address"
                      className="w-full h-12 md:h-14 bg-[#121212] border border-[#3C3C3C] rounded-xl px-3.5 text-white placeholder-[#A8A8A8] text-sm focus:outline-none focus:border-brand-red transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-white text-sm md:text-base font-medium mb-2 block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter Phone Number"
                      className="w-full h-12 md:h-14 bg-[#121212] border border-[#3C3C3C] rounded-xl px-3.5 text-white placeholder-[#A8A8A8] text-sm focus:outline-none focus:border-brand-red transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-white text-sm md:text-base font-medium mb-2 block">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write Message Here"
                      rows={5}
                      className="w-full bg-[#121212] border border-[#3C3C3C] rounded-xl px-3.5 py-3 md:py-4 text-white placeholder-[#A8A8A8] text-sm focus:outline-none focus:border-brand-red transition-colors resize-none"
                    ></textarea>
                  </div>

                  <div className="flex justify-center pt-2 md:pt-4">
                    <button
                      type="submit"
                      className="w-full md:w-[248px] h-12 md:h-14 bg-brand-red rounded-xl text-white text-sm font-bold uppercase hover:bg-brand-red/90 transition-colors"
                    >
                      SUBMIT MESSAGE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
