import { Calendar, Users, Building2, FileText } from "lucide-react";

interface ProjectCardProps {
  title: string;
  date: string;
  team?: string;
  organization?: string;
  description: string;
  responsibilities: string[];
  technicalDetails?: string[];
  achievements: string[];
  images?: string[];
  index: number;
}

const ProjectCard = ({
  title,
  date,
  team,
  organization,
  description,
  responsibilities,
  technicalDetails,
  achievements,
  images,
  index,
}: ProjectCardProps) => {
  return (
    <div className="relative pl-16 pb-12 last:pb-0" data-date={date}>
      
      {/* Project card */}
      <div className="project-card">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-3">
            {title}
          </h3>
          
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-accent" />
              {date}
            </span>
            {team && (
              <span className="inline-flex items-center gap-1.5">
                <Users className="w-4 h-4 text-accent" />
                {team}
              </span>
            )}
            {organization && (
              <span className="inline-flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-accent" />
                {organization}
              </span>
            )}
          </div>
        </div>
        
        {/* Description */}
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        
        {/* Responsibilities */}
        <div className="mb-5">
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
            Key Responsibilities
          </h4>
          <ul className="space-y-2">
            {responsibilities.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Technical Details */}
        {technicalDetails && technicalDetails.length > 0 && (
          <div className="mb-5">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
              Technical Implementation
            </h4>
            <ul className="space-y-2">
              {technicalDetails.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Achievements */}
        <div className="pt-4 border-t border-border">
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
            Key Achievements
          </h4>
          <div className="flex flex-wrap gap-2">
            {achievements.map((achievement, i) => (
              <span key={i} className="tag">
                {achievement}
              </span>
            ))}
          </div>
        </div>

        {/* Project Images */}
        {images && images.length > 0 && (
          <div className="pt-5 mt-5 border-t border-border">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
              Project Deliverables
            </h4>
            <div className="grid gap-4">
              {images.map((image, i) => (
                image.endsWith('.pdf') ? (
                  <a 
                    key={i} 
                    href={image} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border"
                  >
                    <FileText className="w-6 h-6 text-accent" />
                    <span className="text-sm text-foreground font-medium">View Project Documentation (PDF)</span>
                  </a>
                ) : (
                  <img
                    key={i}
                    src={image}
                    alt={`${title} deliverable ${i + 1}`}
                    className="w-1/2 rounded-lg border border-border shadow-sm"
                  />
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
