import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CartContextProvider from "./context/CartContext";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="App">
      <main className="px-4 max-w-screen-lg m-auto grid min-h-screen grid-rows-[60px,1fr,60px] gap-4">
        <CartContextProvider>
        <NavBar />
        <section>
          <Outlet />
        </section>
        <Footer />
        <Toaster />
        </CartContextProvider>
      </main>
    </div>
  );
}

export default App;
