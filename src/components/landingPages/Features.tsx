import { Brain, Users, FileText, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Driven Negotiation Strategies",
    description:
      "Harness the power of machine learning and LangGraph state machines to automate and optimize negotiation tactics. Our AI understands complex bargaining scenarios and adapts in real-time to secure the best outcomes for your organization.",
    bullets: [
      "Utility-based decision engine with full explainability",
      "Real-time strategy adaptation per vendor profile",
      "Automated offer parsing and counter-proposals",
    ],
  },
  {
    icon: Users,
    title: "Multi-Vendor Management Swarm",
    description:
      "Manage thousands of vendor negotiations simultaneously from a single dashboard. Compare bids, track progress, and ensure consistent procurement standards across your entire supply chain.",
    bullets: [
      "Centralized vendor dashboard and analytics",
      "Simultaneous parallel agent negotiations",
      "Automated bid comparison and ranking",
    ],
  },
  {
    icon: FileText,
    title: "Instant Legal Contract Generation",
    description:
      "Automate contract creation in real time. Once terms are agreed upon, generate compliant procurement contracts instantly — minimizing errors and accelerating your deal cycle from weeks to hours.",
    bullets: [
      "AI-assisted legal document synthesis",
      "Template-based contract workflows",
      "Compliance-ready output with cryptographic audit trails",
    ],
  },
  {
    icon: BarChart3,
    title: "Real-Time Bid Analysis & MAUT Scoring",
    description:
      "Make data-driven procurement decisions with comprehensive bid analysis. Evaluate vendors across multiple dimensions, identify the best offers, and track your savings with powerful analytics.",
    bullets: [
      "Multi-criteria Multi-Attribute Utility Theory (MAUT) scoring",
      "Automated Pareto top-bid identification",
      "Historical negotiation pattern insights",
    ],
  },
];

const Features = () => {
  return (
    <section id="features" className="landing-section bg-[#0B0F17] text-white py-24 relative overflow-hidden border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="landing-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 scroll-reveal" data-reveal="fade-up">
          <p className="text-primary-400 font-semibold text-xs md:text-sm uppercase tracking-wider mb-3">
            Core Platform Capabilities
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Everything You Need to Transform Enterprise Procurement
          </h2>
          <p className="text-base md:text-lg text-white/65 mx-auto font-Inter leading-relaxed">
            From autonomous agentic negotiations to real-time analytics, Accordo AI gives 
            your procurement team the power to close better deals, faster.
          </p>
        </div>

        {/* Alternating Feature Blocks */}
        <div className="space-y-20 md:space-y-28">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={feature.title}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  isReversed ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Text Content */}
                <div
                  className={`${isReversed ? "lg:order-2" : "lg:order-1"} scroll-reveal`}
                  data-reveal={isReversed ? "fade-left" : "fade-right"}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg shadow-primary-500/10">
                      <Icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <span className="text-xs font-semibold text-primary-400 uppercase tracking-wider">
                      Capability {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-white/65 leading-relaxed mb-6 font-Inter text-sm md:text-base">
                    {feature.description}
                  </p>

                  <ul className="space-y-3">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm text-white/80 font-Inter">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual / Illustration */}
                <div
                  className={`${isReversed ? "lg:order-1" : "lg:order-2"} scroll-reveal`}
                  data-reveal={isReversed ? "fade-right" : "fade-left"}
                  data-reveal-delay="100"
                >
                  <div className="relative">
                    <div className="bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-10 shadow-2xl">
                      <div className="bg-[#0F1629] rounded-xl border border-white/10 overflow-hidden shadow-inner">
                        {/* Mini dashboard visual per feature */}
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center border border-primary-500/30">
                              <Icon className="w-5 h-5 text-primary-400" />
                            </div>
                            <div>
                              <div className="h-3 w-28 bg-white/20 rounded" />
                              <div className="h-2 w-20 bg-white/10 rounded mt-1.5" />
                            </div>
                          </div>

                          {/* Feature-specific visual */}
                          {index === 0 && (
                            <div className="space-y-3">
                              {["Optimal", "Strong", "Moderate"].map((level, i) => (
                                <div key={level} className="flex items-center gap-3">
                                  <span className="text-xs text-white/60 w-16 font-Inter">{level}</span>
                                  <div className="flex-1 bg-white/10 rounded-full h-2.5 overflow-hidden">
                                    <div
                                      className="bg-gradient-to-r from-primary-500 to-indigo-400 h-2.5 rounded-full transition-all"
                                      style={{ width: `${90 - i * 20}%` }}
                                    />
                                  </div>
                                  <span className="text-xs font-semibold text-white w-10 text-right font-Inter">
                                    {90 - i * 20}%
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}

                          {index === 1 && (
                            <div className="grid grid-cols-2 gap-3">
                              {[
                                { vendor: "Vendor A", status: "Active", amount: "$240K" },
                                { vendor: "Vendor B", status: "Pending", amount: "$185K" },
                                { vendor: "Vendor C", status: "Active", amount: "$320K" },
                                { vendor: "Vendor D", status: "Closed", amount: "$95K" },
                              ].map((v) => (
                                <div key={v.vendor} className="bg-white/5 border border-white/10 rounded-lg p-3">
                                  <p className="text-xs font-semibold text-white">{v.vendor}</p>
                                  <p className="text-[10px] text-white/50 mt-0.5 font-Inter">{v.status} &middot; {v.amount}</p>
                                </div>
                              ))}
                            </div>
                          )}

                          {index === 2 && (
                            <div className="space-y-2">
                              <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex items-center gap-3">
                                <FileText className="w-4 h-4 text-primary-400" />
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs font-medium truncate text-white">Vendor_Agreement_v2.pdf</p>
                                </div>
                                <span className="text-xs font-medium text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full whitespace-nowrap border border-emerald-500/30">Generated</span>
                              </div>
                              <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex items-center gap-3">
                                <FileText className="w-4 h-4 text-indigo-400" />
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs font-medium truncate text-white">Supply_Contract_Draft.pdf</p>
                                </div>
                                <span className="text-xs font-medium text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded-full whitespace-nowrap border border-amber-500/30">In Review</span>
                              </div>
                            </div>
                          )}

                          {index === 3 && (
                            <div className="space-y-3">
                              <div className="flex items-end gap-1.5 h-20">
                                {[35, 55, 42, 68, 50, 75, 62, 80].map((h, i) => (
                                  <div key={i} className="flex-1 rounded-t bg-white/10 overflow-hidden" style={{ height: `${h}%` }}>
                                    <div className="w-full rounded-t h-full bg-gradient-to-t from-primary-600 to-indigo-400" style={{ opacity: 0.8 }} />
                                  </div>
                                ))}
                              </div>
                              <div className="flex justify-between">
                                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((month) => (
                                  <span key={month} className="text-xs font-Inter text-white/50">{month}</span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
