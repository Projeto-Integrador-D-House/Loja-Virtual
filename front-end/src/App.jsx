import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import DescricaoProduto from "./pages/DescricaoProduto";
import Login from "./pages/Login";
import CadastroValidação from "./pages/CadastroValidação";

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
        <Route
          path="/cadastro"
          element={<Cadastro />} 
          
          />

        <Route
          path="/login"
          element={<Login/>} 
          
        />

        <Route
          path="/descricaoProduto"
          element={<DescricaoProduto/>} 
          />
         <Route
          path="/cadastroValidacao"
          element={<CadastroValidação/>} 
          
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
