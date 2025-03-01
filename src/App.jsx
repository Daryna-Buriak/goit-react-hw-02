import "./App.css";
import { useState, useEffect } from "react";

import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

export default function App() {
  const initialState = { good: 0, neutral: 0, bad: 0 };

  const [reviewState, setReviewState] = useState(() => {
    const savedState = localStorage.getItem("reviewState");
    return savedState ? JSON.parse(savedState) : initialState;
  });

  const [clicks, setClicks] = useState(0);

  function updateFeedback(feedbackType) {
    setReviewState((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  }

  function resetFeedback() {
    setReviewState(initialState);
  }

  const totalFeedback = Object.values(reviewState).reduce(
    (sum, value) => sum + value,
    0
  );

  const goodFeedback =
    totalFeedback > 0
      ? Math.round((reviewState.good / totalFeedback) * 100)
      : 0;

  useEffect(() => {
    localStorage.setItem("reviewState", JSON.stringify(reviewState));
  }, [reviewState]);

  useEffect(() => {
    localStorage.setItem("goodFeedback", goodFeedback);
    localStorage.setItem("totalFeedback", totalFeedback);
  }, [totalFeedback, goodFeedback]);

  return (
    <>
      <Description
        title="Sip Happens Café"
        description="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options
        options={Object.keys(reviewState)}
        handleClick={updateFeedback}
        handleReset={resetFeedback}
        totalFeedback={totalFeedback}
      />

      {totalFeedback ? (
        <Feedback
          options={reviewState}
          goodFeedback={goodFeedback}
          totalFeedback={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
