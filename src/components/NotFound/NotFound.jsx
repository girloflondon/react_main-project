import styles from "./notFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <p className={styles.message}>
        Ошибка 404: похоже, что мы немного потерялись. Давайте вернёмся назад.
        Для этого выберите любую страницу в меню, либо нажмите на стрелочку
        "назад" в панели браузера.
      </p>
    </div>
  );
}
