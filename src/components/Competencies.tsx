import { Target, Users, BarChart3, Heart } from "lucide-react";

const competencies = [
  {
    icon: Target,
    title: "Product Strategy & Vision",
    skills: [
      "Customer needs identification",
      "Market opportunity analysis",
      "Product roadmap development",
      "Competitive landscape assessment"
    ]
  },
  {
    icon: Users,
    title: "Cross-Functional Leadership",
    skills: [
      "Engineering collaboration",
      "Stakeholder alignment",
      "Consensus building across teams"
    ]
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decision Making",
    skills: [
      "KPI definition and tracking",
      "Performance metrics analysis",
      "Success criteria development"
    ]
  },
  {
    icon: Heart,
    title: "Customer-Centric Development",
    skills: [
      "User feedback integration",
      "Customer trust building",
      "Accessibility requirements",
      "User experience optimization"
    ]
  }
];

const metrics = [
  { value: "2×", label: "Engagement Increase", context: "Newsletter Redesign" },
  { value: "$2.5K+", label: "Cost Reduction", context: "500+ Files" },
  { value: "Fortune 500", label: "Strategic Influence", context: "Visa DPS" }
];

const Competencies = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Impact Metrics */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Measurable Impact
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
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

        {/* Core Competencies */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Core Competencies
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Skills developed through hands-on product management experience across diverse industries and contexts.
          </p>
        </div>

        {/* Competency Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  );
};

export default Competencies;
