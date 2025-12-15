import headshot from "@/assets/headshot.jpg";
import { Mail, Linkedin, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[50vh] hero-gradient flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-scale-in">
          <img
            src={headshot}
            alt="Brooke Istishin"
            className="w-52 h-52 md:w-64 md:h-64 rounded-full mx-auto object-cover border-4 border-primary-foreground/20 shadow-2xl"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 animate-fade-in-up">
          Brooke Istishin
        </h1>
        
        <p className="text-lg md:text-xl text-primary-foreground/80 font-light mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Product Management Portfolio
        </p>
        
        <p className="text-base md:text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
          Driving user-centered solutions through data-driven insights and cross-functional leadership
        </p>
        
        <div className="flex items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="mailto:brookeistishin@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground rounded-full transition-all duration-300 border border-primary-foreground/20"
          >
            <Mail className="w-4 h-4" />
            <span className="font-medium">Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/brooke-istishinlipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BmwSEQVjUSjGNUe9VQhDmbw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground text-primary rounded-full hover:bg-primary-foreground/90 transition-all duration-300 font-medium"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>
        
        <button
          onClick={scrollToProjects}
          className="animate-pulse-soft text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          aria-label="Scroll to projects"
        >
          <ChevronDown className="w-8 h-8 mx-auto" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
