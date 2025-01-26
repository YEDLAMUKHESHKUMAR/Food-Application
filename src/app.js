import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
// components

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import RestroMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

import { useLocation } from "react-router-dom";

import RestaurantCard from "./components/RestaurantCard";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setuserName] = useState("");
  useEffect(() => {
    const data = {
      name: "Mukhesh",
    };
    setuserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      {/*  15.1 */}
      <UserContext.Provider value={{ loggedInUser: userName, setuserName }}>
        {" "}
        {/*  you can literally use this for login authentication... */}
        <div className="app">
          {/* 15.2 */}
          <UserContext.Provider value={{ loggedInUser: "Shiva" }}>
            {/* 15.3 */}
            <Header />
          </UserContext.Provider>
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestroMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h2>Loading....</h2>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRoutes} />);
