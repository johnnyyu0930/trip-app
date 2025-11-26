import React from 'react';

// Common SVG props
interface IconProps {
  className?: string;
  size?: number;
}

export const ChiikawaFace: React.FC<IconProps> = ({ className, size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(50,55) scale(1.2)">
      {/* Face/Body Outline - More rounded and continuous */}
      <path 
        d="M-12,-38 
           C-20,-52 -32,-45 -36,-32 
           C-45,-15 -42,20 -25,30 
           C-10,38 10,38 25,30 
           C42,20 45,-15 36,-32 
           C32,-45 20,-52 12,-38 
           Q0,-42 -12,-38 Z" 
        fill="white" 
        stroke="#5c4b4b" 
        strokeWidth="2.5" 
        strokeLinejoin="round"
      />
      
      {/* Eyes - Small and simple */}
      <circle cx="-12" cy="-5" r="2.5" fill="#5c4b4b" />
      <circle cx="12" cy="-5" r="2.5" fill="#5c4b4b" />

      {/* Eyebrows - Tiny arcs */}
      <path d="M-16,-15 Q-12,-18 -8,-15" fill="none" stroke="#5c4b4b" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16,-15 Q12,-18 8,-15" fill="none" stroke="#5c4b4b" strokeWidth="1.5" strokeLinecap="round" />

      {/* Blush - Soft pink ovals */}
      <ellipse cx="-26" cy="5" rx="5" ry="3.5" fill="#f4adc6" opacity="0.6" />
      <ellipse cx="26" cy="5" rx="5" ry="3.5" fill="#f4adc6" opacity="0.6" />

      {/* Mouth - Small cat smile */}
      <path d="M-3,8 Q0,11 3,8" fill="none" stroke="#5c4b4b" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  </svg>
);

export const HachiwareFace: React.FC<IconProps> = ({ className, size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
     <g transform="translate(50,50) scale(0.9)">
       {/* Ears */}
      <path d="M-30,-30 L-20,-55 L-5,-40" fill="#8ecae6" stroke="#5c4b4b" strokeWidth="3" />
      <path d="M30,-30 L20,-55 L5,-40" fill="#8ecae6" stroke="#5c4b4b" strokeWidth="3" />
      
      {/* Face Base */}
      <circle cx="0" cy="0" r="40" fill="white" stroke="#5c4b4b" strokeWidth="3" />
      
      {/* Blue Pattern - Hair */}
      <path d="M-28,-28 Q0,-10 28,-28 L20,-55 L-20,-55 Z" fill="#8ecae6" stroke="#5c4b4b" strokeWidth="3" />

      {/* Eyes - Round and Cute */}
      <circle cx="-15" cy="2" r="3.5" fill="#5c4b4b" />
      <circle cx="-16.5" cy="0.5" r="1.2" fill="white" /> {/* Highlight */}
      
      <circle cx="15" cy="2" r="3.5" fill="#5c4b4b" />
      <circle cx="13.5" cy="0.5" r="1.2" fill="white" /> {/* Highlight */}

      {/* Mouth - Cat smile */}
      <path d="M-4,15 Q0,18 4,15" fill="none" stroke="#5c4b4b" strokeWidth="2" strokeLinecap="round" />
      
      {/* Blush */}
      <ellipse cx="-25" cy="12" rx="4" ry="3" fill="#f4adc6" opacity="0.5" />
      <ellipse cx="25" cy="12" rx="4" ry="3" fill="#f4adc6" opacity="0.5" />
    </g>
  </svg>
);

export const UsagiFace: React.FC<IconProps> = ({ className, size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(50,50) scale(0.9)">
      {/* Ears */}
      <ellipse cx="-20" cy="-35" rx="8" ry="25" fill="#fcefb4" stroke="#5c4b4b" strokeWidth="3" transform="rotate(-10)" />
      <ellipse cx="20" cy="-35" rx="8" ry="25" fill="#fcefb4" stroke="#5c4b4b" strokeWidth="3" transform="rotate(10)" />
      
      {/* Face */}
      <circle cx="0" cy="5" r="38" fill="#fcefb4" stroke="#5c4b4b" strokeWidth="3" />
      
      {/* Eyes */}
      <circle cx="-15" cy="5" r="4" fill="black" />
      <circle cx="-16" cy="4" r="1" fill="white" />
      <circle cx="15" cy="5" r="4" fill="black" />
      <circle cx="14" cy="4" r="1" fill="white" />

      {/* Mouth */}
      <path d="M-5,20 Q0,25 5,20" fill="none" stroke="#5c4b4b" strokeWidth="2" />
      
      {/* Cheeks */}
      <circle cx="-28" cy="15" r="5" fill="#f4adc6" opacity="0.6" />
      <circle cx="28" cy="15" r="5" fill="#f4adc6" opacity="0.6" />
    </g>
  </svg>
);

export const Sparkle: React.FC<IconProps & { color?: string }> = ({ className, size = 24, color = "#FFD700" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill={color}/>
    </svg>
);