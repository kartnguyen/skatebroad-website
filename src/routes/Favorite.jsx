import { Breadcrumb } from "antd";
import BreadcrumbItem from "antd/es/breadcrumb/BreadcrumbItem";
import { Link } from "react-router-dom";

const Favorite = () => {
  return (
    <section className="wishlist-page">
      <div className="container">
        <Breadcrumb separator=">">
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>Your Wishlist</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </section>
  );
};

export default Favorite;
