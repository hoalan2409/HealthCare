interface HexagonBackgroundProps {
  gradientId: string;
}

const HexagonBackground: React.FC<HexagonBackgroundProps> = ({ gradientId }) => {
  return (
    <div className="absolute inset-0 transform rotate-0">
      <svg width="100%" height="100%" viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff963c" />
            <stop offset="100%" stopColor="#ffcc21" />
          </linearGradient>
        </defs>
        <polygon
          points="50,5 88,27 88,73 50,95 12,73 12,27"
          fill={`url(#${gradientId})`}
          stroke="none"
        />
      </svg>
    </div>
  );
};

export default HexagonBackground;
