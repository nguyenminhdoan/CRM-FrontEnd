import React from "react";
import Header from "./partials/Header";
import Footer from "./partials/Footer";

function DefaultLayout({ children }) {
  return (
    <div className="default-layout">
      <header className="header mb-2">
        <Header />
      </header>
      <main className="main">
        <>{children}</>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default DefaultLayout;
