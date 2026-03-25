import { motion, type Variants } from 'framer-motion';
import { MoreHorizontal, LayoutGrid, ArrowLeft, ArrowRight, RotateCw } from 'lucide-react';
import PinnedGrid from './PinnedGrid';
import TabList from './TabList';
import BottomBar from './BottomBar';
import { SIDEBAR_WIDTH, WINDOW_BORDER_RADIUS, URL_BAR_HEIGHT } from '../../../config/constants';
import './Sidebar.css';

interface SidebarProps {
  activeTab: string;
  onTabChange: (id: string) => void;
  onDragStart: (e: React.MouseEvent) => void;
  isMaximized: boolean;
}

export const sidebarVariants: Variants = {
  hidden: { x: -30, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { delay: 0.15, duration: 0.35 } },
};

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange, onDragStart, isMaximized }) => {
  return (
    <motion.div
      className="sidebar"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      style={{
        width: `${SIDEBAR_WIDTH}px`,
        borderRadius: `${WINDOW_BORDER_RADIUS} 0 0 ${WINDOW_BORDER_RADIUS}`,
      }}
    >
      <div
        className="dragZone"
        onMouseDown={isMaximized ? undefined : onDragStart}
      >
        <span className="navIcon" aria-label="Menu"><MoreHorizontal size={16} /></span>
        <span className="navIcon" aria-label="Grid"><LayoutGrid size={16} /></span>
        <div className="spacer" />
        <span className="navIcon" aria-label="Back"><ArrowLeft size={15} /></span>
        <span className="navIcon" aria-label="Forward"><ArrowRight size={15} /></span>
        <span className="navIcon" aria-label="Refresh"><RotateCw size={14} /></span>
      </div>

      <div className="urlBarWrap">
        <div className="urlBar" style={{ height: `${URL_BAR_HEIGHT}px` }}>
          http://localhost:5173
        </div>
      </div>

      <PinnedGrid />

      <div className="funLabel">
        <span className="funText">Fun</span>
      </div>

      <div className="separatorGroup">
        <div className="separatorRow">
          <div className="separatorLine" />
          <span className="clearBtn">Clear</span>
        </div>
        <div className="newTab">+ New Tab</div>
      </div>

      <TabList activeTab={activeTab} onTabChange={onTabChange} />
      <BottomBar />
    </motion.div>
  );
};

export default Sidebar;
