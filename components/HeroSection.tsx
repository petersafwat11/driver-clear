import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import HomeHeroSlideshow from "./HomeHeroSlideshow";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5, 6, 7, 0.7), rgba(5, 6, 7, 0.95))",
        }}
      >
        <HomeHeroSlideshow />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5, 6, 7, 0.3) 0%, rgba(5, 6, 7, 0.7) 50%, rgba(5, 6, 7, 0.95) 100%)",
          }}
        ></div>
      </div>

      <div className="relative z-10 w-full px-4 md:px-[60px] pt-32 md:pt-40 pb-20">
        <div className="max-w-[1320px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-20 h-px bg-brand-red"></div>
                <p className="text-base font-semibold uppercase">
                  <span className="text-white">Quick. Easy. </span>
                  <span className="text-brand-red">Anonymous.</span>
                </p>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-[70px] font-black leading-[115%] mb-8">
                <span className="text-white">
                  MAKE ALL TRAFFIC INFRACTIONS DISAPPEAR WITH ONE{" "}
                </span>
                <span className="text-brand-red">CLICK</span>
              </h1>

              <p className="text-white text-lg leading-[34px] mb-12 max-w-[678px]">
                Provide the relevant details and we will removal any infraction
                from your record. Our services are provided with a 100%
                money‑back guarantee. We also handle prior unsuccessful efforts
                to clear traffic infractions. DO NOT DELAY! ACT NOW!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <a
                href="#comprehensive-solutions"
                className="group bg-gradient-to-r from-brand-red to-brand-red/80 text-white text-sm font-bold px-9 py-4 rounded-xl hover:from-brand-red/90 hover:to-brand-red/70 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Zap className="w-5 h-5" />
                GET STARTED
              </a>
              <Link
                href="/speeding-offences"
                className="group text-white text-sm font-bold px-11 py-4 rounded-xl border-2 border-white/40 hover:border-white bg-white/5 hover:bg-white/10 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                EXPLORE SERVICES
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
