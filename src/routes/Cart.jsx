import { Breadcrumb, Table } from "antd";
import BreadcrumbItem from "antd/es/breadcrumb/BreadcrumbItem";
import { Link } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext";
import Column from "antd/es/table/Column";
import { CloseOutlined } from "@ant-design/icons";

const Cart = () => {
  const { totalItems, items } = useCartContext();
  const item = items.map((item) => item);
  console.log(item[0]);
  return (
    <section className="cart-page">
      <div className="container">
        <Breadcrumb separator=">">
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>Your Shopping Cart</BreadcrumbItem>
        </Breadcrumb>
        {totalItems ? (
          <div className="cart-products">
            {items.map((item) => {
              <Table dataSource={item}>
                <Column title="PRODUCT NAME" key={item.quantity} />
                <Column title="PRICE" key="price" />
                <Column title="QUANTITY" key="quantity" />
                <Column title="TOTAL" key="tags" />
                <Column
                  title="Action"
                  key="action"
                  render={() => <CloseOutlined />}
                />
              </Table>;
            })}
          </div>
        ) : (
          <div className="no-results">
            <h1>Your cart is currently empty.</h1>
            <p>
              Continue browsing <Link to={"/products"}>here</Link>.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
