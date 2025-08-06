const AvatarGroup = () => {
  return (
    <div className="flex items-center md:ml-2 mt-4">
      {["/ava.png", "/liam.png", "/noah.png", "/jes.png"].map((src, i) => (
        <img
          key={i}
          src={src}
          className="w-8 h-8 rounded-full border-2 border-white -ml-2"
          alt="Avatar"
        />
      ))}
      <span className="text-sm text-gray-500 ml-4">
        Ava, Liam, Noah +12 others
      </span>
    </div>
  );
};

export default AvatarGroup;
