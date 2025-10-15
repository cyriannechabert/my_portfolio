import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Decrypting.css';

const Decrypting: React.FC = () => {
  return (
    <div className="decrypting-overlay">
      <TypeAnimation
        sequence={[
          'CONNECTING...',
        ]}
        wrapper="h2"
        cursor={true}
        repeat={0}
        speed={40}
      />
    </div>
  );
};

export default Decrypting;