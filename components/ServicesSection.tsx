import Link from "next/link";
import {
  Camera,
  StopCircle,
  FileText,
  ParkingCircle,
  Shield,
  AlertTriangle,
  Wrench,
  MessageCircle,
  Mail,
} from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Speeding Camera Ticket Removals",
    description:
      "Get your speeding tickets cleared quickly and efficiently with our proven methods.",
    link: "/speeding-offences",
  },
  {
    icon: StopCircle,
    title: "Red Light Camera Ticket Removals",
    description:
      "Remove red light camera infractions from your record with our expert assistance.",
    link: "/red-light-offences",
  },
  {
    icon: FileText,
    title: "No Claims Bonus Certificates",
    description:
      "Obtain legitimate NCB certificates to reduce your insurance premiums.",
    link: "/ncb-renewals",
  },
  {
    icon: ParkingCircle,
    title: "Parking Charge Notices Cleared",
    description:
      "Challenge and clear unfair parking tickets with our professional service.",
    link: "/pcn-clearances",
  },
  {
    icon: AlertTriangle,
    title: "No Insurance Coverage Help",
    description:
      "Got caught with no insurance? We can help resolve your situation quickly.",
    link: "/no-insurance",
  },
  {
    icon: Wrench,
    title: "Any Other Offences",
    description:
      "We handle all other traffic-related offences and infractions with expertise.",
    link: "/other-offences",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="comprehensive-solutions"
      className="scroll-mt-20 py-10 md:py-32 px-4 md:px-[60px] bg-gradient-to-b from-brand-dark to-black"
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-20 h-px bg-brand-red"></div>
            <p className="text-brand-red text-sm font-semibold uppercase tracking-wider">
              Our Services
            </p>
            <div className="w-20 h-px bg-brand-red"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            COMPREHENSIVE <span className="text-brand-red">SOLUTIONS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We offer a complete range of services to handle all your traffic
            infraction and insurance needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-brand-red/50 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl group-hover:bg-brand-red/10 transition-colors"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-brand-red rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-red transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="flex items-center text-brand-red font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn More
                  <span className="inline-block group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/447729213427"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#20BA5A] hover:from-[#20BA5A] hover:to-[#1DA851] text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Contact on WhatsApp
            </a>
            <a
              href="mailto:support@driveclear.co.uk"
              className="flex items-center gap-3 bg-brand-red hover:bg-brand-red/90 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 duration-300"
            >
              <Mail className="w-5 h-5" />
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
