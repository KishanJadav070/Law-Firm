import React from 'react';

interface BusinessCardProps {
  gender: 'male' | 'female';
  selectedSkills: string[];
  name?: string;
  role?: string;
}

const BusinessCardPreview: React.FC<BusinessCardProps> = ({
  gender,
  selectedSkills,
  name = 'KISHAN JADAV',
  role = 'Front-End Developer',
}) => {
  const avatarUrl =
    gender === 'male'
      ? 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
      : 'https://cdn-icons-png.flaticon.com/512/4140/4140047.png';

  const skillIcons: { [key: string]: string } = {
    htmlcss: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
    js: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
    react: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
  };

  return (
    <div
      style={{
        width: '340px',
        padding: '24px',
        background: 'linear-gradient(to bottom, #0d1117, #1c1f26)',
        borderRadius: '20px',
        border: '2px solid #00ffff88',
        boxShadow: '0 0 25px #00ffff44',
        color: '#fff',
        fontFamily: '"Segoe UI", sans-serif',
        position: 'relative',
        textAlign: 'center',
        margin: '30px auto',
      }}
    >
      {/* Top Tab */}
      <div
        style={{
          width: '80px',
          height: '20px',
          background: '#111',
          borderRadius: '0 0 10px 10px',
          margin: '0 auto',
          boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.5)',
        }}
      />

      {/* Avatar */}
      <div
        style={{
          width: '100%',
          height: '200px',
          background: '#000',
          borderRadius: '15px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '15px',
        }}
      >
        <img
          src={avatarUrl}
          alt="avatar"
          style={{
            width: '130px',
            height: '130px',
            borderRadius: '50%',
            objectFit: 'cover',
            filter: 'drop-shadow(0 0 10px #0ff)',
          }}
        />
      </div>

      {/* Name */}
      <h2
        style={{
          fontSize: '22px',
          marginTop: '16px',
          color: '#f5c16c',
          fontFamily: '"Cinzel Decorative", serif',
          textShadow: '1px 1px 2px #000',
        }}
      >
        {name}
      </h2>

      {/* Role */}
      <p
        style={{
          color: '#80d4ff',
          fontSize: '14px',
          marginBottom: '20px',
          marginTop: '4px',
        }}
      >
        {role}
      </p>

      {/* Skills */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap',
        }}
      >
        {selectedSkills.map((skill, index) => (
          <div
            key={index}
            style={{
              width: '60px',
              height: '60px',
              background: '#111',
              borderRadius: '10px',
              boxShadow: '2px 2px 8px #0ff, inset -2px -2px 4px #222',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.3s',
            }}
          >
            <img
              src={skillIcons[skill]}
              alt={skill}
              style={{
                width: '32px',
                height: '32px',
                objectFit: 'contain',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessCardPreview;
