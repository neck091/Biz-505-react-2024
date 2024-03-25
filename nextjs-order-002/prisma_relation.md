# 다중 table 구조의 project에서 JOIN 설정하기

- 다중 table 간의 relation 을 설정해야 한다.
- tbl_order_product 에 relation 설정하기
- 어떤 모델에 relation을 설정할 것인가
- 1번째 1:N 의 관계일 때 N인 table
- 2번째 엄밀한 1:1 의 관계일 때 연관되는 칼럼이 PK 칼럼이 아닌 table

```shema.prisma

model tbl_order_product {
  op_onum  String @db.VarChar(6)
  op_pcode String @db.VarChar(6)

  orders   tbl_orders   @relation(fields: [op_onum], references: [o_num])
  product   tbl_product   @relation(fields: [op_pcode], references: [p_code])


  @@id([op_onum, op_pcode])

  @@index([op_pcode], map: "fk_p")


}


```
