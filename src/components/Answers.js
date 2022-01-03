import Question from "./Question";

function Answers(props) {
  console.log("ANSWER Props", props);
  let displayQuestions = props.quizData.map((item) => (
    <span className="game--question-container">
      <Question
        key={item.id}
        questionId={item.id}
        correctAnswer={item.correctAnswer}
        question={item.question}
        // answers={item.answers.map((item) => item.value)}
        answers={item.answers}
        // setAllAnswersArray={props.setAllAnswersArray}
        // allAnswersArray={props.allAnswersArray}
        quizData={props.quizData}
        setQuizData={props.setQuizData}
      />
      <hr />
    </span>
  ));

  function getPlayerAnswers() {
    let playerAnswersArray = copyQuizData.map((item) => ({
      ...item,
      playerAnswer: item.answers.filter((answers) => answers.isHeld),
    }));

    let updatedPlayersData = playerAnswersArray.map((item) => ({
      ...item,
      playerAnswer: item.playerAnswer[0],
    }));

    let playerStringsOnly = updatedPlayersData.map(
      (item) => item.playerAnswer.value
    );

    let localCorrectAnswers = updatedPlayersData.map(
      (item) => item.correctAnswer
    );

    // props.setPlayerAnswers(playerStringsOnly);
    let numberCorrect = 0;
    for (let i = 0; i < 5; i++) {
      if (playerStringsOnly[i] === localCorrectAnswers[i]) {
        numberCorrect += 1;
      }
    }
    console.log("number correct", numberCorrect);
  }

  // getPlayerAnswers();

  return (
    <div className="game--container">
      <h2>THESE ARE MY ANSWERS OK</h2>
      {displayQuestions}
      <h2>THESE ARE MY ANSWERS OK</h2>

      <button
        className="game--check-answers"
        onClick={() => props.setIsCheckingAnswers(true)}
      >
        Check Answers
      </button>
    </div>
  );
}

export default Answers;
