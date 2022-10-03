import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./pages/home";

export default function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
        </Route>
      </Routes>
    </div>
  );
}
function Layout() {
  return <>
    <Header />
    <Outlet />
    <Footer />
  </>;
};
