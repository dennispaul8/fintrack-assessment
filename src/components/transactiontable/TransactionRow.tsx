import { Transaction } from "@/types";

interface Props {
  tx: Transaction;
}

const TransactionRow = ({ tx }: Props) => {
  const isCredit = tx.type === "Credit";

  return (
    <tr className="bg-white shadow rounded text-sm">
      <td className="px-4 py-2">{tx.date}</td>
      <td className="px-4 py-2">{tx.remark}</td>
      <td
        className={`px-4 py-2 ${isCredit ? "text-green-600" : "text-red-600"}`}
      >
        {tx.amount < 0 ? "-" : ""}${Math.abs(tx.amount).toLocaleString()}
      </td>
      <td className="px-4 py-2">{tx.currency}</td>
      <td className="px-4 py-2">
        <span className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full ${
              isCredit ? "bg-green-500" : "bg-red-500"
            }`}
          />
          {tx.type}
        </span>
      </td>
    </tr>
  );
};

export default TransactionRow;
