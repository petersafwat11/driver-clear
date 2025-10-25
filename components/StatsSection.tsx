import { Clock, TrendingUp, Users, Shield, Zap, PoundSterling } from "lucide-react";

const stats = [
  {
    icon: Clock,
    title: "12 Hour Completion",
    description: "Fast turnaround time for all services"
  },
  {
    icon: TrendingUp,
    title: "95% Success Rate",
    description: "Proven track record of removing infractions"
  },
  {
    icon: Users,
    title: "400+ Happy Clients",
    description: "Trusted by hundreds of satisfied customers"
  },
  {
    icon: Shield,
    title: "100% Money Back Guarantee",
    description: "Full refund if we can't help you"
  },
  {
    icon: Zap,
    title: "Fast & Efficient",
    description: "Streamlined process for quick results"
  },
  {
    icon: PoundSterling,
    title: "Very Cheap Prices",
    description: "Affordable rates without compromising quality"
  }
];

export default function StatsSection() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-[60px] bg-brand-dark relative">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #B80000 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      ></div>
      
      <div className="max-w-[1320px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-20 h-px bg-brand-red"></div>
            <p className="text-brand-red text-sm font-semibold uppercase tracking-wider">Why Choose Us</p>
            <div className="w-20 h-px bg-brand-red"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            DONE REMOTELY & <span className="text-brand-red">ANONYMOUS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We provide professional, confidential services with guaranteed results. Your privacy and satisfaction are our top priorities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-brand-red/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-brand-red/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-red/20 transition-colors">
                <stat.icon className="w-8 h-8 text-brand-red" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{stat.title}</h3>
              <p className="text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
