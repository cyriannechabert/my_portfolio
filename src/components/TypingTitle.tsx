import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypingTitle: React.FC<{ text: string }> = ({ text }) => {
  return (
    <h2>
      <TypeAnimation
        sequence={[
          '// ' + text, // Start with comment slashes
          2000,        // Wait 2 seconds
        ]}
        wrapper="span"
        cursor={true}
        repeat={0} // Don't repeat the animation
        speed={30}
        style={{ display: 'inline-block' }}
      />
    </h2>
  );
};

export default TypingTitle;