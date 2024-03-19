"use client";
import { getStudentSubData } from "../api/subgrade";
import { useEffect, useState } from "react";

const StuCrud = ({ num }) => {
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

  return (
    <div>
      {stu && stu[0] && stu[0].student && (
        <>
          <div>
            <li>학번: {stu[0].student.s_num}</li>
            <li>이름: {stu[0].student.s_name}</li>
            <li>학과: {stu[0].student.s_dept}</li>
            <li>학년: {stu[0].student.s_grade}</li>
            <li>전화번호: {stu[0].student.s_tel}</li>
            <li>주소: {stu[0].student.s_addr}</li>
          </div>
          <div>
            <select>
              <option>과목을 선택하세요</option>
              <option>국어</option>
              <option>영어</option>
              <option>수학</option>
              <option>음악</option>
              <option>미술</option>
              <option>소프트웨어 공학</option>
              <option>데이터베이스</option>
            </select>
            <input type="number" min="0" max="100"></input>
            <button>저장</button>
          </div>
        </>
      )}
    </div>
  );
};

export default StuCrud;
