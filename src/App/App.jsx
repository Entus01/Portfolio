import "./App.css";
import Navbar from "../components/Navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
