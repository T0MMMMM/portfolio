import { Settings, ChevronLeft, ChevronRight, RotateCw, Menu } from 'lucide-react';
import WindowControls from './WindowControls';
import SearchBar from './SearchBar';

interface ToolbarProps {
  onClose: () => void;
  onMenuToggle?: () => void;
}

const iconStyle: React.CSSProperties = {
  color: 'var(--zen-text-muted)',
  cursor: 'pointer',
  transition: 'color 150ms',
};

const Toolbar: React.FC<ToolbarProps> = ({ onClose, onMenuToggle }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: 'var(--zen-toolbar-h)',
        padding: '0 12px',
        gap: '10px',
        flexShrink: 0,
      }}
    >
      <WindowControls onClose={onClose} />
      {onMenuToggle && (
        <button
          onClick={onMenuToggle}
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
        >
          <Menu size={16} style={iconStyle} />
        </button>
      )}
      <span aria-label="Settings"><Settings size={16} style={iconStyle} /></span>
      <span aria-label="Back"><ChevronLeft size={16} style={iconStyle} /></span>
      <span aria-label="Forward"><ChevronRight size={16} style={iconStyle} /></span>
      <span aria-label="Refresh"><RotateCw size={16} style={iconStyle} /></span>
      <div style={{ flex: 1 }} />
      <SearchBar />
    </div>
  );
};

export default Toolbar;
