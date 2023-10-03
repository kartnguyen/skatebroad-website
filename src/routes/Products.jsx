import { useState } from "react";
import { useAppContext } from "../hooks/useAppContext";
import { Breadcrumb, Drawer, Dropdown, Space, notification } from "antd";
import {
  FilterOutlined,
  DownOutlined,
  RightOutlined,
  ShoppingOutlined,
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { formattedPrice } from "../assets/js/api";
import { Link } from "react-router-dom";
import BreadcrumbItem from "antd/es/breadcrumb/BreadcrumbItem";
import { useCartContext } from "../hooks/useCartContext";

const Products = () => {
  const [sortingLabel, setSortingLabel] = useState("Default Sorting");
  const [open, setOpen] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const { products, findProductById } = useAppContext();
  const { handleAddItem } = useCartContext();

  const items = [
    {
      label: "Alphabetically, A-Z",
      key: "1",
    },
    {
      label: "Price, low to high",
      key: "2",
    },
    {
      label: "Price, high to low",
      key: "3",
    },
  ];

  const handleSortingLabel = (label) => {
    setSortingLabel(label);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleQuickview = () => {
    setShowImage(!showImage);
  };
  const openNotification = (product, qty) => {
    notification.success({
      message: "Successful Purchase",
      description: (
        <div className="description-alert">
          <div
            className="alert-img"
            style={{ backgroundImage: `url('${product.thumbnail}')` }}
          ></div>
          <p>
            <b>{product.name}</b>
            <p>X {qty}</p>
          </p>
        </div>
      ),
      icon: (
        <ShoppingCartOutlined
          style={{
            color: "#00FF5F",
          }}
        />
      ),
      duration: 1.5,
    });
  };
  const onAddItem = (id, qty) => {
    const product = findProductById(id);
    handleAddItem(id, qty);
    openNotification(product, qty);
  };
  return (
    <section>
      <div className="breadcrumb">
        <h1 className="breadcrumb-title">Products</h1>
        <Breadcrumb separator=">">
          <BreadcrumbItem>
            <Link to={"/"}>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>Products</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="container">
        <div className="filter-container">
          <div className="filter">
            <button onClick={showDrawer}>
              <FilterOutlined />
              Filter
            </button>
            <Drawer
              placement="left"
              onClose={onClose}
              width={300}
              title="Filter"
              open={open}
            >
              <div className="filter-side-bar">
                <div className="item">
                  <div className="item-title">
                    <h2>Categories</h2>
                  </div>
                  <ul>
                    <li className="cate">
                      <RightOutlined />
                      Featured
                    </li>
                    <li className="cate">
                      <RightOutlined />
                      Top Seller
                    </li>
                    <li className="cate">
                      <RightOutlined />
                      Latest
                    </li>
                  </ul>
                </div>
                <div className="item">
                  <div className="item-title">
                    <h2>Size</h2>
                  </div>
                  <ul className="size">
                    <li>
                      <button>S</button>
                    </li>
                    <li>
                      <button>M</button>
                    </li>
                    <li>
                      <button>L</button>
                    </li>
                  </ul>
                </div>
                <div className="item">
                  <div className="item-title">
                    <h2>Color</h2>
                  </div>
                  <ul className="flex">
                    <li>
                      <button
                        className="color"
                        style={{ backgroundColor: "black" }}
                      ></button>
                    </li>
                    <li>
                      <button
                        className="color"
                        style={{ backgroundColor: "blue" }}
                      ></button>
                    </li>
                    <li>
                      <button
                        className="color"
                        style={{ backgroundColor: "white" }}
                      ></button>
                    </li>
                  </ul>
                </div>
              </div>
            </Drawer>
          </div>
          <div className="sorting">
            <Dropdown
              menu={{
                items,
                onClick: ({ key }) =>
                  handleSortingLabel(
                    items.find((item) => item.key === key)?.label ||
                      "Default Sorting"
                  ),
              }}
              trigger={"click"}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  {sortingLabel}
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
        <div className="products-container">
          {products.map((product) => (
            <div key={product.id} className="products">
              <Link to={`/products/${product.id}`}>
                <div
                  className="img"
                  style={{ backgroundImage: `url(${product.thumbnail})` }}
                ></div>
              </Link>
              <div className="content">
                <Link to={`/products/${product.id}`}>
                  <h4>{product.name}</h4>
                </Link>
                <p>{formattedPrice(product.price)}</p>
              </div>
              <div className="menu">
                <div
                  className="icon"
                  onClick={() => onAddItem(product.id, product.quantity)}
                >
                  <ShoppingOutlined title="Add To Cart" />
                </div>
                <div className="icon" onClick={handleQuickview}>
                  <SearchOutlined title="Quickview" />
                </div>
                <div className="icon">
                  <HeartOutlined title="Add To Wishlist" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
