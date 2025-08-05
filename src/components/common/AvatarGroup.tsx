const AvatarGroup = () => {
  return (
    <div className="flex items-center gap-1">
      {["/ava.jpg", "/liam.jpg", "/noah.jpg"].map((src, i) => (
        <img
          key={i}
          src={src}
          className="w-8 h-8 rounded-full border-2 border-white -ml-2"
          alt="Avatar"
        />
      ))}
      <span className="text-sm text-gray-500">+12 others</span>
    </div>
  );
};

export default AvatarGroup;
