import { useState, useCallback } from 'react';
import { motion, type Variants } from 'framer-motion';
import Sidebar from './Sidebar/Sidebar';
import ContentArea from './ContentArea/ContentArea';
import portfolioSections from '../../config/portfolioSections';
import useIsMobile from '../../hooks/useIsMobile';
import useDrag from '../../hooks/useDrag';
import { WINDOW_BG, WINDOW_BLUR, WINDOW_SHADOW, WINDOW_BORDER_RADIUS } from '../../config/constants';
import './ZenBrowser.css';

interface ZenBrowserProps {
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  isMaximized: boolean;
}

const clipVariants: Variants = {
  hidden: { clipPath: 'circle(0% at 50% 50%)', opacity: 0 },
  visible: {
    clipPath: 'circle(150% at 50% 50%)',
    opacity: 1,
    transition: {
      clipPath: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      opacity: { duration: 0.25, ease: 'easeOut' },
    },
  },
  exit: {
    clipPath: 'circle(0% at 50% 50%)',
    opacity: 0,
    transition: {
      clipPath: { duration: 0.5, ease: [0.55, 0, 0.68, 0.19] },
      opacity: { duration: 0.35, delay: 0.1, ease: 'easeIn' },
    },
  },
};

const ZenBrowser: React.FC<ZenBrowserProps> = ({ onClose, onMinimize, onMaximize, isMaximized }) => {
  const [activeTab, setActiveTab] = useState(portfolioSections[0].id);
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { position, isDragging, onMouseDown, resetPosition } = useDrag();

  const handleTabChange = useCallback((id: string) => {
    setActiveTab(id);
    if (isMobile) setSidebarOpen(false);
  }, [isMobile]);

  const handleMaximize = useCallback(() => {
    resetPosition();
    onMaximize();
  }, [resetPosition, onMaximize]);

  return (
    <motion.div className="overlay" variants={clipVariants} initial="hidden" animate="visible" exit="exit">
      <motion.div
        className="window"
        animate={{ x: isMaximized ? 0 : position.x, y: isMaximized ? 0 : position.y }}
        transition={{ type: 'tween', duration: isDragging ? 0 : 0.3 }}
        style={{
          width: isMaximized ? '100vw' : 'var(--zen-window-w)',
          height: isMaximized ? '100vh' : 'auto',
          aspectRatio: isMaximized ? 'auto' : '16 / 9',
          maxHeight: isMaximized ? '100vh' : 'var(--zen-window-h)',
          borderRadius: isMaximized ? '0' : WINDOW_BORDER_RADIUS,
          background: WINDOW_BG,
          backdropFilter: WINDOW_BLUR,
          WebkitBackdropFilter: WINDOW_BLUR,
          boxShadow: isMaximized ? 'none' : WINDOW_SHADOW,
        }}
      >
        {isMobile ? (
          sidebarOpen && (
            <div className="mobileOverlay">
              <Sidebar activeTab={activeTab} onTabChange={handleTabChange} onDragStart={onMouseDown} isMaximized={isMaximized} />
              <div className="mobileBackdrop" onClick={() => setSidebarOpen(false)} />
            </div>
          )
        ) : (
          <Sidebar activeTab={activeTab} onTabChange={handleTabChange} onDragStart={onMouseDown} isMaximized={isMaximized} />
        )}
        <ContentArea
          activeTab={activeTab}
          onClose={onClose}
          onMinimize={onMinimize}
          onMaximize={handleMaximize}
          isMaximized={isMaximized}
          onDragStart={onMouseDown}
          onMenuToggle={isMobile ? () => setSidebarOpen((v) => !v) : undefined}
        />
      </motion.div>
    </motion.div>
  );
};

export default ZenBrowser;
