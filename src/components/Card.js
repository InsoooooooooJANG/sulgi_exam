import { useEffect } from "react";
import styles from "../styles/Card.module.css";

function Card({ question, answer, checkAnswer, addResultToScore }) {
  useEffect(() => {
    if (checkAnswer && question.rightAnswer) {
      addResultToScore(answer === question.rightAnswer);
    }
    // eslint-disable-next-line
  }, [checkAnswer]);

  return (
    <div className={styles.cardBody}>
      {question && question.question
        ? question.question.map((item, idx) => {
            return <p key={idx}>{item}</p>;
          })
        : null}
    </div>
  );
}

export default Card;
