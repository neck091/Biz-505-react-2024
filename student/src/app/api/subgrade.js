"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getStudentSubData = async (studentNum) => {
  try {
    // 해당 학번에 해당하는 학생의 성적 데이터를 가져옵니다.
    const studentSubData = await prisma.tbl_stu_sub.findMany({
      where: {
        r_snum: studentNum,
      },
    });

    // 각 성적 데이터에 대해 해당하는 학생과 과목 정보를 가져옵니다.
    const studentSubDataWithDetails = await Promise.all(
      studentSubData.map(async (subData) => {
        const student = await prisma.tbl_stu.findUnique({
          where: {
            s_num: subData.r_snum,
          },
        });
        const subject = await prisma.tbl_sub.findUnique({
          where: {
            s_code: subData.r_scode,
          },
        });
        return {
          student,
          subject,
          result: subData.result,
        };
      })
    );

    return studentSubDataWithDetails;
  } catch (error) {
    console.error(
      "Error retrieving student sub data by student number:",
      error
    );
    throw error;
  }
};
