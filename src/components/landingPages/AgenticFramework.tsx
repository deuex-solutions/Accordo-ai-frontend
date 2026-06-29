import { Cpu, ShieldCheck, BrainCircuit, FileCheck, Sparkles, ArrowRight, Layers, Lock } from "lucide-react";

const agentTeams = [
  {
    badge: "Agent Team 01",
    name: "Intake & Policy Agent",
    icon: ShieldCheck,
    color: "from-blue-500 to-cyan-400",
    shadow: "shadow-blue-500/20",
    bgLight: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    description: "Enforces strict organizational compliance, budget ceilings, and air-gapped data boundaries prior to negotiation entry.",
    capabilities: [
      "Strict Max Acceptable Price ceiling enforcement",
      "Air-gapped compliance & security validation",
      "Automated vendor qualification & verification"
    ]
  },
  {
    badge: "Agent Team 02",
    name: "Market Intelligence Agent",
    icon: BrainCircuit,
    color: "from-purple-500 to-indigo-400",
    shadow: "shadow-purple-500/20",
    bgLight: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    description: "Parses vendor behavioral profiles, historical concession patterns, and real-time market indices to inform strategic counter-offers.",
    capabilities: [
      "Vendor concession velocity profiling",
      "Historical sentiment & phrasing pattern analysis",
      "Real-time commodity index benchmarking"
    ]
  },
  {
    badge: "Agent Team 03",
    name: "Strategy & MESO Engine Agent",
    icon: Cpu,
    color: "from-emerald-500 to-teal-400",
    shadow: "shadow-emerald-500/20",
    bgLight: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    description: "Executes Pareto-optimal Multi-Attribute Utility Theory (MAUT) game theory to generate Multiple Equivalent Simultaneous Offers.",
    capabilities: [
      "Pareto-optimal MESO trade-off bundle generation",
      "Dynamic round-by-round gap closure algorithm",
      "Multi-attribute utility optimization (Price, Terms, Delivery)"
    ]
  },
  {
    badge: "Agent Team 04",
    name: "Output & Compliance Synthesis Agent",
    icon: FileCheck,
    color: "from-amber-500 to-orange-400",
    shadow: "shadow-amber-500/20",
    bgLight: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    description: "Synthesizes final legal agreements, renders human-readable decision explainability logs, and triggers multi-level management approvals.",
    capabilities: [
      "Automated legal agreement & PO synthesis",
      "Multi-tier Human-in-the-Loop (HITL) escalation triggers",
      "Complete cryptographic audit trail generation"
    ]
  }
];

const AgenticFramework = () => {
  return (
    <section id="agentic-framework" className="landing-section bg-[#0B0F17] text-white relative overflow-hidden py-24">
      {/* Dynamic Background Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-primary-600/15 via-indigo-600/15 to-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:32px_32px] pointer-events-none" />

      <div className="landing-container relative z-10">
        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 scroll-reveal" data-reveal="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs md:text-sm font-semibold tracking-wide uppercase mb-6 shadow-lg shadow-primary-500/10">
            <Sparkles className="w-4 h-4 text-primary-400 animate-pulse" />
            <span>Next-Gen Enterprise Architecture</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Powered by an Autonomous{" "}
            <span className="bg-gradient-to-r from-primary-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              Agentic AI Framework
            </span>
          </h2>
          
          <p className="text-base md:text-lg text-white/70 leading-relaxed font-Inter">
            Unlike legacy static bots or basic LLM prompts, Accordo AI deploys a stateful{" "}
            <strong className="text-white font-semibold">LangGraph Directed Acyclic Graph (DAG)</strong> network. 
            Four specialized AI agent swarms work concurrently to execute enterprise negotiations with mathematical precision.
          </p>
        </div>

        {/* 4 Agent Teams Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {agentTeams.map((team) => {
            const IconComponent = team.icon;
            return (
              <div
                key={team.name}
                className={`relative group rounded-2xl bg-white/[0.03] backdrop-blur-xl border ${team.borderColor} p-8 hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl ${team.shadow}`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-xl ${team.bgLight} border ${team.borderColor} flex items-center justify-center`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
                    {team.badge}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight flex items-center gap-2">
                  {team.name}
                </h3>

                <p className="text-sm md:text-base text-white/65 leading-relaxed mb-6 font-Inter">
                  {team.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  {team.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-white/80 font-Inter">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Competitor Edge Highlight Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-primary-900/40 via-indigo-900/40 to-slate-900/40 border border-primary-500/30 p-8 md:p-12 relative overflow-hidden shadow-2xl backdrop-blur-2xl">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 text-primary-400 text-xs font-bold tracking-wider uppercase mb-3">
                <Lock className="w-4 h-4" />
                <span>Enterprise Governance & Game Theory</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Why Accordo Agentic AI Outperforms Competitors
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed font-Inter mb-4">
                While solutions like Pactum AI and Lio AI rely on heavy custom scripting or generic prompts, Accordo operates under the strictly validated <strong className="text-white">"Engine as Pure Tools"</strong> paradigm. Mathematical utility algorithms guarantee zero hallucinated pricing while providing suppliers win-win Pareto MESO choices.
              </p>
              <div className="flex flex-wrap gap-4 text-xs md:text-sm text-white/90 font-medium">
                <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-cyan-400" /> 100% Deterministic Guardrails
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-indigo-400" /> Pareto MESO Bundle Generation
                </span>
              </div>
            </div>

            <div className="flex justify-start lg:justify-end">
              <a
                href="#final-cta"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-indigo-600 text-white font-bold text-sm md:text-base hover:from-primary-400 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-[1.02]"
              >
                <span>Deploy Agentic AI</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgenticFramework;
