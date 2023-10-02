import { Carousel } from "antd";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <Carousel effect="fade" dotPosition="bottom" draggable autoplay>
        <div className="slider">
          <div className="img-slider img-1"></div>
          <div className="text-slider text-1">
            <b>NEW COLLECTION</b>
            <h1 className="animated infinite flash">
              Summer <br /> Skatefest
            </h1>
            <p>
              A team of 5 experienced judges will decide <br /> the winners
              through a scoring system
            </p>
            <Link to={"/products"}>
              <button>SHOP NOW</button>
            </Link>
          </div>
        </div>
        <div className="slider">
          <div className="img-slider img-2"></div>
          <div className="container">
            <div className="text-slider text-2">
              <b>NEW COLLECTION</b>
              <h1 className="animated infinite flash">
                Go Skate <br /> Boarding day
              </h1>
              <p>
                A team of 5 experienced judges will decide <br /> the winners
                through a scoring system
              </p>
              <Link to={"/products"}>
                <button>SHOP NOW</button>
              </Link>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Home;
