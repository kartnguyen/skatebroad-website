import { Breadcrumb } from "antd";
import BreadcrumbItem from "antd/es/breadcrumb/BreadcrumbItem";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="login-page">
      <div className="container">
        <Breadcrumb separator=">">
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>Login</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </section>
  );
};

export default Login;
