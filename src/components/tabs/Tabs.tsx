"use client";

import { useState } from "react";

interface TabProps {
  tabs: string[];
  onChange?: (activeTab: string) => void;
  initialTab?: string;
}

const Tab = ({ tabs, onChange, initialTab }: TabProps) => {
  const [activeTab, setActiveTab] = useState(initialTab || tabs[0]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onChange?.(tab);
  };

  return (
    <div className="mt-6 md:mt-8 mb-6 md:mb-8  ">
      <div className="relative">
        {/* Full-width bottom border on desktop */}
        <div className="hidden md:block absolute bottom-0 left-0 w-full border-b border-gray-200" />

        {/* Tabs container (scrollable on mobile) */}
        <div className="flex gap-6 md:gap-10 overflow-x-auto relative z-10 w-max md:w-full">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`pb-2 text-sm whitespace-nowrap transition-all ${
                activeTab === tab
                  ? "border-b-2 border-[#437D8E] text-[#437D8E] font-medium"
                  : "text-gray-400 hover:text-[#437D8E]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tab;
