import React from "react";
import styles from "../FeedbackOptions/FeedbackOptions.module.css";

const btnClasses = [styles.button];

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map((option) => (
      <button
        className={btnClasses.join(" ")}
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        <span className={styles.btnText}>{option}</span>
      </button>
    ))}
  </>
);

export default FeedbackOptions;
