import React from 'react';

const MaleAvatar: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <img 
        src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.png?auto=compress&cs=tinysrgb&w=600&h=750&dpr=1" 
        alt="Male Developer Avatar" 
        className="max-h-full object-contain"
      />
    </div>
  );
};

export default MaleAvatar;