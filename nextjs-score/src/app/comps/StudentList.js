import css from "@/css/student.module.css";
const StudentList = ({ studentList, setStudent }) => {
  const viewList = studentList.map((itme) => (
    <>
      <li
        key={itme.st_num}
        className={css.item}
        onClick={() => setStudent(itme)}
      >
        <strong>{itme.st_num}</strong>
        <strong>{itme.st_name}</strong>
        <span>{itme.st_dept}</span>
      </li>
    </>
  ));
  return (
    <>
      <ul className={css.body}>
        <li className={(`${css.item}`, `${css.title}`)}>
          <strong>이름</strong>
          <span>학과</span>
        </li>
        {viewList}
      </ul>
    </>
  );
};

export default StudentList;
