const DailyView = () => {
  return (
    <div className="invisible lg:visible w-1/4 mt-3 ml-2 bg-white rounded-xl">
      <div className="text-bold text-xl mt-2 text-[#838383]">Thursday</div>
      <div className="shadow-md flex justify-between m-1 bg-[#ddc6ef] rounded-md h-8 hover:scale-125 cursor-pointer transition w-fit">
        <div className="flex justify-center items-center ml-1 mr-1">
          <div className="text-md m-0.5 text-[#444444]">5:30</div>
          <div className="text-[length:var(--xxs)] text-[#5d5d5d]">AM</div>
        </div>
      </div>
    </div>
  );
};

export default DailyView;
