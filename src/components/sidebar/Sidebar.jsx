export default function Sidebar() {
  return (
    <div className="border-l-2 w-1/6 h-full p-4 absolute end-0 top-0 overflow-hidden">
      <div className="flex flex-col items-end ">
        <div className="flex gap-3">
          <p className="font-bold">همکاران سیستم</p>
          <img src="./Image/CompanyAvatar.png" />
        </div>
        <div className="w-full mt-12">
          <button className="flex justify-end gap-4 w-full font-bold p-2 rounded-lg bg-[#E8E6FA] text-[#0D0375]">
            <p>فراخوان‌ها</p>
            <img src="./Image/trophy.png" />
          </button>
          <button className="flex justify-end gap-4 w-full font-bold p-2 rounded-lg  text-[#344754] mt-4">
            <p>مشخصات شرکت</p>
            <img src="./Image/building.png" />
          </button>
          <button className="flex justify-end gap-4 w-full font-bold p-2 rounded-lg  text-[#344754] mt-[150%]">
            <p> تنظیمات</p>
            <img src="./Image/settings.png" />
          </button>
          <button className="flex justify-end gap-4 w-full font-bold p-2 rounded-lg  text-[#344754] mt-4">
            <p>خروج</p>
            <img src="./Image/logout.png" />
          </button>
        </div>
      </div>
    </div>
  );
}
