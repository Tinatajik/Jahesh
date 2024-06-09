import React, { useState } from "react";
export default function Main() {
  const [activeTab, setActiveTab] = useState("description");
  return (
    <>
      <div className="border-b-2 w-5/6 px-4 flex flex-col gap-4 items-end justify-center pr-16">
        <div className="flex gap-2 text-[#344754] text-sm py-4">
          <p>کارشناسی توسط شرکت</p>
          <img src="./Image/building.png" />
        </div>
        <p className="font-bold text-xl">
          فراخوان حل چالش کد‌نویسی همکاران سیستم به زبان پایتون
        </p>
        <div className="w-1/2 justify-end flex gap-10 mt-10">
          <button
            className={`w-1/3 flex justify-center items-center gap-2 font-bold p-2 ${
              activeTab === "suggestions"
                ? "text-black border-b-2 border-b-black"
                : "text-[#98A8B3]"
            }`}
            onClick={() => setActiveTab("suggestions")}
          >
            <p>پیشنهادها (۲۴۸)</p>
            <img
              src="./Image/layers.png"
              className={`${
                activeTab === "suggestions"
                  ? "filter invert"
                  : "filter invert-1"
              }`}
              alt="Suggestions Icon"
            />
          </button>
          <button
            className={`w-1/3 flex justify-center items-center gap-2 font-bold p-2 ${
              activeTab === "description"
                ? "text-black border-b-2 border-b-black"
                : "text-[#98A8B3]"
            }`}
            onClick={() => setActiveTab("description")}
          >
            <p>توضیحات</p>
            <img
              src="./Image/Icon.png"
              className={`${
                activeTab === "description"
                  ? "filter invert"
                  : "filter invert-1"
              }`}
              alt="Description Icon"
            />
          </button>
        </div>
      </div>
      <div className=" mt-4">
        {activeTab === "description" && (
          <>
            <div className="flex items-center justify-end w-5/6 px-4 pr-16 mt-10">
              <div className="flex flex-col gap-1 justify-center items-end text-[#98A8B3]">
                <p>اعلام نفرات برتر</p>
                <p>و پایان فراخوان</p>
                <div className="flex items-center py-1">
                  <div className="h-4 w-4 rounded-full bg-[#EAEEF0]"></div>
                </div>
                <p>شنبه ۲۴ بهمن ۱۴۰۲</p>
                <p>ساعت ۱۸:۲۰</p>
              </div>
              <div className="flex flex-col gap-1 justify-center items-end text-[#98A8B3]">
                <p>پایان</p>
                <p>کارشناسی پیشنهادها</p>
                <div className="flex items-center py-1">
                  <div className="h-1 w-60 bg-[#EAEEF0]"></div>
                  <div className="h-4 w-4 rounded-full bg-[#EAEEF0]"></div>
                </div>
                <p>شنبه ۲۲ بهمن ۱۴۰۲</p>
                <p>ساعت ۱۸:۲۰</p>
              </div>
              <div className="flex flex-col gap-1 justify-center items-end text-[#98A8B3]">
                <p>پایان دریافت پیشنهادها</p>
                <p>و شروع کارشناسی پیشنهادها</p>
                <div className="flex items-center py-1">
                  <div className="h-1 w-60 bg-[#EAEEF0]"></div>
                  <div className="h-4 w-4 rounded-full bg-[#EAEEF0]"></div>
                </div>
                <p>شنبه ۲۰ بهمن ۱۴۰۲</p>
                <p>ساعت ۱۸:۲۰</p>
              </div>
              <div className="flex flex-col gap-1 justify-center items-end">
                <p>شروع فراخوان و </p>
                <p className="font-bold">دریافت پیشنهادها</p>
                <div className="flex items-center py-1">
                  <div className="h-1 w-28 bg-[#EAEEF0]"></div>
                  <div className="h-1 w-20 bg-[#49B3F3]"></div>
                  <div className="h-4 w-4 rounded-full bg-[#49B3F3]"></div>
                </div>
                <p>شنبه ۱۸ بهمن ۱۴۰۲</p>
                <p>ساعت ۱۸:۲۰</p>
              </div>
            </div>
            <div className=" w-5/6 px-4 pr-40 mt-16 flex flex-col justify-center items-end ">
              <div className="flex gap-2 text-xl font-bold">
                <p>معرفی فراخوان</p>
                <img src="./Image/Frame1.png" />
              </div>
              <p className="text-end text-[#475A67] text-lg mt-3">
                !به تابستون چلنج خوش اومدی <br />
                تابستون چلنج برای همه‌ست. جونیور یا سنیور، محصل یا شاغل، بک یا
                فرانت، فرقی نداره؛ چون قراره تو
                <br /> .تابستون‌چلنج به همه‌مون خوش بگذره و باهم تفریح کنیم{" "}
                <br />
                روز، ۷ چالش؛ هر روز با یک چالش متفاوت و باحال روبه‌رو میشی. سطح
                بعضی از چالش‌ها آسونه و بعضی‌هاش <br />
                .هم متوسط یا یکم سخته و خلاصه همه مدل چالشی داریم
              </p>
              <div className="flex gap-2 text-xl font-bold mt-10">
                <p>ویدیوی معرفی فراخوان</p>
                <img src="./Image/Frame1.png" />
              </div>
              <div className="video-container mt-5 w-5/6 h-60 flex justify-end">
                <video className="w-full rounded-lg" controls>
                  <source src="./Image/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex gap-2 text-xl font-bold mt-10">
                <p>سوالات متداول</p>
                <img src="./Image/Frame1.png" />
              </div>
              <div className="flex gap-2 text-lg font-bold mt-10">
                <p>پیش‌نیاز‌ها علمی برای شرکت در این فراخوان چیست؟</p>

                <img src="./Image/icon1.png" />
              </div>
              <p className="text-end py-6 text-[#475A67] text-lg border-b-2 w-5/6">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است <br /> چاپگرها و متون بلکه روزنامه
                و مجله در ستون و سطرآنچنان که لازم است{" "}
              </p>
              <div className="flex border-b-2 py-6 w-5/6 justify-end  text-[#344754] gap-2 text-lg font-bold">
                <p>اینجا ناهار هم میدن یا نه؟</p>

                <img src="./Image/icon1.png" />
              </div>
              <div className="flex w-5/6 justify-end py-6 mb-20 text-[#344754] gap-2 text-lg font-bold">
                <p>دیگه چخبر؟</p>

                <img src="./Image/icon1.png" />
              </div>
            </div>
          </>
        )}
        {activeTab === "suggestions" && (
          <div className="suggestions">
            <h2 className="text-2xl">Suggestions</h2>
            <p>These are the suggestions content.</p>
          </div>
        )}
      </div>
    </>
  );
}
