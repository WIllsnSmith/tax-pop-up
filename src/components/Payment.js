import React from "react";
import "../style/Payment.scss";

const Payment = ({ pay, index }) => {
  return (
    <>
      <div className="pay">
        <input type="checkbox" />
        <span className="pay__sum">{pay} рублей</span>
        <span className="pay__year">в {index + 1}-й год</span>
      </div>
      <hr />
    </>
  );
};

export default Payment;
