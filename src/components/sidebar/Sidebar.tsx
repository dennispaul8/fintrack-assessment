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
    <aside className="w-64 min-h-screen bg-white border-r px-4 py-6 hidden md:block">
      {/* <div className="mb-10 px-2 text-2xl font-bold text-blue-800">
        FinTrack
      </div> */}
      <nav className="space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <div
                className={`px-4 py-2 rounded-lg cursor-pointer ${
                  isActive
                    ? "bg-blue-100 text-blue-700 font-medium"
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
