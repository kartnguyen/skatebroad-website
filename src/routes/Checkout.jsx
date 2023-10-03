import { Breadcrumb } from "antd";
import BreadcrumbItem from "antd/es/breadcrumb/BreadcrumbItem";
import { Link } from "react-router-dom";

const Checkout = () => {
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
    </section>
  );
};

export default Checkout;
