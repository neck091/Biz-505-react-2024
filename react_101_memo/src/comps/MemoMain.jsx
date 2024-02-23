import styles from "../css/MemoMain.module.css";

const MemoMain = () => {
  return (
    <div className={styles.main}>
      <div className={styles.aside}>왼</div>
      <div className={styles.aside}>오</div>
    </div>
  );
};
export default MemoMain;
