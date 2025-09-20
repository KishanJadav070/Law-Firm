import React from 'react';

const FemaleAvatar: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <img 
        src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&dpr=1" 
        alt="Female Developer Avatar" 
        className="max-h-full object-contain"
      />
    </div>
  );
};

export default FemaleAvatar;