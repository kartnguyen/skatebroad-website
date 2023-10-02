import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./routes/Root";
import Home from "./routes/Home";
import Products from "./routes/Products";
import Blog from "./routes/Blog";
import Cart from "./routes/Cart";
import Login from "./routes/Login";
import Register from "./routes/Register";
import ProductDetail from "./routes/ProductDetail";
import Favorite from "./routes/Favorite";
import { AppProvider } from "./context/AppContext";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "products", element: <Products /> },
        { path: "blog", element: <Blog /> },
        { path: "cart", element: <Cart /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "products/:productId", element: <ProductDetail /> },
        { path: "favorite", element: <Favorite /> },
      ],
    },
  ]);
  return (
    <AppProvider>
      <RouterProvider router={routes}></RouterProvider>
    </AppProvider>
  );
}

export default App;
