import css from "./Description.module.css";
import clsx from "clsx";

export default function Description({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
