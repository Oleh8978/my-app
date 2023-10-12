/**
 * 
 * @param {*} param0 
 * @returns 
 */
function Cart({ element }) {
  return (
    <div className="horizontal-cart">
      <div className="horizontal-cart__top">
        <div className="horizontal-cart__top-number">{element.regular}</div>
        <div className="horizontal-cart__top-dayweek">{element.shortDayOfWeek}</div>
      </div>
      <div className="horizontal-cart__bottom">
        <div className="horizontal-cart__bottom-month">{element.monthStringLong}</div>
        <div className="horizontal-cart__bottom-dmy">{element.dmy}</div>
      </div>
    </div>
  );
}

export default Cart;