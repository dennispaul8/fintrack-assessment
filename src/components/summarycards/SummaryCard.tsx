interface Props {
  title: string;
  amount: string;
  change: number;
}

const SummaryCard = ({ title, amount, change }: Props) => {
  const isPositive = change >= 0;
  return (
    <div className="bg-gray-200 p-5 rounded-2xl flex-1">
      <p className="font-medium pb-2 text-sm md:text-md">
        <span className="flex items-center justify-between">
          {title}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-three-dots"
            viewBox="0 0 16 16"
          >
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
          </svg>
        </span>
      </p>
      <h2 className="text-2xl md:text-3xl font-bold">{amount}</h2>
      <p
        className={`text-[#3E7383] font-medium ${
          isPositive ? "text-green-700" : "text-red-700"
        }`}
      >
        {isPositive ? "+" : ""}
        {change}%
      </p>
    </div>
  );
};

export default SummaryCard;
