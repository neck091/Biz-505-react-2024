import Link from "next/link";
import { selectAll } from "../api/notice";
//notice/page.js
export default async () => {
  const noticeList = await selectAll();
  const viewList = noticeList.map((item) => {
    return <li>{item.m_subject}</li>;
  });
  return (
    <div>
      <ul>{viewList}</ul>
      <Link href="/notice/input">공지사항 작성</Link>
    </div>
  );
};
