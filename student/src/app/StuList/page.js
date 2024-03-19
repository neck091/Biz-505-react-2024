//STU LSIT

"use client";
import React, { useState, useEffect } from "react";
import { selectAllStu } from "../api/student";
import "./list.css";
const StuList = ({ search, setNum }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let stList;
      if (search === "") {
        stList = await selectAllStu();
      } else {
        stList = await selectAllStu(search);
      }
      const result = stList.map((item) => ({
        num: item.s_num,
        name: item.s_name,
      }));
      setStudents(result);
    };
    fetchData();
  }, [search]);

  return (
    <table className="list">
      <thead>
        <tr>
          <th>학번</th>
          <th>이름</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.num} onClick={() => setNum(student.num)}>
            <td>{student.num}</td>
            <td>{student.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default StuList;
