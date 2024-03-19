"use server";
import { PrismaClient } from "@prisma/client";

const DB = new PrismaClient();

export const selectAllStu = async (search) => {
  try {
    if (!search) {
      const students = await DB.tbl_stu.findMany();
      await DB.$disconnect();
      return students;
    } else {
      const students = await DB.tbl_stu.findMany({
        where: {
          OR: [
            {
              s_num: {
                contains: search,
              },
            },
            {
              s_name: {
                contains: search,
              },
            },
            // 필요한 경우 다른 필드도 검색 조건으로 추가할 수 있습니다.
          ],
        },
      });
      await DB.$disconnect();
      return students;
    }
  } catch (error) {
    console.error("Error fetching student data:", error);
    throw error;
  }
};
