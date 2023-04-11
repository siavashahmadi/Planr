import { CiSettings } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="rounded-md p-3 bg-[#b3dfb755] shadow-md flex flex-row justify-between bg-transparent">
      {/* <h1 className="flex text-2xl font-bold pl-1">Planr</h1> */}
      <img
        className="h-8 hover:scale-125 transition cursor-pointer"
        src="/planr.svg"
        alt="logo"
      />
      <h1 className="flex mt-1 text-lg font-semibold">Calendar</h1>

      <h2 className="font-semibold flex items-center pr-1 hover:scale-125 transition cursor-pointer">
        <CiSettings size={36} />
      </h2>
    </div>
  );
};

export default Navbar;
