import ProjectCard from "./ProjectCard";
import { useEffect, useRef, useState } from "react";
import rentalWireframe1 from "@/assets/Rental WireFrame (1).png";
import rentalWireframe2 from "@/assets/Rental WireFrame (2).png";
import sqlDashboard from "@/assets/SQL dashboard.png";
import sqlDatamodel from "@/assets/SQL datamodel.png";
import meritAidScreenshot from "@/assets/Screenshot 2025-12-11 073601.png";
import nestAthensKeyInsights from "@/assets/key_insights_dashboard (1).png";
import nestAthensScreenshot2 from "@/assets/Screenshot 2025-12-15 133710.png";
import nestAthensScreenshot3 from "@/assets/Screenshot 2025-12-15 133735.png";
import nestAthensScreenshot5 from "@/assets/Screenshot 2025-12-15 134726.png";

const projects = [
  {
    title: "AI Skills Gap Analysis in Early-Career Talent",
    date: "September 2025 - Present",
    organization: "Independent Research",
    description: "Investigating AI competency gaps between Terry College curriculum and employer expectations through structured literature review and stakeholder analysis.",
    responsibilities: [
      "Analyzed academic publications and industry reports to identify AI skill gaps in business education",
      "Build employer and recruiter personas by conducting executive focus groups to identify hiring expectations and top skills required in new talent",
      "Design and launch a targeted survey reaching 200+ Terry College recent graduates to gather insights on AI implementation, workforce training, and user behavior"
    ],
    achievements: [
      "Identified priority AI competencies",
      "Informed curriculum recommendations"
    ]
  },
  {
    title: "Nest Athens Early Stage Product Validation",
    date: "November 2025",
    team: "Team of 4",
    organization: "Class Project",
    description: "Designed customizable care package platform for UGA students, validating market fit through 50+ student surveys and business owner interviews.",
    responsibilities: [
      "Conducted 2 interview rounds and surveyed 50+ students on demand, pricing, preferences",
      "Designed end-to-end user journey (landing → customization → checkout → delivery)",
      "Performed competitor analysis against local boutique offerings"
    ],
    technicalDetails: [
      "Built UX flows and wireframes for customization interface",
      "Analyzed survey data for pricing optimization (35-$50  range)"
    ],
    achievements: [
      "Market-backed product strategy",
      "Validated demand quantitatively"
    ],
    images: [nestAthensScreenshot2, nestAthensScreenshot3, nestAthensScreenshot5, nestAthensKeyInsights]
  },
  {
    title: "Frontier Airlines CX Redesign Strategy",
    date: "October 2025",
    team: "Team of 8",
    organization: "Class Project",
    description: "Developed 3-part product solution (predictive delay AI, UX overhaul, loyalty redesign) addressing Frontier's 3-year complaint leadership among U.S. airlines.",
    responsibilities: [
      "Mapped 2021–2025 customer pain-point timeline and end-to-end travel journey",
      "Benchmarked delay metrics and UX reliability against Spirit, Allegiant, Southwest",
      "Built data visualizations using DOT/BTS datasets"
    ],
    technicalDetails: [
      "Created C-suite presentation deck and executive one-pager",
      "Analyzed complaints per 100k passengers and delay patterns"
    ],
    achievements: [
      "Linked UX failures to operations",
      "Industry-grade competitive analysis"
    ]
  },
  {
    title: "Cerity Partners Workflow Automation Optimization",
    date: "June - August 2025",
    team: "Team of 6 interns",
    organization: "4 Offices",
    description: "Led cross-functional coordination during MG Pro → eMoney migration, optimizing workflows across 500+ client files.",
    responsibilities: [
      "Coordinated cross-functional deliverables, timelines, and communication across four offices",
      "Mapped the end-to-end migration workflow with SMEs and translated pain points into clear technical requirements",
      "Acted as primary bridge between financial planners and developers, ensuring alignment on scope and data needs",
      "Challenged manual-entry approach by working with developers to assess API capabilities and advocate for a more scalable migration strategy"
    ],
    achievements: [
      "API-driven migration method",
      "$2,500+ cost reduction",
      "Streamlined migration process"
    ],
    hasNda: true
  },
  {
    title: "Merit Aid and Entrepreneurship Correlation Study",
    date: "January - May 2025",
    organization: "Independent Research",
    description: "Shaped methodology for Kauffman Foundation Knowledge Challenge-funded study examining correlation between merit aid and entrepreneurial outcomes. Advised under UGA Executive MBA Professor, Dr. Susan Cohen.",
    responsibilities: [
      "Analyzed 30+ publications on merit aid, entrepreneurship, and student outcomes",
      "Built analytical frameworks for financial aid-entrepreneurship relationships",
      "Defined research approach and problem definition"
    ],
    achievements: [],
    images: [
      {
        src: meritAidScreenshot,
        link: "https://news.gsu.edu/2022/09/22/georgias-flagship-research-universities-share-grant-to-study-link-between-hope-scholarship-entrepreneurship/"
      }
    ],
    imagesHeading: "Read more"
  },
  {
    title: "Visa DPS Product Strategy",
    date: "January - May 2025",
    team: "Team of 5",
    organization: "Terry Student Consulting",
    description: "Delivered biweekly strategic recommendations on processor ecosystem challenges, influencing Visa DPS market assessment.",
    responsibilities: [
      "Conducted stakeholder interviews, synthesized pain points across onboarding and settlement",
      "Benchmarked Stripe, Marqeta, Fiserv, Global Payments on differentiators and pricing",
      "Translated interviews into prioritized problem statements"
    ],
    technicalDetails: [
      "Built competitive matrices and opportunity sizing using Think-Cell"
    ],
    achievements: [
      "Influenced Visa DPS assessment",
      "Fortune 500 strategic impact"
    ],
    hasNda: true
  },
  {
    title: "Retail Analytics Dashboard MVP Development",
    date: "October - December 2024",
    team: "Team of 5",
    organization: "Class Project",
    description: "Built analytics ecosystem providing leadership visibility into inventory, orders, and store performance.",
    responsibilities: [
      "Gathered requirements across customer behavior, inventory, employee workflows",
      "Mapped user journey: customer → order → database → manager dashboard",
      "Benchmarked against Starbucks/Dunkin' analytics standards"
    ],
    technicalDetails: [
      "Built relational database: 12 entities, 20 relationships",
      "Authored 10 SQL queries for managerial insights",
      "Created Tableau dashboard for trends and supply chain indicators"
    ],
    achievements: [
      "Data-driven store priorities",
      "SQL + BI skills demonstrated"
    ],
    images: [sqlDashboard, sqlDatamodel]
  },
  {
    title: "Blackwell Mortgage Customer Engagement Research",
    date: "June - August 2024",
    organization: "Individual Intern",
    description: "Redesigned newsletter and CRM workflows, mapping customer journey from email to consultation.",
    responsibilities: [
      "Redesigned newsletter content for improved clarity and engagement",
      "Mapped customer journey: email → CTA → scheduling → CRM workflow",
      "Benchmarked regional mortgage lenders on CRM touchpoints"
    ],
    technicalDetails: [
      "Rebuilt templates in BNTouch CRM with improved segmentation and automation",
      "Applied UX writing principles to headers, CTAs, information hierarchy"
    ],
    achievements: [
      "2× customer engagement",
      "Enhanced brand visibility"
    ],
    hasNda: true
  },
  {
    title: "Sustainable Clothing Rental",
    date: "February - March 2024",
    team: "Team of 4",
    organization: "Class Project",
    description: "Identified market gap for local rental platforms. Designed sustainable clothing rental app for Athens students with complete UX design and business model.",
    responsibilities: [
      "Designed end-to-end user journey (browse → reserve → pickup → return → review)",
      "Developed pricing logic ($10–$40) based on competitor analysis and affordability",
      "Analyzed DressyClub and Pickle as category competitors"
    ],
    technicalDetails: [
      "Built wireframes, business model, data management model",
      "Created WBS, requirements documentation, process models"
    ],
    achievements: [],
    images: [rentalWireframe2]
  }
];

const ProjectTimeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [scrollDotPosition, setScrollDotPosition] = useState(0);
  const [currentDate, setCurrentDate] = useState(projects[0]?.date || "");

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const projectElements = timelineRef.current.querySelectorAll('[data-date]');

      // Find which project is currently centered in viewport
      let activeProject = projectElements[0];
      let minDistance = Infinity;

      projectElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const distance = Math.abs(elementCenter - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          activeProject = element;
        }
      });

      // Update current date from active project
      if (activeProject) {
        const date = activeProject.getAttribute('data-date');
        if (date) setCurrentDate(date);
      }

      // Calculate dot position relative to timeline
      if (activeProject) {
        const projectRect = activeProject.getBoundingClientRect();
        const relativeTop = projectRect.top - timelineRect.top;
        setScrollDotPosition(relativeTop);
      }
    };

    // Initial calculation
    handleScroll();

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Project Experience
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A timeline of product management work spanning strategy, research, technical implementation, and measurable outcomes.
          </p>
        </div>

        <div ref={timelineRef} className="relative pl-2">
          {/* Timeline line */}
          <div className="timeline-line" />

          {/* Scrolling dot with date label */}
          <div
            className="absolute left-0 flex items-center transition-all duration-300 ease-out"
            style={{
              top: `${scrollDotPosition}px`,
              zIndex: 20
            }}
          >
            <div className="timeline-dot animate-pulse-soft" />
            <div className="timeline-date-label">
              <span className="timeline-date-text">{currentDate}</span>
            </div>
          </div>

          {/* Projects */}
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;