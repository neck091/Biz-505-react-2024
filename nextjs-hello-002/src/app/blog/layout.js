// blog/layout.js
import styles from "./blog.module.css";
import AsideList from "@/comps/AsideList";

export default ({ children }) => {
  return (
    <main className={styles.main}>
      <aside className={styles.aside}>
        <AsideList />
      </aside>
      <section className={styles.section}>{children}</section>
    </main>
  );
};
