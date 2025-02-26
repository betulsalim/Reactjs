import React from "react";

function Product(props) {
  const {productName, price} = props // props.productName demekten kurtulma
  return (
    <div>
      <div>ÜRÜN BİLGİLERİ:</div>
      <hr />
      <div>
        <div>İsim : {productName}</div>
        <div>Fiyat: {price}</div>
      </div>
      <hr />
    </div>
  );
}

export default Product;
