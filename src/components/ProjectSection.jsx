
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Jobly",
        description:
            "Job hunting is exhausting. We saw peers spending hours tweaking resumes for each application, often missing keywords that get them past automated screening. We wanted to make resume optimization as simple as using spell-check.",
        image: "/projects/jobly.png",
        tags: ["React", "TailwindCSS", "Typescript", "Supabase"],
        demoUrl: "#",
        githubUrl: "#",

    },

    {
        id: 2,
        title: "Tour Story",
        description:
            "Budget friendly tourism, just take a photo of a tourist attraction and Gemini AI will analyze an image, then a story will be returned and shown to the user. The app can then narrate the story to the user.",
        image: "/projects/tourstory.png",
        tags: ["ExpoGo", "Typescript", "JavaScript"],
        demoUrl: "#",
        githubUrl: "#",

    },
    {
        id: 3,
        title: "Study Café",
        description:
            "Study Café is a productivity web app designed to help students stay focused and develop effective study habits in a distraction-free environment.",
        image: "/projects/studycafe.png",
        tags: ["JavaScript", "HTML/CSS"],
        demoUrl: "#",
        githubUrl: "#",

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
                            </div>

                            <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between item-center">
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
                    ))}

                </div>
            </div>
        </section>
    );
};