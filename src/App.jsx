import { lazy, Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Collaboration from './components/Collaboration'
import Organizers from './components/Organizers'
import Speakers from './components/Speakers'
import Details from './components/Details'
import Registration from './components/Registration'
import Footer from './components/Footer'
import { useEnhancedMotion } from './hooks/useEnhancedMotion'

const Program3D = lazy(() => import('./components/Program3D'))
const ThreeBackground = lazy(() => import('./components/ThreeBackground'))
const ParticleTrail = lazy(() => import('./components/ParticleTrail'))

function App() {
    const enhancedMotion = useEnhancedMotion()

    return (
        <div className="App">
            {enhancedMotion && (
                <Suspense fallback={null}>
                    <ParticleTrail />
                    <ThreeBackground />
                </Suspense>
            )}
            <Header />
            <Hero />
            <Collaboration />
            <About />
            <Organizers />
            <Speakers />
            <Suspense
                fallback={
                    <section
                        id="program"
                        className="program-loading"
                        aria-label="Programme schedule loading"
                    />
                }
            >
                <Program3D enableEffects={enhancedMotion} />
            </Suspense>
            <Details />
            <Registration />
            <Footer />
        </div>
    )
}

export default App
