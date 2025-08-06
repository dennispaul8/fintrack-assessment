"use client";

import PageHeader from "@/components/pageheader/PageHeader";
import SummaryCard from "@/components/summarycards/SummaryCard";
import { summary } from "@/data/summary";
import Tab from "@/components/tabs/Tabs";
import TransactionTable from "@/components/transactiontable/TransactionTable";

export default function Dashboard() {
  return (
    <main className="">
      <div className="">
        <div className="p-6 space-y-6">
          <PageHeader />
          <Tab
            tabs={["Overview", "Transactions"]}
            onChange={(tab) => {
              console.log("Active tab is:", tab);
            }}
          />
          <div>
            <h2 className="font-bold mb-2">Summary</h2>

            <div className="flex flex-wrap  gap-x-6 gap-y-4  w-full justify-between">
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
        </div>
        <TransactionTable data={[]} />
      </div>
    </main>
  );
}
