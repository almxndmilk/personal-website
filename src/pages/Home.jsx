import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutMe"

import { ImageCardStack } from "../components/ImageStack"

import { SkillsSection } from "../components/SkillsSection"
import { ProjectSection } from "../components/ProjectSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"

export const Home = () => {
    return <div className='min-h-screen bg-background'> 
        {/* Background */}
        
        {/* NavBar */}
        <Navbar />
        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <ImageCardStack />
            <SkillsSection />
            <ProjectSection />
            <ContactSection />
        </main>
        {/* Footer */}
        <Footer />

    </div>
}