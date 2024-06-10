import VideoSlider from "./VideoSlider";

export default function Cart() {
  return (
    <div className="flex flex-col text-end items-end justify-center pr-[19rem] py-10">
      <div className="bg-[#FFFEFD] w-[87%] flex flex-col items-end justify-center p-3 rounded-lg mt-10 border">
        <div className="flex gap-3">
          <p className="text-[#475A67]"> ۱۴۰۲/ ۰۶ /۲۵</p>
          <p className="text-[#EAEEF0]">|</p>
          <p className="font-bold">سمانه احمدی</p>
          <img src="./Image/Avatar.png" />
        </div>
        <p className="mt-4 font-bold text-lg">
          ...عنوان پیشنهادی که کاربر وارد کرده در این محل نمایش داده می‌شود
        </p>
        <p className="text-[#475A67] mt-4 border-b-2 py-3">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجـ
        </p>
        <VideoSlider />
        <div className="flex justify-between items-center w-full">
          <p className="flex items-center justify-center font-bold">
            <img className="mt-1" src="./Image/arrow-left.png" /> مشاهده جزئیات
          </p>
          <p className="text-[#F79009] font-bold" dir="rtl">
            {" "}
            &#11088; &#11088; &#11088; &#11088; &#11088; ۵ ستاره
          </p>
        </div>
      </div>
    </div>
  );
}
