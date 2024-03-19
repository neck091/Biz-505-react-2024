"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const selectAll = async () => {
  try {
    const result = await prisma.tbl_student.findMany();
    prisma.$disconnect;
    return result;
  } catch (error) {
    console.error(error);
    prisma.$disconnect;
  }
};
