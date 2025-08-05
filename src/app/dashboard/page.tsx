"use client";

import { useState, useMemo } from "react";
import Header from "@/components/header/Header";
import PageHeader from "@/components/pageheader/PageHeader";
import SummaryCard from "@/components/summarycards/SummaryCard";
import TransactionRow from "@/components/transactiontable/TransactionRow";
import Sidebar from "@/components/sidebar/Sidebar";
import { summary } from "@/data/summary";
import { transactions as initialTransactions } from "@/data/transactions";

export default function Dashboard() {
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const sortedTransactions = useMemo(() => {
    const sorted = [...initialTransactions].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortDirection === "asc" ? dateA - dateB : dateB - dateA;
    });
    return sorted;
  }, [sortDirection]);

  const toggleSortDirection = () => {
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <main className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1">
        <div className="p-6 space-y-6">
          <PageHeader />

          <div>
            <h2 className="font-bold ml-9 mb-2">Summary</h2>

            <div className="flex gap-6 flex-wrap ml-8">
              <SummaryCard
                title="Total Balance"
                amount={`$${summary.totalBalance}`}
                change={summary.balanceChange}
              />
              <SummaryCard
                title="Total Credits"
                amount={`$${summary.totalCredits}`}
                change={summary.creditsChange}
              />
              <SummaryCard
                title="Total Debits"
                amount={`$${summary.totalDebits}`}
                change={summary.debitsChange}
              />
              <SummaryCard
                title="Transactions"
                amount={`${summary.transactionCount}`}
                change={summary.transactionChange}
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-2 border-spacing-x-5 ">
              <thead>
                <tr className="text-gray-600 text-sm">
                  <th
                    className="px-4 py-2 cursor-pointer select-none"
                    onClick={toggleSortDirection}
                  >
                    Date <span>{sortDirection === "asc" ? "↑" : "↓"}</span>
                  </th>
                  <th className="px-4 py-2 ">Remark</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Currency</th>
                  <th className="px-4 py-2 w-[40px]">Type</th>
                </tr>
              </thead>
              <tbody>
                {sortedTransactions.map((tx) => (
                  <TransactionRow key={tx.id} tx={tx} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
