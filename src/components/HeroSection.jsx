import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section 
            id="hero" 
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="flex flex-col md:flex-row items-center gap-20">
                    {/* LEFT — Profile Image */}
                    <div className="flex-shrink-0 opacity-0 animate-fade-in">
                        <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-1 border-primary shadow-lg">
                            <img 
                                src="/projects/profilepicprofessional.jpg" 
                                alt="Samantha Gan"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* RIGHT — Text Content */}
                    <div className="space-y-6 text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                            <span className="text-primary opacity-0 animate-fade-in-delay-1"> 
                                {" "}
                                Samantha
                            </span>
                            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                                Gan
                            </span>
                        </h1>

                        <p className="text-lg md-text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                            Welcome to my profile! Make yourself comfortable :)
                        </p>

                        <div className="pt-4 opacity-0 space-x-3 animate-fade-in-delay-4 ">
                            <a 
                                href="https://www.linkedin.com/in/samanthagan028/" 
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-color duration-300"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Linkedin
                            </a>
                            
                            <a 
                                href="/SamanthaGanResumeSpring2026.pdf"
                                className="button"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                My Resume
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2"> View More </span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>
        </section>

    );
}