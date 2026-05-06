import { useState } from "react";
import { cn } from '@/lib/utils'; 

const skills = [ 
    // Languages
    { name: "Python", level: 100, category: "languages" },
    { name: "C", level: 100, category: "languages" },
    { name: "C++", level: 100, category: "languages" },
    { name: "Java", level: 100, category: "languages" },
    { name: "JavaScript", level: 100, category: "languages" },
    { name: "TypeScript", level: 100, category: "languages" },
    { name: "HTML/CSS", level: 100, category: "languages" },
    { name: "UML", level: 100, category: "languages" },
    
    // Tools
    { name: "Git/Github", level: 100, category: "tools" },
    { name: "Matlab", level: 100, category: "tools" },
    { name: "VS Code", level: 100, category: "tools" },
    { name: "LaTeX", level: 100, category: "tools" },
    { name: "Docker", level: 100, category: "tools" },
    { name: "Microsoft Office (Word, Outlook, Excel, Powerpoint)", level: 100, category: "tools" },
]

const categories = ["all", "languages", "tools"]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return (
    <section 
        id="skills" 
        className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills </span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button 
                        key={key} 
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"

                        )}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div 
                        key={key} 
                        className="bg-card p-6 rounded-lg shadows-xs card-hover"
                    > 
                        <div className="text-left">
                            <h3 className="font-semibold text-lg"> {skill.name} </h3>
                        </div>
                        <div>

                        </div>

                    </div>

                ))}
            </div>
        </div>
    </section>
);
}