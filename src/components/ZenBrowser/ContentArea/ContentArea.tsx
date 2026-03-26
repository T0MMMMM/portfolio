import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Menu } from 'lucide-react';
import WindowControls from '../Toolbar/WindowControls';
import HomeSection from '../../Portfolio/HomeSection';
import EcarPage from '../../Portfolio/EcarPage';
import BucketlistPage from '../../Portfolio/BucketlistPage';
import YchessPage from '../../Portfolio/YchessPage';
import YoutubedlPage from '../../Portfolio/YoutubedlPage';
import PiscinePage from '../../Portfolio/PiscinePage';
import ContactSection from '../../Portfolio/ContactSection';
import { WINDOW_BORDER_SIZE, WINDOW_CONTENT_RADIUS, WINDOW_TOPBAR_EXPANDED_H, WINDOW_TOPBAR_TRANSITION, CONTENT_BG, TEXT_MUTED } from '../../../config/constants';
import './ContentArea.css';

interface ContentAreaProps {
  activeTab: string;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  isMaximized: boolean;
  onDragStart: (e: React.MouseEvent) => void;
  onMenuToggle?: () => void;
}

const sections: Record<string, React.FC> = {
  home: HomeSection,
  ecar: EcarPage,
  bucketlist: BucketlistPage,
  ychess: YchessPage,
  youtubedl: YoutubedlPage,
  piscine: PiscinePage,
  contact: ContactSection,
};

export const contentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.25, duration: 0.3 } },
};

const tabTransition: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.15 } },
};

const ContentArea: React.FC<ContentAreaProps> = ({
  activeTab, onClose, onMinimize, onMaximize, isMaximized, onDragStart, onMenuToggle,
}) => {
  const [topBarExpanded, setTopBarExpanded] = useState(false);
  const borderPx = `${WINDOW_BORDER_SIZE}px`;

  return (
    <motion.div
      className="contentWrapper"
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      style={{ paddingRight: borderPx, paddingBottom: borderPx }}
    >
      <div
        className="topBar"
        onMouseEnter={() => setTopBarExpanded(true)}
        onMouseLeave={() => setTopBarExpanded(false)}
        onMouseDown={isMaximized ? undefined : onDragStart}
        onDoubleClick={onMaximize}
        style={{
          height: topBarExpanded ? `${WINDOW_TOPBAR_EXPANDED_H}px` : borderPx,
          transition: WINDOW_TOPBAR_TRANSITION,
        }}
      >
        <motion.div
          className="topBarInner"
          initial={false}
          animate={{ opacity: topBarExpanded ? 1 : 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          {onMenuToggle && (
            <button
              className="menuButton"
              onClick={(e) => { e.stopPropagation(); onMenuToggle(); }}
              onMouseDown={(e) => e.stopPropagation()}
              aria-label="Toggle menu"
            >
              <Menu size={16} color={TEXT_MUTED} />
            </button>
          )}
          <div className="topBarSpacer" />
          <div className="controlsWrapper" onMouseDown={(e) => e.stopPropagation()}>
            <WindowControls onClose={onClose} onMinimize={onMinimize} onMaximize={onMaximize} />
          </div>
        </motion.div>
      </div>

      <div className="panel" style={{ borderRadius: WINDOW_CONTENT_RADIUS, background: CONTENT_BG }}>
        <div className="panelGradient" />
        <AnimatePresence mode="wait">
          <motion.div
            className="tabContent"
            key={activeTab}
            variants={tabTransition}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {(() => { const S = sections[activeTab]; return S ? <S /> : null; })()}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ContentArea;
