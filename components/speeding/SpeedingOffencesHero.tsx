import { PoundSterling } from "lucide-react";
import ImageSlideshow from "./ImageSlideshow";

export default function SpeedingOffencesHero() {
  return (
    <section className="relative min-h-[750px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 h-[700px]">
        <ImageSlideshow />
      </div>

      <div className="relative z-10 w-full px-4 md:px-[60px] py-20 flex items-center">
        <div className="max-w-[1320px] mx-auto w-full">
          <div className="max-w-[650px]">
            <h1 className="text-white font-['Chakra_Petch'] text-5xl md:text-[70px] font-bold tracking-[2.8px] leading-tight mb-6">
              SPEEDING OFFENCE REMOVALS
            </h1>
            <p className="text-white text-lg leading-[34px] mb-12">
              Expert legal assistance for speeding ticket violations. We&apos;ve
              helped thousands get their cases resolved. Let us get yours sorted
              too. With our proven track record, we&apos;re confident we&apos;ll get you
              the best possible outcome.
            </p>
            <a
              href="#speeding-tickets"
              className="inline-flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-white text-white font-bold text-base rounded-xl hover:bg-white/10 hover:border-white/80 transition-all duration-300"
            >
              <PoundSterling className="w-5 h-5" />
              <span>VIEW PRICING</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
