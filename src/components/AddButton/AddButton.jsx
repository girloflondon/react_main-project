import styles from "./addButton.module.css";

function AddButton() {
  return (
    <div className={styles.addCard}>
      <div className={styles.add}></div>
    </div>
  );
}

export default AddButton;
