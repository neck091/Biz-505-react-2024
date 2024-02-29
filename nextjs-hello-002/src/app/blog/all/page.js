/**
 * nextjs 는 SSR, CSR 을 같이 지원하는 Framework 이다
 * pure(순수) react 에서는 모든 것이 CSR 이기 때문에 별다른 조치 없이
 * 내장된 함수 또는 기능 등을 사용할 수 있다.
 * 하지만 NextJS 에서는 컴포넌트가 SSR에서 동작하느냐 CSR 에서 동작하느냐에 따라 사용할 수 있는
 * 함수나 기능이 차이가 있다.
 * CSR 에서 동작하는 함수를 그냥 사용하면 사용불가 오류가 난다.
 *
 * 이 컴포넌트에서는 useRouter 함수와 onClick 기능을 사용하려고 한다.
 * 이런 경우엔 현재 컴포넌트가 CSR 환경에서 동작하도록 명시해주어야 함
 * "use client" 를 파일 첫 라인에 명시해 주면 이 컴포넌트는 CSR 환경에서 동작한다.
 */
"use client";
import { useRouter } from "next/navigation";

export default () => {
  const router = useRouter();

  // db 등에서 fetch 한 List를 화면에 출력
  const blogList = [
    { id: 1, subject: "안녕하세요" },
    { id: 2, subject: "반가워요" },
    { id: 3, subject: "오늘은 목요일 " },
  ];
  const onClickHandler = (id) => {
    // alert(id);
    router.push(`/blog/detail/${id}`);
    //router.push 함수에서 정한 router로 전환해줌
  };
  // event 핸들러에 어떤 값을 전달하고자 할 때
  // 핸들러 세팅 onClick={()=>호출할 함수(전달할 값)}
  //onClick={호출할 함수(전달할 값)} 처럼 사용하면 안됨.
  const viewList = blogList.map((blog) => {
    return (
      <li key={blog.id} onClick={() => onClickHandler(blog.id)}>
        <span>{blog.id}</span>
        <span>{blog.subject}</span>
      </li>
    );
  });
  return (
    <>
      <h3>전체글 보기</h3>
      <ul>{viewList}</ul>
    </>
  );
};

//v12 이하에서 사용시행되는 함수
// export const getStaticProps = async () => {
//   const blogList = ["안녕", "반갑습니다", "오늘은 목요일"];

//   return {
//     props: {
//       blogList: blogList,
//     },
//   };
// };
