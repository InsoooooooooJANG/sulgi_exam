import styles from "../App.module.css";
import { useState } from "react";
import Card from "./Card";
import { answer_list, question_list } from "../questions";

function Main() {
  const [answerList, setAnswerList] = useState(answer_list);
  const [questions, setQuestions] = useState(question_list);
  const [index, setIndex] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [answer, setAnswer] = useState("");
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [showRightMsg, setShowRightMsg] = useState(false);
  const [showWrongMsg, setShowWrongMsg] = useState(false);

  const addResultToScore = (isRight) => {
    console.log("isRight", isRight);
    if (!isRight) {
      setResult((current) => current - 1);
      setShowWrongMsg(true);
    } else {
      setShowRightMsg(true);
    }
  };
  const [result, setResult] = useState(questions.length);

  const onClickStart = () => {
    setIsStart(true);
    setIndex(0);
    setQuestions((current) => current.sort(() => Math.random() - 0.5));
    setAnswerList((current) => current.sort(() => Math.random() - 0.5));
  };

  const onClickNext = () => {
    setIndex((current) => current + 1);
    setCheckAnswer(false);
    setAnswer(null);
    setShowWrongMsg(false);
    setShowRightMsg(false);

    console.log("1", index, questions.length - 1);
    if (index === questions.length - 1) {
      setIsEnd(true);
    }
  };

  const onClickCheckAnswer = () => {
    if (answer === null || answer === "") {
      alert("정답을 골라주세요");
      return;
    }
    setCheckAnswer(true);
  };

  const onClickRetry = () => {
    setIsStart(false);
    setIsEnd(false);
    setResult(questions.length);
  };

  const onSelectChanged = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <div className={styles.App}>
      <header className={styles.appbody}>
        <h4>슬기의 원형약물 테스트!</h4>
        {isStart && !isEnd ? (
          <div>
            <p className={styles.answerLabel}>정답을 아래에서 고르세요</p>
            <p className={styles.selectedAnswer}>{answer}</p>
            <select className={styles.appSelect} onChange={onSelectChanged}>
              {answerList.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
            <div className={styles.selectedAnswer}>
              {showRightMsg ? (
                <span className={styles.rightMsg}>정답입니다!</span>
              ) : null}
              {showWrongMsg ? (
                <span className={styles.wrongMsg}>
                  오답입니다ㅠ 정답 : {questions[index].rightAnswer}
                </span>
              ) : null}
            </div>
          </div>
        ) : null}
        {!isStart ? (
          <button className={styles.btn} onClick={onClickStart}>
            시작!
          </button>
        ) : !isEnd ? (
          <Card
            question={questions[index]}
            answer={answer}
            checkAnswer={checkAnswer}
            addResultToScore={addResultToScore}
          />
        ) : null}
        {isStart && !isEnd ? (
          <div>
            <button
              disabled={checkAnswer}
              className={styles.btn}
              onClick={onClickCheckAnswer}
            >
              채점
            </button>
            <button
              disabled={!checkAnswer}
              className={[styles.btn, styles.tooltip].join(" ")}
              onClick={onClickNext}
            >
              다음
              <span className={styles.tooltiptext}>
                다음으로 넘어가려면 채점 버튼을 클릭하여서 채점을 진행해주세요.
              </span>
            </button>
          </div>
        ) : null}
        {isEnd ? (
          <div>
            <div>테스트가 종료되었습니다.</div>
            <div>
              결과 : {result} / {questions.length}
            </div>
            <button className={styles.btn} onClick={onClickRetry}>
              돌아가기
            </button>
          </div>
        ) : null}
      </header>
    </div>
  );
}

export default Main;
