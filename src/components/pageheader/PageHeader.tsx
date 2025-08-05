import StatusBadge from "../common/StatusBadge";
import AvatarGroup from "../common/AvatarGroup";

const PageHeader = () => {
  return (
    <div className="flex flex-col gap-2 ml-8">
      <div className="flex items-center justify-between text-4xl font-bold">
        <div className="flex items-center gap-3">
          Wallet Ledger{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="16"
            fill="currentColor"
            className="bi bi-caret-down-fill"
            viewBox="0 0 16 16"
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>{" "}
          <StatusBadge />
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-[#4B899A] text-black cursor-pointer text-sm px-4 py-1.5 rounded-full font-medium">
            Share
          </button>
          <button className="border border-gray-300 cursor-pointer p-2 rounded-full">
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
          </button>
        </div>
      </div>

      <AvatarGroup />
    </div>
  );
};

export default PageHeader;
