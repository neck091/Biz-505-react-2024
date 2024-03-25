import css from "@/src/css/order.insert.module.css";

const OrderInsert = () => {
  return (
    <article className={css.main}>
      <h1>주문번호:</h1>
      <form>
        <div>
          <input placeholder="고객코드"></input>
          <button>검색</button>
        </div>
        <div>
          <ul>
            <li>리스트</li>
          </ul>
        </div>
        <div>
          <input placeholder="상품코드"></input>
          <button>검색</button>
        </div>
        <div>
          <input placeholder="주문수량"></input>
          <button>상품추가</button>
        </div>
        <div>
          <table className={css.tbl}>
            <tr>
              <th>상품코드</th>
              <th>상품명</th>
              <th>주문수량</th>
            </tr>
            <tr>
              <td>테이블</td>
              <td>ddd</td>
              <td>ddd</td>
            </tr>
          </table>
        </div>
      </form>
    </article>
  );
};
export default OrderInsert;
