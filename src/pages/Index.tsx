import Hero from "@/components/Hero";
import ProjectTimeline from "@/components/ProjectTimeline";
import Competencies from "@/components/Competencies";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProjectTimeline />
      <Competencies />
      <Contact />
      
      {/* Footer */}
      <footer className="py-6 px-6 bg-primary text-center">
        <p className="text-primary-foreground/60 text-sm">
          © {new Date().getFullYear()} Brooke Istishin. Built with purpose.
        </p>
      </footer>
    </main>
  );
};

export default Index;
