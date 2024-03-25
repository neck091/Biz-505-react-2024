"use client";

import css from "@/src/css/order.insert.module.css";
import { useCallback, useEffect, useState } from "react";
import { findByCustomer } from "../../api/customer";
import CustomSearch from "./CustomSearch.js";
import { getOrderListByPcode } from "../../api/order";
import { findByPname } from "../../api/product";
import ProductSearch from "./ProductSearch.js";

const OrderInsert = () => {
  const [search, setSearch] = useState("");
  const [customList, setCustomList] = useState([]);
  const [customer, setCustomer] = useState("");
  const [orderList, setOrderList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [product, setProduct] = useState("");
  /**
   * use callback
   * State 생성 영역(컴포넌트 함수 내의 return 명령 이전의 영역)에
   * 선언하는 함수는 잘못하면 메모리 누수(memory leck)을 유발할 수 있음
   * state를 사용하여 화면에 어떤 변화를 주는 코드를 작성했을 때
   * 작은 부분에서 state의 변동은 화면에는 거의 움직임 없이 처리된다
   * 하지만 State 영역에 선언된 함수는 state가 변화되는
   * 짧은 시간동안 계속해서 함수를 선언, 생성하는 동작이 반복
   *
   * 이미 함수를 만들어서 사용하고 있음에도 불구하고 무시하고
   * 새로 생성을 하게 됨.
   * 이런 과정에서 사용하지 않는 함수의 선언값이 메모리에 남게되고
   * 메모리 누수가 발생
   * 함수를 useCallback으로 감싸주면 이미 만들어진 함수를 재활용.
   */
  const customChangeHandler = useCallback(async (e) => {
    const search = e.target.value;
    // console.log(search);
    if (search) {
      const result = await findByCustomer(search);
      setCustomList([...result]);
    } else {
      setCustomList([]);
    }
  });

  useEffect(() => {
    const fetchOrder = async () => {
      if (customer && customer?.c_code) {
        const result = await getOrderListByPcode(customer.c_code);
        setOrderList([...result]);
      }
    };
    fetchOrder();
  }, [customer]);

  /**
   * 상품정보 input box에 상품 이름을 입력하면 tbl_product에서
   * 상품 정보를 fetch 하고
   * 상품검색 input box 아래에 목록을 보여주는 코드 작성
   */
  const productChangeHandler = useCallback(async (e) => {
    const search = e.target.value;
    // console.log(search);
    if (search) {
      const result = await findByPname(search);
      setProductList([...result]);
    } else {
      setProductList([]);
    }
  });

  return (
    <article className={css.main}>
      <form className={css.form}>
        <div className={css.custom}>
          <input
            onChange={customChangeHandler}
            placeholder="고객정보"
            defaultValue={search}
          ></input>
          <button>검색</button>
          {customList.length > 0 && (
            <CustomSearch
              customList={customList}
              setCustomList={setCustomList}
              setCustomer={setCustomer}
            />
          )}
          {customer && (
            <ul>
              <li>고객코드:{customer.c_code}</li>
              <li>고객이름:{customer.c_name}</li>
              <li>전화번호:{customer.c_tel}</li>
            </ul>
          )}
        </div>
        <div className={css.custom}>
          <input
            onChange={productChangeHandler}
            placeholder="상품정보"
            defaultValue={search}
          ></input>
          {productList.length > 0 && (
            <ProductSearch productList={productList} />
          )}

          <input placeholder="주문수량"></input>
          <button>추가</button>
        </div>
      </form>
      <div>
        <h1>주문목록</h1>
        <ul className={css.product_list}>
          {orderList.map((order) => (
            <li>
              <p>
                {order.o_num}, {order.o_date}
              </p>
              <ul className={css.product}>
                {order.products.map((item) => (
                  <li>
                    {item.op_pcode}, {item.product.p_name} ,
                    {item.product.p_item},{item.product.p_item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
export default OrderInsert;
