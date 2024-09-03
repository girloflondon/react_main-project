import styles from "./menu.module.css";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className={styles.container}>
      <Link to="/">Главная</Link>
      <Link to="/cards">Коллекция</Link>
      <Link to="/test">Игра</Link>
    </div>
  );
}
