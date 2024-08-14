import { useState } from "react";
import ManagedUserImage from "/src/assets/managed_user.png";
import HomeIcon from "/src/assets/sidebar/home.svg";
import DocumentIcon from "/src/assets/sidebar/document.svg";
import ShieldIcon from "/src/assets/sidebar/shield.svg";
import SettingsIcon from "/src/assets/sidebar/settings.svg";

const SidebarItem = ({ icon, label, isSelected, onClick }) => {
  return (
    <li className={`py-2 `}>
      <a
        className={`flex flex-col items-center justify-center pb-5 ${isSelected ? "bg-sidebar-active" : ""}`}
        onClick={onClick}
      >
        <div className="flex items-center justify-center">
          <img
            className="w-7 pt-5 hover:cursor-pointer"
            src={icon}
            alt={`${label}-icon`}
            style={{ filter: isSelected ? 'brightness(0) invert(1)' : 'brightness(0) invert(0.8)' }}
          />
        </div>
      </a>
    </li>
  );
};

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState("Home");

  const handleItemClick = (label) => {
    setSelectedItem(label);
  };

  return (
    <aside className="w-16 h-screen bg-sidebar-background text-white">
      <nav className="">
        <div className="flex items-center justify-center">
          <img
            className="w-10 pt-5 pb-8"
            src={ManagedUserImage}
            alt="user-profile-image"
          />
        </div>

        <ul>
          <SidebarItem
            icon={HomeIcon}
            label="Home"
            link="/"
            isSelected={selectedItem === "Home"}
            onClick={() => handleItemClick("Home")}
          />
          <SidebarItem
            icon={DocumentIcon}
            label="Documents"
            link="/documents"
            isSelected={selectedItem === "Documents"}
            onClick={() => handleItemClick("Documents")}
          />
          <SidebarItem
            icon={ShieldIcon}
            label="Security"
            link="/security"
            isSelected={selectedItem === "Security"}
            onClick={() => handleItemClick("Security")}
          />
          <SidebarItem
            icon={SettingsIcon}
            label="Settings"
            link="/settings"
            isSelected={selectedItem === "Settings"}
            onClick={() => handleItemClick("Settings")}
          />
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
