interface ProgressBarProps {
  value: number;
  max: number;
}

const ProgressBar = ({ value, max }: ProgressBarProps) => {
  const progress = Math.ceil((value / max) * 100);
  return (
    <div style={{ width: '100%', background: 'grey', height: '6px' }}>
      <div style={{ width: `${progress}%`, background: 'red', transition: 'all 1s', height: '6px' }} />
    </div>
  );
};

export default ProgressBar;
