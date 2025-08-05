interface Props {
  title: string;
  amount: string;
  change: number;
}

const SummaryCard = ({ title, amount, change }: Props) => {
  const isPositive = change >= 0;
  return (
    <div className="w-[15%] bg-gray-200 p-5 rounded-2xl">
      <p className="font-medium pb-2">{title}</p>
      <h2 className="text-2xl font-bold">{amount}</h2>
      <p className="text-[#3E7383] font-medium">
        {isPositive ? "+" : ""}
        {change}%
      </p>
    </div>
  );
};

export default SummaryCard;
