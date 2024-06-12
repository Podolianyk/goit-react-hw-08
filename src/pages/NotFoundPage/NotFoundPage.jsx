import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.message}>
      <p>
        Sorry, page not found! Please go to <Link to="/">Home</Link>!
      </p>
    </div>
  );
}
