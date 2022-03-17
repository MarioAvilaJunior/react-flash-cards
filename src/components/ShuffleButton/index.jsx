const ShuffleButton = ({ shuffleArray }) => {
  return (
    <button className={`bg-gray-300 p-2 rounded-md`} onClick={shuffleArray}>
      Shuffle Button
    </button>
  );
};

export { ShuffleButton };
