import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        width: '160px',
        height: '28px',
        padding: '0 10px',
        borderRadius: '999px',
        background: 'rgba(255, 255, 255, 0.07)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Search size={14} color="var(--zen-text-muted)" />
      <input
        type="text"
        placeholder="Search with Google o…"
        readOnly
        style={{
          background: 'transparent',
          border: 'none',
          outline: 'none',
          color: 'var(--zen-text-muted)',
          fontSize: '12px',
          fontFamily: "'Space Grotesk', sans-serif",
          width: '100%',
          cursor: 'default',
        }}
      />
    </div>
  );
};

export default SearchBar;
