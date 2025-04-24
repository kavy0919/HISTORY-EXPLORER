
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import APIKeyInput from "./APIKeyInput";
import { useAPIKey } from "../contexts/APIKeyContext";

const Layout = () => {
  const { apiKey } = useAPIKey();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {!apiKey ? <APIKeyInput /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
