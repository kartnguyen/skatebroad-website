import { Breadcrumb, Image, Table } from "antd";
import BreadcrumbItem from "antd/es/breadcrumb/BreadcrumbItem";
import { Link } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext";
import { DeleteOutlined } from "@ant-design/icons";
import { formattedPrice } from "../assets/js/api";

const Cart = () => {
  const { totalItems, items, handleRemoveItem } = useCartContext();

  let totalPrice = 0;
  for (let i = 0; i < totalItems; i++) {
    totalPrice += items[i].product.price * items[i].quantity;
  }

  const dataSource = items.map((item) => ({
    key: item.product.id,
    name: item.product.name,
    price: item.product.price,
    quantity: item.quantity,
    img: item.product.thumbnail,
    total: item.product.price * item.quantity,
  }));

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="cart-table">
          <Image src={record.img} width={100} />
          <Link to={`/products/${record.key}`}>
            <b>{record.name}</b>
          </Link>
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (_, record) => formattedPrice(record.price),
      responsive: ["md"],
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      render: (_, record) => formattedPrice(record.total),
    },
    {
      title: "Delete",
      key: "id",
      render: (text, record) => (
        <DeleteOutlined
          style={{ fontSize: "20px", color: "#444" }}
          onClick={() => handleRemoveItem(record.key)}
        />
      ),
    },
  ];

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
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              bordered
            />
            <div className="check-out">
              <div className="total">
                <h4>Total</h4>
                <b>{formattedPrice(totalPrice)}</b>
              </div>
              <Link to="/checkout">
                <button className="check-out-btn">Proceed to checkout</button>
              </Link>
            </div>
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
