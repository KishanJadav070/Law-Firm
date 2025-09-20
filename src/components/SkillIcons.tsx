import React from 'react';
import { BusinessCardData } from '../types';

interface SkillIconsProps {
  skills: BusinessCardData['skills'];
}

const SkillIcons: React.FC<SkillIconsProps> = ({ skills }) => {
  return (
    <>
      {skills.react && (
        <div className="skill-icon aspect-square flex items-center justify-center bg-[#0a1622] border-2 border-[#1a2c3d] p-2 rounded-xl">
          <div className="w-full h-full flex items-center justify-center bg-[#4dc4d2]/10 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#4dc4d2" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
              <circle cx="12" cy="12" r="2.5" fill="#4dc4d2" />
              <g strokeOpacity="1" fill="none">
                <ellipse cx="12" cy="12" rx="10" ry="4.5" />
                <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
              </g>
            </svg>
          </div>
        </div>
      )}
      
      {skills.htmlCss && (
        <div className="skill-icon aspect-square flex items-center justify-center bg-[#0a1622] border-2 border-[#1a2c3d] p-2 rounded-xl">
          <div className="w-full h-full flex items-center justify-center bg-[#e34c26]/10 rounded-lg">
            <div className="text-center leading-tight">
              <div className="text-[#e34c26] font-bold text-2xl">HTML</div>
              <div className="text-[#e34c26] font-bold text-xl">&</div>
              <div className="text-[#264de4] font-bold text-2xl">CSS</div>
            </div>
          </div>
        </div>
      )}
      
      {skills.javascript && (
        <div className="skill-icon aspect-square flex items-center justify-center bg-[#0a1622] border-2 border-[#1a2c3d] p-2 rounded-xl">
          <div className="w-full h-full flex items-center justify-center bg-[#f4b942]/10 rounded-lg">
            <div className="text-[#f4b942] font-bold text-5xl">JS</div>
          </div>
        </div>
      )}
    </>
  );
};

export default SkillIcons;