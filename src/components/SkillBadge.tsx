import React from 'react';

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <span className="px-4 py-2 bg-blue-50 rounded-full text-blue-600 border border-blue-200 hover:bg-blue-100 transition-colors">
      {skill}
    </span>
  );
};

export default SkillBadge;