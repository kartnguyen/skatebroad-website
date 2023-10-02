import { Link, useParams } from "react-router-dom";
import { formattedPrice } from "../assets/js/api";
import { useAppContext } from "../hooks/useAppContext";
import { useEffect, useState } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Breadcrumb, Skeleton } from "antd";

const ProductDetail = () => {
  const [loading, setLoading] = useState(true);
  const [currentImg, setCurrentImg] = useState();
  const { productId } = useParams();
  const { findProductById } = useAppContext();

  const product = findProductById(productId);
  useEffect(() => {
    if (product) {
      // setTimeout(() => setLoading(false), 1000);
      setCurrentImg(product.images[0]);
    }
  }, [product]);

  const handleImgSlider = (img) => {
    setCurrentImg(img.img);
    console.log(img);
  };
  return (
    <div>
      <div className="container">
        <Breadcrumb
          separator=">"
          items={[
            { title: "Home", href: "/" },
            { title: "Products", href: "/products" },
            { title: `${product.name}` },
          ]}
        ></Breadcrumb>
        <div className="products_details_page">
          <div className="products-container">
            {loading ? (
              <Skeleton.Image active />
            ) : (
              <div className="slider">
                <div
                  className="slide cake-img"
                  style={{ backgroundImage: `url('${currentImg}')` }}
                />
                <div className="images">
                  {product.images.map((img) => (
                    <div className="item" key={img}>
                      <div
                        className={`cake-img ${
                          img == currentImg ? "active" : ""
                        }`}
                        style={{ backgroundImage: `url('${img}')` }}
                        onClick={() => handleImgSlider({ img })}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="content">
              {loading ? (
                <Skeleton active />
              ) : (
                <>
                  <h3 className="name">{product.name}</h3>
                  <div className="quantity">
                    <div className="buttons_added">
                      <button className="minus is-form">
                        <MinusOutlined />
                      </button>
                      <span className="input-qty">{product.quantity}</span>
                      <button className="plus is-form">
                        <PlusOutlined />
                      </button>
                    </div>
                    <button className="btn-add">add to cart</button>
                  </div>
                  <h4 className="price">{formattedPrice(product.price)}</h4>
                  <p>{product.description}</p>
                  <div className="category">
                    <strong>Categories: </strong>
                    <Link to={"/products"}>
                      <span>{product.category}</span>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
