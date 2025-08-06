"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// import clsx from "clsx";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Transactions" },
  { label: "Reports" },
  { label: "Settings" },
];

const Sidebar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const pathname = usePathname();

  const nav = (
    <nav className="space-y-2">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        const classes = `px-4 py-2 rounded-3xl cursor-pointer ${
          isActive
            ? "bg-[rgba(56,103,118,0.4)] text-[#3A6C7B] font-medium"
            : "text-gray-700 hover:bg-gray-100"
        }`;

        return item.href ? (
          <Link key={item.label} href={item.href} onClick={onClose}>
            <div className={classes}>{item.label}</div>
          </Link>
        ) : (
          <div key={item.label} className={classes}>
            {item.label}
          </div>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Desktop */}
      {isOpen && (
        <aside className="w-80 min-h-screen bg-white px-4 py-6 hidden md:block">
          {nav}
        </aside>
      )}

      {/* Mobile Sidebar */}
      {isOpen && (
        <>
          <div className="fixed inset-0  z-40" onClick={onClose} />
          <aside className="fixed top-0 left-0 w-72 h-full bg-white p-4 z-50 shadow-lg md:hidden">
            {nav}
          </aside>
        </>
      )}
    </>
  );
};

export default Sidebar;
