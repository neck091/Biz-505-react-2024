import styles from "./write.module.css";
import { redirect } from "next/navigation";

const FORM_NAME = {
  CATEGORY: "category",
  SUBJECT: "subject",
  CONTENT: "content",
};
export default () => {
  //form의 input 에 저장된 값을 함수에 저장해주는 매개변수가 필요
  //formData 에 input 에 입력한 값들이 담겨서 전달
  const actionHandler = async (formData) => {
    "use server"; // 백엔드(서버) 요소처럼 동작하라
    const data = {
      category: formData.get(FORM_NAME.CATEGORY),
      subject: formData.get(FORM_NAME.SUBJECT),
      content: formData.get(FORM_NAME.CONTENT),
    };
    console.log("FORM", data);
    redirect("/blog/all");
  };

  console.log("여긴어디");
  return (
    <form
      className={styles.form}
      action={actionHandler}
      method="POST"
    >
      <input placeholder="카테고리" name={FORM_NAME.CATEGORY}></input>
      <input placeholder="제목" name={FORM_NAME.SUBJECT}></input>
      <textarea
        placeholder="내용"
        name={FORM_NAME.CONTENT}
        rows="20"
      />
      <input
        className={styles.submit}
        type="submit"
        value="저장하기"
      ></input>
    </form>
  );
};
