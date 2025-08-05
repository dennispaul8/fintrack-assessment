import { Transaction } from "@/types";

interface Props {
  data: Transaction[];
}

const TransactionTable = ({ data }: Props) => {
  return (
    <table className="w-full text-left border-separate border-spacing-y-2">
      <thead>
        <tr className="text-gray-600">
          <th>Date</th>
          <th>Remark</th>
          <th>Amount</th>
          <th>Currency</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {data.map((tx) => (
          <tr key={tx.id} className="bg-white shadow rounded">
            <td>{tx.date}</td>
            <td>{tx.remark}</td>
            <td className={tx.amount >= 0 ? "text-green-600" : "text-red-600"}>
              {tx.amount < 0 ? "-" : ""}${Math.abs(tx.amount)}
            </td>
            <td>{tx.currency}</td>
            <td>
              <span className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    tx.type === "Credit" ? "bg-green-500" : "bg-red-500"
                  }`}
                />
                {tx.type}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
