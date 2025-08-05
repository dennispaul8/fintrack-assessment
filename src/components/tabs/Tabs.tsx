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
    <div className="flex border-b border-gray-200 gap-10 ml-9 mt-8 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={`pb-2 text-sm font-medium transition-all ${
            activeTab === tab
              ? "border-b-2 border-[#437D8E] text-[#437D8E]"
              : "text-gray-400 hover:text-[#437D8E]"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tab;
