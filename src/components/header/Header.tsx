const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow">
      <div className="text-xl font-bold">FinTrack</div>
      <div className="flex items-center gap-4">
        <button>🔍</button>
        <button>🔳</button>
        <img
          src="/avatar.jpg"
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
