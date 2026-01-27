import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Collaboration from './components/Collaboration'
import Organizers from './components/Organizers'
import Speakers from './components/Speakers'
import Program3D from './components/Program3D'
import Details from './components/Details'
import Registration from './components/Registration'
import Footer from './components/Footer'
import ThreeBackground from './components/ThreeBackground'
import ParticleTrail from './components/ParticleTrail'

function App() {
    return (
        <div className="App">
            <ParticleTrail />
            <ThreeBackground />
            <Header />
            <Hero />
            <Collaboration />
            <About />
            <Organizers />
            <Speakers />
            <Program3D />
            <Details />
            <Registration />
            <Footer />
        </div>
    )
}

export default App
