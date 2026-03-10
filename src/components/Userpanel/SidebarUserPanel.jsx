import React from "react";
import { Link } from "react-router-dom";

const SidebarUserPanel = () => {
  var menuItem = [
    {
      icon: "ri-dashboard-horizontal-line",
      label: "Dashboard",
      to: "user/user-index",
    },
    { icon: "ri-p2p-line", label: "loans", to: "/user/applyLoans" },
    {
      icon: "ri-file-list-3-line",
      label: "Loans Details",
      to: "/user/loansDetails",
    },
    {
      icon: "ri-wallet-line",
      label: "Account Application",
      to: "/user/accountApplication",
    },
    {
      icon: "ri-red-packet-fill",
      label: "Transaction ",
      to: "/user/trans",
    },
    {
      icon: "ri-chat-history-line",
      label: "Transaction history",
      to: "/user/trans-history",
    },
  ];
  return (
    <div className="bg-[#009286]   flex flex-col h-full ">
      <h2 className="text-white text-[24px] font-semibold px-10 py-5">
        User panel
      </h2>
      <div className="">
        <ul className="p-10">
          {menuItem.map((links) => (
            <li className="text-white font-semibold p-2">
              <Link to={links.to}>
                <i class={links.icon}></i> {links.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarUserPanel;
