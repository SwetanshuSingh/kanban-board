const Navbar = () => {
  const navlinks = [
    "Dashboard",
    "Leads",
    "Projects",
    "Teams",
    "News",
    "Library",
    "Contacts",
  ];

  return (
    <nav className="w-full flex items-center border-b-[0.5px] border-gray-700 p-5">
      <ul className="flex justify-center items-center gap-8 text-lg font-light tracking-tight [&>li]:cursor-pointer">
        {navlinks.map((item, idx) => (
          <MenuItem key={idx} text={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

const MenuItem = ({ text }: { text: string }) => {
  return <li className="cursor-pointer hover:text-lavendar transition-colors duration-200 ease-linear">{text}</li>;
};
