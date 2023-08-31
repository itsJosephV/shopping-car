import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <main className="px-4 max-w-screen-lg m-auto grid min-h-screen grid-rows-[60px,1fr,60px] gap-4">
        <NavBar />
        <section>
          <Outlet />
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
