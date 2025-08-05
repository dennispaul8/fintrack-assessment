import { Transaction } from "@/types";

interface Props {
  tx: Transaction;
}

const TransactionRow = ({ tx }: Props) => {
  const isCredit = tx.type === "Credit";

  return (
    <tr className="bg-white rounded text-sm">
      <td className="px-4 py-2 border-b-2 border-gray-200 w-[60%]">
        {tx.date}
      </td>
      <td className="px-4 py-2 border-b-2 border-gray-200">{tx.remark}</td>
      <td className="px-4 py-2 border-b-2 border-gray-200">
        {tx.amount < 0 ? "-" : ""}${Math.abs(tx.amount).toLocaleString()}
      </td>
      <td className="px-4 py-2 border-b-2 border-gray-200">{tx.currency}</td>
      <td className="bg-gray-200 rounded-3xl px-3 border-b-2 border-gray-200">
        <span className="flex items-center  gap-2">
          <span
            className={`w-2 h-2  rounded-full ${
              isCredit ? "bg-green-700" : "bg-red-700"
            }`}
          />
          {tx.type}
        </span>
      </td>
    </tr>
  );
};

export default TransactionRow;
