import { Breadcrumb, Image, Table } from "antd";
import BreadcrumbItem from "antd/es/breadcrumb/BreadcrumbItem";
import { Link } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext";
import { formattedPrice } from "../assets/js/api";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const { totalItems, items } = useCartContext();

  let totalPrice = 0;
  for (let i = 0; i < totalItems; i++) {
    totalPrice += items[i].product.price * items[i].quantity;
  }
  let shippingPrice = 8.5;
  if (totalItems >= 2) {
    shippingPrice = 0;
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
          <Image
            style={{ border: "1px solid #ccc", borderRadius: "4px" }}
            src={record.img}
            width={80}
          />
          <p>{record.name}</p>
        </div>
      ),
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
  ];
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section className="checkout-page">
      <div className="container">
        <Breadcrumb separator=">">
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>Check Out</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="checkout_page">
        <div className="container checkout_obj">
          <div className="information">
            <div className="delivery">
              <h3>Delivery</h3>
              <div className="list">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label>First name</label>
                  <input
                    type="text"
                    {...register("First name", {
                      required: true,
                      maxLength: 80,
                    })}
                  />
                  <label>Last name</label>
                  <input
                    type="text"
                    {...register("Last name", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  <label>Email</label>
                  <input
                    type="text"
                    {...register("Email", {
                      required: true,
                      pattern:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                  />
                  <label>Mobile number</label>
                  <input
                    type="tel"
                    {...register("Mobile number", {
                      required: true,
                      maxLength: 11,
                      minLength: 8,
                    })}
                  />
                </form>
                <div className="item">
                  <label htmlFor="name">
                    <p>Full Name</p>
                    <span className="required" title="required">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="input name"
                    placeholder="Full Name"
                  />
                </div>
                <div className="item">
                  <label htmlFor="phone">
                    <p>Phone Number</p>
                    <span className="required" title="required">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="input phone"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="item">
                  <label htmlFor="email">
                    <p>Email</p>
                    <span className="required" title="required">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="input email"
                    placeholder="Email"
                  />
                </div>
                <div className="item">
                  <label htmlFor="district">
                    <p>District</p>
                    <span className="required" title="required">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    id="district"
                    className="input district"
                    placeholder="District"
                  />
                </div>
                <div className="item">
                  <label htmlFor="address">
                    <p>Address</p>
                    <span className="required" title="required">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="input address"
                    placeholder="Address"
                  />
                </div>
              </div>
            </div>
            <div className="method">
              <h3>Payment</h3>
              <div className="list">
                <div className="method_item">
                  <label htmlFor="item1" className="item">
                    <input
                      type="radio"
                      id="item1"
                      name="method"
                      defaultValue="online_payment"
                    />
                    <label htmlFor="item1" className="check-box" />
                    <p>Online Payment</p>
                  </label>
                </div>
                <div className="method_item">
                  <label htmlFor="item2" className="item">
                    <input
                      type="radio"
                      id="item2"
                      name="method"
                      defaultValue="on_delivery"
                    />
                    <label className="check-box" htmlFor="item2" />
                    <p>Cash on Delivery</p>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="order">
            <h3>Shopping Cart</h3>
            <div className="order_item">
              <div className="cake">
                <Table
                  dataSource={dataSource}
                  columns={columns}
                  pagination={false}
                  size="small"
                />
              </div>
              <div style={{ marginTop: "auto", marginRight: 16 }}>
                <div className="item">
                  <p>Subtotal : </p>
                  <span className="ttbill">{formattedPrice(totalPrice)}</span>
                </div>
                <div className="item">
                  <div>
                    <p>Shipping : </p>
                    <p
                      style={{
                        fontSize: 11,
                        fontStyle: "italic",
                        marginTop: 4,
                      }}
                    >
                      (Free shipping when purchasing from 2 products)
                    </p>
                  </div>
                  <span className="ship">{formattedPrice(shippingPrice)}</span>
                </div>
                <div className="hr-container">
                  <div className="hr-line" />
                </div>
                <div className="item">
                  <h4>Total:</h4>
                  <span className="allbill" style={{ fontWeight: "bold" }}>
                    {formattedPrice(totalPrice + shippingPrice)}
                  </span>
                </div>
              </div>
            </div>
            <Link className="check_out" to={"checkout"}>
              <button className="confirm">
                Check Out
                <div className="triangle-top-right" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
