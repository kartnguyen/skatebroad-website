import { Breadcrumb } from "antd";
import React from "react";

const Blog = () => {
  return (
    <section>
      <div className="breadcrumb">
        <h1 className="breadcrumb-title">News</h1>
        <Breadcrumb
          separator=">"
          items={[{ title: "Home", href: "/" }, { title: "News" }]}
        ></Breadcrumb>
      </div>
    </section>
  );
};

export default Blog;
