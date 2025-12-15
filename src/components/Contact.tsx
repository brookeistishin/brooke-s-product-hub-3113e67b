import { Mail, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 hero-gradient">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
          Let's Connect
        </h2>
        <p className="text-primary-foreground/70 mb-8">
          I'm always interested in discussing product management opportunities, research collaborations, or sharing insights on user-centered design.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="mailto:brookeistishin@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground text-primary rounded-full hover:bg-primary-foreground/90 transition-all duration-300 font-medium w-full sm:w-auto justify-center"
          >
            <Mail className="w-4 h-4" />
            brookeistishin@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/brooke-istishinlipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BmwSEQVjUSjGNUe9VQhDmbw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground rounded-full transition-all duration-300 border border-primary-foreground/20 font-medium w-full sm:w-auto justify-center"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn Profile
          </a>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-primary-foreground/60 text-sm">
          <MapPin className="w-4 h-4" />
          <span>Athens, Georgia • University of Georgia</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
