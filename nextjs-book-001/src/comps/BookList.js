export default ({ bookList }) => {
  // const bookList = [
  //   "자바완전정복",
  //   "자바입문",
  //   "mysql",
  //   "데이터베이스",
  //   "nodejs",
  // ];
  const viewList = bookList.map((book) => {
    return <li>{book.title}</li>;
  });
  return <aside>{viewList}</aside>;
};
