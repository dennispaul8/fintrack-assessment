interface Props {
  title: string;
  amount: string;
  change: number;
}

const SummaryCard = ({ title, amount, change }: Props) => {
  const isPositive = change >= 0;
  return (
    <div className="bg-gray-200 p-4 rounded-lg  flex-1">
      <p className="font-medium">{title}</p>
      <h2 className="text-2xl font-bold">{amount}</h2>
      <p className={isPositive ? "text-green-600" : "text-red-600"}>
        {isPositive ? "+" : ""}
        {change}%
      </p>
    </div>
  );
};

export default SummaryCard;
