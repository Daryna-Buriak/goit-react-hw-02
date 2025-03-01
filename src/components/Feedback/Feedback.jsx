import css from "./Feedback.module.css";
import clsx from "clsx";

export default function Feedback({ options, goodFeedback, totalFeedback }) {
  return (
    <ul>
      {Object.entries(options).map(([key, value]) => (
        <li key={key}>
          {key}: {value}
        </li>
      ))}
      <li>Total Feedback: {totalFeedback}</li>
      <li>Positive Feedback: {goodFeedback}%</li>
    </ul>
  );
}
