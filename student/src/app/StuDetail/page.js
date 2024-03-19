"use client";
import { getStudentSubData } from "../api/subgrade";
import { useEffect, useState } from "react";

const StuDetail = ({ num }) => {
  const [stu, setStu] = useState(null);

  useEffect(() => {
    const fetchStu = async () => {
      try {
        const result = await getStudentSubData(num);
        setStu(result);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };
    fetchStu();
  }, [num]);
  // 과목 순서를 정의합니다.
  const subjectOrder = [
    "국어",
    "영어",
    "수학",
    "음악",
    "미술",
    "소프트웨어 공학",
    "데이터베이스",
  ];

  // 주어진 과목 순서대로 정렬합니다.
  const sortedSubjects = stu?.sort((a, b) => {
    return (
      subjectOrder.indexOf(a.subject.s_sub) -
      subjectOrder.indexOf(b.subject.s_sub)
    );
  });

  // 총점을 계산합니다.
  const totalScore = sortedSubjects
    ? sortedSubjects.reduce(
        (acc, cur) => acc + parseInt(cur.result),
        0
      )
    : 0;

  // 평균을 계산합니다.
  const averageScore = totalScore
    ? (totalScore / sortedSubjects.length).toFixed(0)
    : 0;

  return (
    <div>
      {stu && (
        <div>
          <li>학번: {stu[0].student.s_num}</li>
          <li>이름: {stu[0].student.s_name}</li>
          <li>학과: {stu[0].student.s_dept}</li>
          <li>학년: {stu[0].student.s_grade}</li>
          <li>전화번호: {stu[0].student.s_tel}</li>
          <li>주소: {stu[0].student.s_addr}</li>
        </div>
      )}
      {stu && (
        <table className="sub">
          <thead>
            <tr>
              <th>과목</th>
              <th>점수</th>
            </tr>
          </thead>
          <tbody>
            {sortedSubjects.map((data, index) => (
              <tr key={index}>
                <td>{data.subject.s_sub}</td>
                <td>{data.result}</td>
              </tr>
            ))}
            <tr>
              <td>총점</td> <td>{totalScore} </td>
            </tr>
            <tr>
              <td>평균 </td> <td>{averageScore} </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StuDetail;
