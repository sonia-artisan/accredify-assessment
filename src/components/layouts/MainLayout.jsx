import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Header from "../Header";
import Footer from "../Footer";

const MainLayout = ({ children }) => {
	return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>);
};

export default MainLayout;
