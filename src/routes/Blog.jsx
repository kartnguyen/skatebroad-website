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
      <div className="container">
        <div className="blog-page">
          <div className="content-blog-page">
            <div className="item">
              <div className="blog_grid">
                <div className="post-thumb">
                  <img src="/products/blog_1_1024x1024.jpg" alt="" />
                  <div className="single-post-date">
                    <p className="date">23</p>
                    <span className="month">Jul</span>
                  </div>
                </div>
                <div className="post-info">
                  <h4 className="blog-title">News</h4>
                  <h3 className="post-title">
                    <a href="" title="Training During Ramadan">
                      Training During Ramadan
                    </a>
                  </h3>
                  <p className="desc">
                    In mattis scelerisque magna, ut tincidunt ex. Quisque nibh
                    urna, pretium in tristique in, bibendum sed libero.
                    Pellentesque mauris nunc, pr...
                  </p>
                  <a className="btn_readmore" href="/blog">
                    <span>Read more </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="blog_grid">
                <div className="post-thumb">
                  <img src="/products/blog_2_1024x1024.jpg" alt="" />
                  <div className="single-post-date">
                    <p className="date">23</p>
                    <span className="month">Jul</span>
                  </div>
                </div>
                <div className="post-info">
                  <h4 className="blog-title">News</h4>
                  <h3 className="post-title">
                    <a href="" title="Collagen And White Tissue">
                      Collagen And White Tissue
                    </a>
                  </h3>
                  <p className="desc">
                    In mattis scelerisque magna, ut tincidunt ex. Quisque nibh
                    urna, pretium in tristique in, bibendum sed libero.
                    Pellentesque mauris nunc, pr...
                  </p>
                  <a className="btn_readmore" href="/blog">
                    <span>Read more </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="blog_grid">
                <div className="post-thumb">
                  <img src="/products/blog_3_1024x1024.jpg" alt="" />
                  <div className="single-post-date">
                    <p className="date">23</p>
                    <span className="month">Jul</span>
                  </div>
                </div>
                <div className="post-info">
                  <h4 className="blog-title">News</h4>
                  <h3 className="post-title">
                    <a href="" title="What's The Best Time To  Gym?">
                      What&apos;s The Best Time To Gym?
                    </a>
                  </h3>
                  <p className="desc">
                    In mattis scelerisque magna, ut tincidunt ex. Quisque nibh
                    urna, pretium in tristique in, bibendum sed libero.
                    Pellentesque mauris nunc, pr...
                  </p>
                  <a className="btn_readmore" href="/blog">
                    <span>Read more </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="blog_grid">
                <div className="post-thumb">
                  <img src="/products/blog_4_1024x1024.jpg" alt="" />
                  <div className="single-post-date">
                    <p className="date">23</p>
                    <span className="month">Jul</span>
                  </div>
                </div>
                <div className="post-info">
                  <h4 className="blog-title">News</h4>
                  <h3 className="post-title">
                    <a href="" title="Post Format Video Blogs">
                      Post Format Video Blogs
                    </a>
                  </h3>
                  <p className="desc">
                    Nunc aliquet, justo non commodo congue, velit sem pulvinar
                    enim, ac bibendum mi mi eget libero. Maecenas ac viverra
                    enim, et laoreet lacus....
                  </p>
                  <a className="btn_readmore" href="/blog">
                    <span>Read more </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="blog_grid">
                <div className="post-thumb">
                  <img src="/products/blog_5_1024x1024.jpg" alt="" />
                  <div className="single-post-date">
                    <p className="date">23</p>
                    <span className="month">Jul</span>
                  </div>
                </div>
                <div className="post-info">
                  <h4 className="blog-title">News</h4>
                  <h3 className="post-title">
                    <a href="" title="Post Format Gallery Blogs">
                      Post Format Gallery Blogs
                    </a>
                  </h3>
                  <p className="desc">
                    Nunc aliquet, justo non commodo congue, velit sem pulvinar
                    enim, ac bibendum mi mi eget libero. Maecenas ac viverra
                    enim, et laoreet lacus....
                  </p>
                  <a className="btn_readmore" href="/blog">
                    <span>Read more </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="blog_grid">
                <div className="post-thumb">
                  <img src="/products/blog_6_1024x1024.jpg" alt="" />
                  <div className="single-post-date">
                    <p className="date">23</p>
                    <span className="month">Jul</span>
                  </div>
                </div>
                <div className="post-info">
                  <h4 className="blog-title">News</h4>
                  <h3 className="post-title">
                    <a href="" title="Post Format Audio Blogs">
                      Post Format Audio Blogs
                    </a>
                  </h3>
                  <p className="desc">
                    Nunc aliquet, justo non commodo congue, velit sem pulvinar
                    enim, ac bibendum mi mi eget libero. Maecenas ac viverra
                    enim, et laoreet lacus....
                  </p>
                  <a className="btn_readmore" href="/blog">
                    <span>Read more </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
