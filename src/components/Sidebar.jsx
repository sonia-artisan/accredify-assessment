import React from "react";
import ManagedUserImage from "/src/assets/managed_user.png";

const Sidebar = () => {
  return (
    <aside className="w-16 h-screen bg-sidebar-background text-white">
      <nav className="">
        <div className="flex items-center justify-center">
          <img
            className="w-10 pt-5"
            src={ManagedUserImage} alt="user-profile-image" />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
