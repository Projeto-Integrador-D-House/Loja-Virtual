import React,{ createContext, useState} from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import DescricaoProduto from "./pages/DescricaoProduto";
import Login from "./pages/Login";
import CadastroValidação from "./pages/CadastroValidação";
import ProdutoDetalhe from "./pages/ProdutoDetalhe";

export const UserContext = createContext()

function UserProvider({children}){

const [user,setUser] = useState(null)

const values = {user, setUser}

  return (
    <>
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
    </>
  )
}


export default function App() {
  return (
    <UserProvider>
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
        <Route path="/produto/:id" element={<ProdutoDetalhe />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}
function Layout() {
  return <>
    <Header />
    <Outlet />
    <Footer />
  </>;
};
