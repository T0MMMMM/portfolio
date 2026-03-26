import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import './DesktopIcon.css';

interface DesktopIconProps {
  label: string;
  imageSrc: string;
  onClick: () => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ label, imageSrc, onClick }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [bouncing, setBouncing] = useState(false);

  const handleClick = useCallback(() => {
    setBouncing(true);
    onClick();
  }, [onClick]);

  return (
    <motion.div
      className="wrapper"
      onClick={handleClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
    >
      <motion.div
        animate={{ scale: bouncing ? [1, 0.85, 1.05, 1] : isPressed ? 0.9 : 1 }}
        transition={bouncing ? { duration: 0.35, ease: 'easeInOut' } : { duration: 0.08, ease: 'easeOut' }}
        onAnimationComplete={() => { if (bouncing) setBouncing(false); }}
      >
        <img className="icon" src={imageSrc} alt={label} draggable={false} />
      </motion.div>
      <span className="label">{label}</span>
    </motion.div>
  );
};

export default DesktopIcon;
