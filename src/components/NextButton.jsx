import '../app/globals.css'

const NextButton = ({ onNext }) => {
  return (
    <button className="nextButton" onClick={onNext}>
      Next Question
    </button>
  );
};

export default NextButton;
