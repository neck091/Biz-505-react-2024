/**
 * NextJS에서 컴포넌트는 기본적으로 server 컴포넌트가 된다.
 * 하지만 기타 모듈은 "use server"라고 명시해줘야 함.
 */
"use server";
import { PrismaClient } from "@prisma/client";

const DB = new PrismaClient();

export const selectAll = async () => {
  try {
    const quest = await DB.tbl_quest.findMany();
    await DB.$disconnect();
    return quest;
  } catch (error) {
    return null;
  }
};
