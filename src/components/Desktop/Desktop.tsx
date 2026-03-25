import bgImage from '../../assets/bg.jpg';
import iconImage from '../../assets/icon.png';
import DesktopIcon from './DesktopIcon';
import './Desktop.css';

interface DesktopProps {
  onIconClick: () => void;
}

const Desktop: React.FC<DesktopProps> = ({ onIconClick }) => {
  return (
    <div className="desktop" style={{ backgroundImage: `url(${bgImage})` }}>
      <DesktopIcon imageSrc={iconImage} onClick={onIconClick} />
    </div>
  );
};

export default Desktop;
