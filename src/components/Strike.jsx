const Strike = ({ strikeCount }) => {
  return (
    <div className="strike-container">
      {Array(strikeCount).fill(null).map((_, index) => (
        <span key={index} className="strike">X</span>
      ))}
    </div>
  );
};

export default Strike;
