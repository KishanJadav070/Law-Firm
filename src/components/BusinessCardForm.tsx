import React from 'react';
import { BusinessCardData } from '../types';
import { CheckSquare, Square } from 'lucide-react';

interface BusinessCardFormProps {
  cardData: BusinessCardData;
  setCardData: React.Dispatch<React.SetStateAction<BusinessCardData>>;
}

const BusinessCardForm: React.FC<BusinessCardFormProps> = ({ cardData, setCardData }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenderChange = (gender: 'male' | 'female') => {
    setCardData((prev) => ({ ...prev, gender }));
  };

  const toggleSkill = (skill: keyof BusinessCardData['skills']) => {
    setCardData((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        [skill]: !prev.skills[skill],
      },
    }));
  };

  return (
    <div className="business-card-form p-6 rounded-3xl bg-[#0d1c2a] text-white shadow-lg w-full max-w-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#f4b942]">
        CUSTOMIZE YOUR<br />DEV CARD
      </h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-xl mb-2 text-[#4dc4d2]">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={cardData.name}
          onChange={handleInputChange}
          placeholder="Enter your name"
          className="w-full p-3 rounded-lg bg-[#0a1622] border-2 border-[#1a2c3d] focus:border-[#4dc4d2] focus:outline-none text-white"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="role" className="block text-xl mb-2 text-[#4dc4d2]">
          Role
        </label>
        <input
          type="text"
          id="role"
          name="role"
          value={cardData.role}
          onChange={handleInputChange}
          placeholder="Enter your role"
          className="w-full p-3 rounded-lg bg-[#0a1622] border-2 border-[#1a2c3d] focus:border-[#4dc4d2] focus:outline-none text-white"
        />
      </div>

      <div className="mb-6">
        <label className="block text-xl mb-3 text-[#4dc4d2]">
          Gender
        </label>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => handleGenderChange('male')}
            className={`flex items-center justify-center w-1/2 p-3 rounded-lg border-2 ${
              cardData.gender === 'male'
                ? 'bg-[#1a2c3d] border-[#4dc4d2]'
                : 'bg-[#0a1622] border-[#1a2c3d]'
            } transition-all duration-300 hover:bg-[#1a2c3d]`}
          >
            <div className="flex items-center">
              <div className={`w-6 h-6 flex items-center justify-center rounded-full border-2 mr-2 ${
                cardData.gender === 'male' ? 'border-[#4dc4d2] bg-[#4dc4d2]/20' : 'border-[#1a2c3d]'
              }`}>
                {cardData.gender === 'male' && <div className="w-3 h-3 rounded-full bg-[#4dc4d2]"></div>}
              </div>
              <span>Male</span>
            </div>
          </button>
          <button
            type="button"
            onClick={() => handleGenderChange('female')}
            className={`flex items-center justify-center w-1/2 p-3 rounded-lg border-2 ${
              cardData.gender === 'female'
                ? 'bg-[#1a2c3d] border-[#4dc4d2]'
                : 'bg-[#0a1622] border-[#1a2c3d]'
            } transition-all duration-300 hover:bg-[#1a2c3d]`}
          >
            <div className="flex items-center">
              <div className={`w-6 h-6 flex items-center justify-center rounded-full border-2 mr-2 ${
                cardData.gender === 'female' ? 'border-[#4dc4d2] bg-[#4dc4d2]/20' : 'border-[#1a2c3d]'
              }`}>
                {cardData.gender === 'female' && <div className="w-3 h-3 rounded-full bg-[#4dc4d2]"></div>}
              </div>
              <span>Female</span>
            </div>
          </button>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-xl mb-3 text-[#4dc4d2]">
          Skills
        </label>
        <div className="space-y-3">
          <button 
            type="button" 
            onClick={() => toggleSkill('react')}
            className="skill-option flex items-center w-full p-3 rounded-lg bg-[#0a1622] border-2 border-[#1a2c3d] hover:bg-[#1a2c3d] transition-all duration-300"
          >
            {cardData.skills.react ? (
              <CheckSquare className="mr-2 text-[#4dc4d2]" size={24} />
            ) : (
              <Square className="mr-2 text-[#4dc4d2]" size={24} />
            )}
            <span>React</span>
          </button>
          
          <button 
            type="button" 
            onClick={() => toggleSkill('htmlCss')}
            className="skill-option flex items-center w-full p-3 rounded-lg bg-[#0a1622] border-2 border-[#1a2c3d] hover:bg-[#1a2c3d] transition-all duration-300"
          >
            {cardData.skills.htmlCss ? (
              <CheckSquare className="mr-2 text-[#f4b942]" size={24} />
            ) : (
              <Square className="mr-2 text-[#f4b942]" size={24} />
            )}
            <span>HTML & CSS</span>
          </button>
          
          <button 
            type="button" 
            onClick={() => toggleSkill('javascript')}
            className="skill-option flex items-center w-full p-3 rounded-lg bg-[#0a1622] border-2 border-[#1a2c3d] hover:bg-[#1a2c3d] transition-all duration-300"
          >
            {cardData.skills.javascript ? (
              <CheckSquare className="mr-2 text-[#f4b942]" size={24} />
            ) : (
              <Square className="mr-2 text-[#f4b942]" size={24} />
            )}
            <span>JavaScript</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessCardForm;