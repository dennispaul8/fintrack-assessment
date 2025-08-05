import StatusBadge from "../common/StatusBadge";
import AvatarGroup from "../common/AvatarGroup";

const PageHeader = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 text-2xl font-semibold">
        Wallet Ledger <StatusBadge />
      </div>
      <AvatarGroup />
    </div>
  );
};

export default PageHeader;
