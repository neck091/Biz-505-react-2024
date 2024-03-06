"use client";
import { useEffect, useState } from "react";
import { getNaverBooks } from "@/api/naver_api";

//bookseach 에서 검색어를 입력하면 변화 발생, bookList ㅇ서는 변화된 search satae 의 값을 사용하여

//client 컴포넌트인 BookList 에서 naver api 모듈의 getNaverBooks 모듈의 함수를 호출하여 naver로 부터 데이터를 가져와야함.
/**
 * 
 *문제는 api가 server 모듈.
 클라이언트에서 서버모듈을 이용해
 뭔가 일을 수행하려면 반드시 useEffect 로 wrapping 해야함.
*/

const BookList = ({ search, setIsbn }) => {
  const [books, setBooks] = useState([]);

  /**
   * useEffect 함수에서 익명의 함수를 생성하고
   * useEffect(()=>{},[]) : useEffect 의 기본 몸체
   * 몸체({}) 에서 async 로 사용할 함수를 선언
   *  여기에서는 const fetch =async()=>{}
   * 
   * useEffect(()=>{
   * const fetch = async=()=>{} },[])
   *이 함수를 다시 호출하여 실행

   useEffect(()=>{
const fetchData = async () =>{} //선언
fetctData() //호출
},[])
   * 
   *  
   */
  useEffect(() => {
    const fetchData = async () => {
      const result = await getNaverBooks(search);
      //client 컴포넌트인 booklist 에서 console.log를 사용하면
      //브라우저의 개발자도구 consloe에 내용출력
      console.log(result);
      // setBooks([...result]);
    };
    fetchData();
  }, [search]);

  const viewList = books.map((book) => {
    return (
      <li
        key={book.isbn}
        onClick={() => {
          setIsbn(book.isbn);
        }}
      >
        {book.title}
      </li>
    );
  });
  return <ul>{viewList}</ul>;
};

export default BookList;
