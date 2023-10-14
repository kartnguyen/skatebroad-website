import { Breadcrumb } from "antd";

const Wishlist = () => {
  return (
    <section className="wishlist-page">
      <div className="container">
        <Breadcrumb
          separator=">"
          items={[
            {
              title: "Home",
              href: "/",
            },
            {
              title: "Your Wishlist",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Wishlist;
