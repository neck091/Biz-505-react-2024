"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const ORDER = prisma.tbl_orders;
export const selectAll = async () => {
  const result = await ORDER.findMany();
  //   console.log(result);

  return result;
};

export const findByCcode = async (c_code) => {
  const result = await ORDER.findMany({
    where: {
      o_ccode: c_code,
    },
  });
  console.log("검색결과", result);
  return result;
};

export const getOrderListByPcode = async (c_code) => {
  const result = await ORDER.findMany({
    where: {
      o_ccode: c_code,
    },
    orderBy: { o_num: "asc" },
    include: {
      products: { include: { product: true } },
    },
  });
  console.log("결과", result);
  return result;
};
