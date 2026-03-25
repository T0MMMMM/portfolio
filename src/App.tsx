import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Desktop from './components/Desktop/Desktop';
import ZenBrowser from './components/ZenBrowser/ZenBrowser';
import './App.css';

const App: React.FC = () => {
  const [isBrowserOpen, setIsBrowserOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleClose = () => {
    setIsBrowserOpen(false);
    setIsMaximized(false);
    setIsMinimized(false);
  };

  const handleMinimize = () => setIsMinimized(true);
  const handleMaximize = () => setIsMaximized((v) => !v);
  const handleRestore = () => setIsMinimized(false);

  return (
    <>
      <Desktop
        onIconClick={() => {
          setIsBrowserOpen(true);
          setIsMinimized(false);
        }}
      />
      <AnimatePresence mode="wait">
        {isBrowserOpen && !isMinimized && (
          <ZenBrowser
            key="zen-browser"
            onClose={handleClose}
            onMinimize={handleMinimize}
            onMaximize={handleMaximize}
            isMaximized={isMaximized}
          />
        )}
      </AnimatePresence>
      {isBrowserOpen && isMinimized && (
        <button className="taskbarButton" onClick={handleRestore} aria-label="Restore window">
          mon portfolio :]
        </button>
      )}
    </>
  );
};

export default App;
