import { CiSettings } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="rounded-md p-3 bg-[#ffd788] shadow-md flex flex-row justify-between">
      <h1 className="flex text-2xl font-bold pl-1">Planr</h1>
      <h2 className="font-semibold flex items-center pr-1">
        <CiSettings size={36} />
      </h2>
    </div>
  );
};

export default Navbar;
