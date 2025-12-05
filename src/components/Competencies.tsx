import { Target, Search, Code, TrendingUp } from "lucide-react";

const competencies = [
  {
    icon: Target,
    title: "Product Strategy",
    skills: [
      "Cross-functional leadership (6-8 person teams)",
      "Competitive benchmarking and market positioning",
      "End-to-end user journey mapping"
    ]
  },
  {
    icon: Search,
    title: "Research & Validation",
    skills: [
      "50+ user surveys and interviews",
      "Stakeholder synthesis and pain point analysis",
      "Data-driven decision frameworks"
    ]
  },
  {
    icon: Code,
    title: "Technical Skills",
    skills: [
      "SQL, Tableau, data modeling",
      "CRM platforms (BNTouch, eMoney)",
      "Workflow optimization and migration management"
    ]
  }
];

const metrics = [
  { value: "2×", label: "Engagement Increase", context: "CRM Redesign" },
  { value: "$2.5K+", label: "Cost Reduction", context: "500+ Files" },
  { value: "Top 3", label: "National Ranking", context: "4 Awards" },
  { value: "Fortune 500", label: "Strategic Influence", context: "Visa DPS" }
];

const Competencies = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Core Competencies
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Skills developed through hands-on product management experience across diverse industries and contexts.
          </p>
        </div>
        
        {/* Competency Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {competencies.map((comp, index) => (
            <div key={index} className="project-card">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <comp.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-4">{comp.title}</h3>
              <ul className="space-y-2">
                {comp.skills.map((skill, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Impact Metrics */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-display font-semibold text-foreground mb-2">
            Measurable Impact
          </h3>
          <div className="w-16 h-0.5 bg-accent mx-auto" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="metric-card">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-foreground mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {metric.context}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competencies;
