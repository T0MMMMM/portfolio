import { SkipBack, SkipForward, Play, Download, Plus } from 'lucide-react';
import { TEXT_COLOR, TEXT_MUTED, WORKSPACE_DOT_ACTIVE } from '../../../config/constants';
import './BottomBar.css';

const BottomBar: React.FC = () => {
  return (
    <div className="bottomBar">
      <div className="mediaRow">
        <span className="ctrl" aria-label="Previous track">
          <SkipBack size={13} color={TEXT_MUTED} />
        </span>
        <span className="playBtn" aria-label="Play">
          <Play size={12} color={TEXT_COLOR} fill={TEXT_COLOR} />
        </span>
        <span className="ctrl" aria-label="Next track">
          <SkipForward size={13} color={TEXT_MUTED} />
        </span>
      </div>

      <div className="iconsRow">
        <span className="ctrl" aria-label="Downloads">
          <Download size={15} color={TEXT_MUTED} />
        </span>
        <div className="dots">
          <div className="dot" style={{ backgroundColor: WORKSPACE_DOT_ACTIVE }} />
          <div className="dot" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
          <div className="dot" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
        </div>
        <span className="ctrl" aria-label="Add workspace">
          <Plus size={15} color={TEXT_MUTED} />
        </span>
      </div>
    </div>
  );
};

export default BottomBar;
