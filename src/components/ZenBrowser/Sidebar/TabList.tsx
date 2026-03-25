import { useState } from 'react';
import { X } from 'lucide-react';
import portfolioSections from '../../../config/portfolioSections';
import { TAB_HEIGHT, TEXT_MUTED } from '../../../config/constants';
import './TabList.css';

interface TabListProps {
  activeTab: string;
  onTabChange: (id: string) => void;
}

const TabList: React.FC<TabListProps> = ({ activeTab, onTabChange }) => {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  return (
    <div className="list">
      {portfolioSections.map((section) => {
        const isActive = section.id === activeTab;
        const isHovered = section.id === hoveredTab;

        return (
          <button
            key={section.id}
            className={`tab ${isActive ? 'tabActive' : ''}`}
            onClick={() => onTabChange(section.id)}
            onMouseEnter={() => setHoveredTab(section.id)}
            onMouseLeave={() => setHoveredTab(null)}
            aria-label={section.label}
            style={{ height: `${TAB_HEIGHT}px` }}
          >
            <img className="tabFavicon" src={section.faviconUrl} alt="" />
            <span className={`tabLabel ${isActive ? 'tabLabelActive' : ''}`}>
              {section.label}
            </span>
            {isHovered && <X className="tabClose" size={12} color={TEXT_MUTED} />}
          </button>
        );
      })}
    </div>
  );
};

export default TabList;
