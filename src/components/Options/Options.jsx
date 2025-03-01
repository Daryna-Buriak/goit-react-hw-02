import css from "./Options.module.css";
import clsx from "clsx";

export default function Options({
  options,
  handleClick,
  handleReset,
  totalFeedback,
}) {
  return (
    <div>
      {options.map((option, index) => (
        <button key={index} onClick={() => handleClick(option)}>
          {option}
        </button>
      ))}
      {totalFeedback > 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
}
