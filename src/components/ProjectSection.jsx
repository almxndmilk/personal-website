import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
    {
        id: 2,
        title: "Unix Shell",
        description:
            "A custom Unix shell built in C supporting foreground and background process execution, built-in commands (cd, pwd, exit, help), a 10-command history with re-execution via ! and !!, and SIGINT handling.",
        image: "/projects/shell.png",
        tags: ["C", "POSIX System Calls", "CMake"],
        demoUrl: "https://github.com/almxndmilk",
        githubUrl: "https://github.com/almxndmilk",
    },
    {
        id: 1,
        title: "Meowmino's Delivery",
        description:
            "Meowmino's Delivery is a 2D arcade style game featuring a point system, enemies, animations, and core gameplay mechanics.",
        image: "/projects/meowminos.png",
        tags: ["Java", "LibGDX", "Maven", "Waterfall"],
        demoUrl: "https://www.youtube.com/watch?v=gFfb3DsHz78",
        githubUrl: "https://github.com/almxndmilk/meowminos-delivery",

    },
    {
        id: 3,
        title: "Jobly",
        description:
            "Job hunting is exhausting. We saw peers spending hours tweaking resumes for each application. We wanted to make resume optimization as simple as using spell-check.",
        image: "/projects/jobly.png",
        tags: ["React", "TailwindCSS", "Typescript", "Supabase"],
        demoUrl: "https://jobly-website-five.vercel.app/",
        githubUrl: "https://github.com/almxndmilk/jobly-website",

    },

    {
        id: 4,
        title: "Tour Story",
        description:
            "Budget friendly tourism, just take a photo of a tourist attraction and Gemini AI will analyze an image, then a story will be returned, shown, and narrated to the user.",
        image: "/projects/tourstory.png",
        tags: ["ExpoGo", "Typescript", "JavaScript"],
        demoUrl: "https://github.com/almxndmilk/storm-hacks",
        githubUrl: "https://github.com/almxndmilk/storm-hacks",

    },
    {
        id: 5,
        title: "Study Café",
        description:
            "Study Café is a productivity web app designed to help students stay focused and develop effective study habits in a distraction-free environment.",
        image: "/projects/studycafe.png",
        tags: ["JavaScript", "HTML/CSS"],
        demoUrl: "https://almxndmilk.github.io/study-cafe/",
        githubUrl: "https://github.com/almxndmilk/study-cafe",

    },
]

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-1-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                    {" "}
                    Featured <span className="text-primary"> Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some recent projects!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div 
                            key={key} 
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6"> 
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                            <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a 
                                            href={project.demoUrl} 
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        > 
                                            <ExternalLink size={20}/> 
                                        </a>
                                        <a 
                                            href={project.githubUrl} 
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"> 
                                            <Github size={20} /> 
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="text-center mt-12">
                    <a className="button w-fit flex items-center mx-auto gap-2"
                    target="_blank" 
                    href="https://github.com/almxndmilk">
                        Check Out My GitHub <ArrowRight size={16} />
                    </a>
                </div>
            
            </div>
        </section>
    );
};