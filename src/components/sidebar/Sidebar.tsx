"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Transactions", href: "/transactions" },
  { label: "Reports", href: "/reports" },
  { label: "Settings", href: "/settings" },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-85 min-h-screen bg-white px-4 py-6 hidden md:block">
      <nav className="space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <div
                className={`px-4 py-2 rounded-3xl cursor-pointer ${
                  isActive
                    ? "bg-[rgba(56,103,118,0.4)] text-[#3A6C7B] font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
