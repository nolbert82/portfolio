import ProjectCard from './components/ProjectCard';
import AboutSection from './components/AboutSection';
import { projects } from './data/projects';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section - About Me */}
          <AboutSection />

          <div className="absolute top-10 bottom-10 left-1/2 w-1 bg-gray-300 rounded-full hidden lg:block"></div>


          {/* Right Section - Projects */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Featured Projects</h2>
            <div className="grid gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;