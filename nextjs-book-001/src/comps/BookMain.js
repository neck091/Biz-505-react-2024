"use client";
import BookSearch from "./BookSearch";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import "./BookMain.css";
import { useState, useEffect } from "react";

export default () => {
  const [search, setSearch] = useState("");
  const [bookList, setBookList] = useState([]);
  const fetchBooks = async () => {
    try {
      const response = await fetch("/api/get");
      const books = await response.json();
      setBookList([...books]);
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * useEffect()는 CSR 컴포넌트에서 특정한 state 변수를 감시하고 있다가
   * state 변수에 변화가 생기면 이벤트를 일으키고 내부의 코드를 실행.
   *
   * useDffect()에 state([])를 공백으로 두면 현재 컴포넌트가
   * 화면에 마운트 되었을 때 한 번 이벤트를 발생하고 내부의 코드를 실행
   */

  useEffect(() => {
    fetchBooks();
  }, [search]);

  return (
    <section>
      <BookSearch search={search} setSearch={setSearch} />
      <article className="body">
        <BookList bookList={bookList} />
        <BookDetail />
      </article>
    </section>
  );
};
