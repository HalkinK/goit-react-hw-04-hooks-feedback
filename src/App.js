import { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";

const option = ["good", "neutral", "bad"];

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (option) => {
    switch (option) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;

      default:
        return;
    }
  };

  const total = good + neutral + bad;

  const positivePercentage = Math.trunc((good / total) * 100);

  return (
    <>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions options={option} onLeaveFeedback={handleClick} />
      </Section>

      {total === 0 ? (
        <Notification message={"No feedback given"} />
      ) : (
        <Section title={"Statistics"}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      )}
    </>
  );
}

export default App;
