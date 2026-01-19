import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutMe"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectSection } from "../components/ProjectSection"

export const Home = () => {
    return <div className='min-h-screen '> 
        {/* Background */}
        
        {/* NavBar */}
        <Navbar />
        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
        </main>
        {/* Footer */}

    </div>
}