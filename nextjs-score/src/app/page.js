"use client";
// import Image from "next/image";
import styles from "@/css/page.module.css";
import StudentList from "./comps/StudentList";
import { useEffect, useState } from "react";
import { selectAll as st_selectAll } from "@/app/api/student";
import StudentDetail from "./comps/StudentDetail";
import ScoreList from "./comps/ScoreList";
import { findByStNum } from "./api/score";

// import 한 selectAll 함수를 st_selectAll 이란 이름으로 사용하겠다
export default function Home() {
  const [studentList, setStudentList] = useState([]);
  const [scoreList, setScoreList] = useState([]);
  const [student, setStudent] = useState({});

  useEffect(() => {
    const stdFetch = async () => {
      const result = await st_selectAll();
      if (result) {
        setStudentList([...result]);
        setStudent(result[0]);
      }
    };
    stdFetch();
  }, []);
  useEffect(() => {
    const scoreFetch = async () => {
      const result = await findByStNum(student?.st_num ?? "S0001");
      setScoreList([...result]);
    };
    scoreFetch();
  }, [student]);

  return (
    <main className={styles.main}>
      <section className={styles.list}>
        <StudentList
          studentList={studentList}
          setStudent={setStudent}
        />
      </section>
      <section className={styles.detail}>
        <StudentDetail student={student}>
          <ScoreList scoreList={scoreList} />
        </StudentDetail>
      </section>
    </main>
  );
}
