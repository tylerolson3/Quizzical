import Button from "./Button";

function Question(props) {
  let listAnswers = props.answers.map((item) => (
    <Button
      isHeld={item.isHeld}
      value={item.value
        .replace(/&amp;/g, "&")
        .replace(/&#039;/g, "'")
        .replace(/&quot;/g, '"')}
      item={item}
      quizData={props.quizData}
      setQuizData={props.setQuizData}
      questionId={props.questionId}
      heldAnswer={props.heldAnswer}
      score={props.score}
      setScore={props.setScore}
    />
  ));

  return (
    <div>
      <h3 className="question--question">{props.question}</h3>
      {listAnswers}
    </div>
  );
}

export default Question;
