import styles from "./page.module.css";

//익명(무명) 컴포넌트 export
// JS 에서 함수, 컴포넌트를 export default 할 수 있는 대상
// 파일 1개당 1개만 가능
// export default 는  export 하는 이름이 의미가 없다
// 익명으로 export 해도 문제 없음
export default () => {
  return (
    <main className={styles.main}>
      <h1>나의 NextJs 첫 프로젝트</h1>
      <p>{/* <a href="/bbs">게시판</a> */}</p>
      <p>{/* <a href="/notice">공지사항</a> */}</p>
    </main>
  );
};
