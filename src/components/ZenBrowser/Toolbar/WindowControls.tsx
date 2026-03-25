import { useState } from 'react';
import { Minus, Maximize2, X } from 'lucide-react';
import { TRAFFIC_MINIMIZE, TRAFFIC_MAXIMIZE, TRAFFIC_CLOSE, TRAFFIC_SIZE } from '../../../config/constants';
import './WindowControls.css';

interface WindowControlsProps {
  onClose: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
}

const buttons = [
  { color: TRAFFIC_MINIMIZE, label: 'Minimize', action: 'minimize', Icon: Minus },
  { color: TRAFFIC_MAXIMIZE, label: 'Maximize', action: 'maximize', Icon: Maximize2 },
  { color: TRAFFIC_CLOSE, label: 'Close', action: 'close', Icon: X },
] as const;

const WindowControls: React.FC<WindowControlsProps> = ({ onClose, onMinimize, onMaximize }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const handleClick = (action: string) => {
    if (action === 'close') onClose();
    else if (action === 'minimize' && onMinimize) onMinimize();
    else if (action === 'maximize' && onMaximize) onMaximize();
  };

  return (
    <div className="controls">
      {buttons.map(({ color, label, action, Icon }, idx) => (
        <button
          key={label}
          className="dot"
          aria-label={label}
          title={label}
          onClick={() => handleClick(action)}
          onMouseEnter={() => setHoveredIdx(idx)}
          onMouseLeave={() => setHoveredIdx(null)}
          style={{ backgroundColor: color }}
        >
          {hoveredIdx === idx && (
            <Icon
              className="dotIcon"
              size={TRAFFIC_SIZE - 4}
              color="rgba(0,0,0,0.55)"
              strokeWidth={2.5}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default WindowControls;
