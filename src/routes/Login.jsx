import { Breadcrumb } from "antd";

const Login = () => {
  return (
    <section className="login-page">
      <div className="container">
        <Breadcrumb
          separator=">"
          items={[
            {
              title: "Home",
              href: "/",
            },
            {
              title: "Login",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Login;
