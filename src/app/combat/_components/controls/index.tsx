interface Props {
  wipe: () => void;
  addPlayer: () => void;
  addMob: () => void;
}

const CombatControlPanel = ({ wipe, addPlayer, addMob }: Props) => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
        <button onClick={addPlayer}>Add Player</button>
        <button onClick={addMob}>Add Mob</button>
        <button onClick={wipe}>Reset Combat</button>
      </div>
    </div>
  );
};

export default CombatControlPanel;
