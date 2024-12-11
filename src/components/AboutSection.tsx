import { Github, Mail, Linkedin } from 'lucide-react';
import SkillBadge from './SkillBadge';

const skills = ['Python', 'Java', 'SQL', 'Agile methods', 'Git'];

const AboutSection = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-start space-x-6">
        <img
          src="https://images.unsplash.com/photo-1733931895490-81d5c723b95a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile"
          className="rounded-lg w-56 h-56 object-cover shadow-lg"
        />
        <div className="flex flex-col justify-start">
          <h2 className="text-5xl font-bold text-gray-900">Nolan GILBERT</h2>
          <p className="text-gray-600 mb-4">Computer Science Student</p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/nolbert82"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-gray-700"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/nolan-gilbert-70180922b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-gray-700"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:nolanofrance@gmail.com"
              className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-gray-700"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">About Me</h1>
        <p className="text-gray-600 leading-relaxed">
          I'm a passionate Computer Science student with a focus on development and AI, and currently pursuing my degree at University Paul Sabatier in Toulouse.
          I love learning new technologies and building cool stuff with it!
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <SkillBadge key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
