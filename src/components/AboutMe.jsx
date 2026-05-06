import { GraduationCap, Coffee, User } from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold"> Student, Leader, Developer </h3>
                    <p className="text-muted-foreground">
                        Hello! My name is Samantha and I'm currently a third-year student studying Computing Science and FinTech at
                        Simon Fraser University. 
                    </p>

                    <p className="text-muted-foreground">
                        I’ve always been interested in how technology can improve everyday experiences, 
                        especially in areas like finance, design, and digital products.
                    </p>

                    <p className="text-muted-foreground">
                        Outside of school, I enjoy working on creative projects, learning new skills, and collaborating with others. 
                        Through leadership roles, work experience, and personal projects, I’m continuing to grow both technically and 
                        personally.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="button"> Get In Touch </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <GraduationCap className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Education </h4>
                                <p className="text-muted-foreground">
                                    Third-year Computing Science student at Simon Fraser University, 
                                    enrolled in the SFU–Zhejiang University Dual Degree Program.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Experience </h4>
                                <p className="text-muted-foreground">
                                    Involved as a student leader, part-time barista, and a 
                                    volunteer, with a focus on teamwork and organization.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Coffee className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Interests </h4>
                                <p className="text-muted-foreground">
                                    Enjoy staying active at the gym, snowboarding, café hopping, 
                                    and spending time with friends.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* add a modal */}
}