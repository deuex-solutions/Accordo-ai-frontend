import { useEffect, useRef, useState } from "react";
import { TrendingDown, Clock, ThumbsUp, Zap } from "lucide-react";

interface CounterProps {
  end: number;
  suffix: string;
  duration?: number;
}

const AnimatedCounter = ({ end, suffix, duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration / 16);
          timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [end, duration, hasAnimated]);

  return (
    <div ref={ref}>
      <span className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
        {count}
        {suffix}
      </span>
    </div>
  );
};

const differentiators = [
  {
    icon: TrendingDown,
    metric: 50,
    suffix: "%",
    label: "Cost Reduction",
    description:
      "Average savings on procurement costs through AI-optimized negotiations that find the best possible terms for every deal.",
  },
  {
    icon: Clock,
    metric: 24,
    suffix: "/7",
    label: "Always Available",
    description:
      "Round-the-clock autonomous negotiations ensure no opportunity is missed, regardless of time zones or business hours.",
  },
  {
    icon: ThumbsUp,
    metric: 90,
    suffix: "%",
    label: "Supplier Satisfaction",
    description:
      "Suppliers report overwhelmingly positive experiences. AI finds mutually beneficial Pareto outcomes, strengthening vendor relationships.",
  },
  {
    icon: Zap,
    metric: 10,
    suffix: "x",
    label: "Faster Deal Cycles",
    description:
      "Reduce negotiation timelines from weeks to hours. Handle thousands of vendor negotiations simultaneously with zero delay.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="landing-section bg-[#0B0F17] text-white py-24 border-t border-white/5 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="landing-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal" data-reveal="fade-up">
          <p className="text-primary-400 font-semibold text-xs md:text-sm uppercase tracking-wider mb-3">
            Proven Industry Impact
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
            Why Enterprise Leaders Choose Accordo AI
          </h2>
          <p className="text-base md:text-lg text-white/65 mx-auto font-Inter leading-relaxed">
            Delivering measurable commercial value, accelerated turnaround, and guaranteed policy compliance.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((diff) => {
            const IconComponent = diff.icon;
            return (
              <div
                key={diff.label}
                className="rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1 shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/20 border border-primary-500/30 flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6 text-primary-400" />
                </div>
                <AnimatedCounter end={diff.metric} suffix={diff.suffix} />
                <h3 className="text-lg font-bold text-white mt-2 mb-3">
                  {diff.label}
                </h3>
                <p className="text-sm text-white/60 font-Inter leading-relaxed">
                  {diff.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
