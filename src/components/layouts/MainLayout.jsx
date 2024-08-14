import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";

const MainLayout = ({ children }) => {
	return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
      </div>
    </div>);
};

export default MainLayout;
