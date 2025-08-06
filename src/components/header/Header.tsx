"use client";

interface HeaderProps {
  onToggleSidebar: () => void;
}
const Header = ({ onToggleSidebar }: HeaderProps) => {
  return (
    <header className="flex justify-between items-center px-4 sm:px-6 py-4 shadow bg-white">
      {/* Left: Hamburger + Logo */}
      <div className="flex items-center gap-3 text-xl font-bold">
        <button
          onClick={onToggleSidebar}
          className="cursor-pointer focus:outline-none"
          aria-label="Toggle sidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
        <img src="/logo.png" alt="Logo" className="h-8 w-auto sm:h-10" />
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {/* Hide buttons on smaller screens */}
        <button className="hidden sm:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>
        <button className="hidden sm:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-grid"
            viewBox="0 0 16 16"
          >
            <path d="..." />
          </svg>
        </button>

        <img
          src="/noah.png"
          alt="User Avatar"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
