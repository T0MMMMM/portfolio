import pinnedSites from '../../../config/pinnedSites';
import { PINNED_CELL_HEIGHT, PINNED_ICON_SIZE, PINNED_GAP } from '../../../config/constants';
import './PinnedGrid.css';

const PinnedGrid: React.FC = () => {
  return (
    <div className="gridWrap">
      <div className="grid" style={{ gap: `${PINNED_GAP}px` }}>
        {pinnedSites.map((site) => (
          <a
            key={site.id}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={site.label}
            className="cell"
            style={{ height: `${PINNED_CELL_HEIGHT}px` }}
          >
            <img
              className="favicon"
              src={site.iconUrl}
              alt={site.label}
              style={{ width: `${PINNED_ICON_SIZE}px`, height: `${PINNED_ICON_SIZE}px` }}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default PinnedGrid;
