"use client";
import Link from "next/link";
import styles from "./asideList.module.css";
import { usePathname } from "next/navigation";

export default () => {
  // Link, router 를 통해서 열렸을 때 사용한 URL을 알려주는 함수
  const pathname = usePathname();
  const routes = [
    { path: "/blog/write", title: "글쓰기" },
    { path: "/blog/new", title: "새 글 보기" },
    { path: "/blog/like", title: "인기글 보기" },
    { path: "/blog/all", title: "전체보기" },
  ];

  const viewRoutes = routes.map((reoute) => {
    return (
      <li>
        <Link
          href={routes.path}
          className={pathname === routes.path ? styles.active : ""}
        >
          {routes.title}
        </Link>
      </li>
    );
  });
  return <ul className={styles.ul}>{viewRoutes}</ul>;
};
