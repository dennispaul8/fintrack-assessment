import { Transaction } from "@/types";
import TransactionRow from "./TransactionRow";
import { useMemo, useState } from "react";
import { transactions as initialTransactions } from "@/data/transactions";

interface Props {
  data: Transaction[];
}

const TransactionTable = ({ data }: Props) => {
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
    <div className="w-full overflow-x-auto">
      <div className="max-w-[300px] md:min-w-full">
        <table className="w-full text-left border-separate border-spacing-y-2 border-spacing-x-5">
          <thead>
            <tr className="text-gray-400 text-sm">
              <th
                className="px-2 py-2 cursor-pointer select-none font-medium md:w-[50%]"
                onClick={toggleSortDirection}
              >
                Date{" "}
                <span className="inline-block">
                  {sortDirection === "asc" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      fill="currentColor"
                      className="bi bi-caret-up-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      fill="currentColor"
                      className="bi bi-caret-down-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  )}
                </span>
              </th>

              <th className="px-4 py-2 font-medium">Remark</th>
              <th className="px-4 py-2 font-medium">Amount</th>
              <th className="px-4 py-2 font-medium">Currency</th>
              <th className="px-2 py-2 font-medium w-[80px]">Type</th>
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
  );
};

export default TransactionTable;
