const Task = () => {
  return (
    <div className="shadow-md flex justify-between m-1 bg-[#c6efd5] rounded-md h-5 hover:scale-125 cursor-pointer transition w-fit">
      <div className="flex justify-center items-center mr-1 ml-1">
        <div className="text-xs text-[#444444]">5:30</div>
        <div className="text-[length:var(--xxxs)] text-[#5d5d5d] mt-1">AM</div>
      </div>
    </div>
  );
};

export default Task;
