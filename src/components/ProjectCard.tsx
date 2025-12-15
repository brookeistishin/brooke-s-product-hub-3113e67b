import { Calendar, Users, Building2, FileText, X } from "lucide-react";
import { useState, useEffect } from "react";

type ImageType = string | { src: string; link?: string; width?: string };

interface ProjectCardProps {
  title: string;
  date: string;
  team?: string;
  organization?: string;
  description: string;
  responsibilities: string[];
  technicalDetails?: string[];
  achievements: string[];
  images?: ImageType[];
  imagesHeading?: string;
  hasNda?: boolean;
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
  imagesHeading = "Project Deliverables",
  hasNda,
  index,
}: ProjectCardProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close modal on ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

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
        {achievements.length > 0 && (
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
        )}

        {/* Project Images */}
        {images && images.length > 0 && (
          <div className="pt-5 mt-5 border-t border-border">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
              {imagesHeading}
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, i) => {
                const imageSrc = typeof image === 'string' ? image : image.src;
                const imageLink = typeof image === 'object' ? image.link : undefined;
                const imageWidth = typeof image === 'object' && image.width ? image.width : 'w-full';

                if (imageSrc.endsWith('.pdf')) {
                  return (
                    <a
                      key={i}
                      href={imageSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border"
                    >
                      <FileText className="w-6 h-6 text-accent" />
                      <span className="text-sm text-foreground font-medium">View Project Documentation (PDF)</span>
                    </a>
                  );
                } else if (imageLink) {
                  return (
                    <a
                      key={i}
                      href={imageLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block cursor-pointer hover:opacity-90 transition-opacity"
                    >
                      <img
                        src={imageSrc}
                        alt={`${title} deliverable ${i + 1}`}
                        className={`${imageWidth} rounded-lg border border-border shadow-sm`}
                      />
                    </a>
                  );
                } else {
                  return (
                    <div
                      key={i}
                      onClick={() => setSelectedImage(imageSrc)}
                      className="block cursor-pointer hover:opacity-90 transition-opacity"
                    >
                      <img
                        src={imageSrc}
                        alt={`${title} deliverable ${i + 1}`}
                        className={`${imageWidth} rounded-lg border border-border shadow-sm`}
                      />
                    </div>
                  );
                }
              })}
            </div>
          </div>
        )}

        {/* NDA Notice */}
        {hasNda && (
          <p className="text-xs text-muted-foreground italic mt-4 pt-4 border-t border-border">
            * Project images cannot be displayed due to NDA restrictions
          </p>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img
            src={selectedImage}
            alt={title}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
