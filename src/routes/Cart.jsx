import { Breadcrumb } from "antd";
import React from "react";

const Cart = () => {
  return (
    <section className="cart-page">
      <div className="container">
        <Breadcrumb
          separator=">"
          items={[
            { title: "Home", href: "/" },
            { title: "Your Shopping Cart" },
          ]}
        ></Breadcrumb>
      </div>
    </section>
  );
};

export default Cart;
