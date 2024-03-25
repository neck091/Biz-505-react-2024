"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const PRODUCT = prisma.tbl_product;

export const findByPname = async (pname) => {
  const result = await PRODUCT.findMany({
    where: {
      OR: [
        {
          p_name: {
            contains: pname,
          },
        },
        {
          p_code: {
            contains: pname,
          },
        },
      ],
    },
  });
  console.log("상품", result);
  return result;
};
