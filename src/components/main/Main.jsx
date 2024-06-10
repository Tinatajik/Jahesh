import React, { useState } from "react";
import Cart from "./cart/Cart";
export default function Main() {
  const [activeTab, setActiveTab] = useState("description");
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 2;

  const totalCards = 8;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const handleClickNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleClickPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleClickPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const PageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`px-4 hover:bg-gray-200 border rounded ${
            currentPage === i && "bg-white"
          }`}
          onClick={() => handleClickPage(i)}
        >
          {i}
        </button>
      );
    }

    return <div className="flex">{pageNumbers}</div>;
  };

  const renderCards = () => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return Array.from({ length: totalCards })
      .slice(startIndex, endIndex)
      .map((_, index) => <Cart key={index + startIndex} />);
  };

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
      <div className="bg-[#FCFCFD]">
        {activeTab === "description" && (
          <>
            <div className="flex items-center justify-end w-5/6 px-4 pr-16 pt-10">
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
          <>
            <div>
              <div className="flex flex-col w-full items-end pr-[19rem]">
                <div className="flex justify-end w-full pt-10">
                  <div className="flex flex-col items-end gap-3 w-full">
                    <p>فیلتر کردن براساس</p>
                    <div className="flex gap-2 border justify-end p-2 border-[#D0D8DD] rounded-lg">
                      <select className="rounded ml-2 outline-none" dir="rtl">
                        <option value="Option 8">جدید‌ترین</option>
                        <option value="Option 9">قدیمی ترین</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3 w-full">
                    <p>تعداد ستاره‌ها</p>
                    <div className="flex text-end gap-2 border justify-end p-2 border-[#D0D8DD] rounded-lg">
                      <select className="rounded ml-2 outline-none" dir="rtl">
                        <option value="" className="text-[#98A8B3]">
                          یک مورد را انتخاب کنید
                        </option>
                        <option value="Option 1" className="text-[#475A67]">
                          همه پیشنهاد‌ها
                        </option>
                        <option value="Option 2" className="text-[#FFC83D]">
                          &#11088; &#11088; &#11088; &#11088; &#11088; ۵ ستاره
                        </option>
                        <option value="Option 3" className="text-[#FFC83D]">
                          &#11088; &#11088; &#11088; &#11088; ۴ ستاره
                        </option>
                        <option value="Option 4" className="text-[#FFC83D]">
                          &#11088; &#11088; &#11088; ۳ ستاره
                        </option>
                        <option value="Option 5" className="text-[#FFC83D]">
                          &#11088; &#11088; ۲ ستاره
                        </option>
                        <option value="Option 6" className="text-[#FFC83D]">
                          &#11088; ۱ ستاره
                        </option>
                        <option value="Option 7" className="text-[#475A67]">
                          بدون ستاره
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3 w-full">
                    <p>مرتب کردن براساس</p>
                    <div className="flex gap-2 border justify-end py-2 px-5 border-[#D0D8DD] rounded-lg">
                      <p>فقط پیشنهاد‌های برنده</p>
                      <img src="./Image/trophy-01.png" />
                      <img src="./Image/Checkbox.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div>{renderCards()}</div>

              <div className="flex justify-start ml-24 bg-white mt-4 ">
                <button
                  className={`px-4 py-2 mx-2  rounded ${
                    currentPage === 1 && "opacity-50 cursor-not-allowed"
                  }`}
                  onClick={handleClickPrev}
                  disabled={currentPage === 1}
                >
                  <img className="mt-1" src="./Image/ar2.png" />
                </button>
                <PageNumbers />
                <button
                  className={`px-4 py-2 mx-2 rounded ${
                    currentPage === totalPages &&
                    "opacity-50 cursor-not-allowed"
                  }`}
                  onClick={handleClickNext}
                  disabled={currentPage === totalPages}
                >
                  <img className="mt-1" src="./Image/ar1.png" />
                </button>
                <div className="ml-[25rem] mt-3">
                  درحال نمایش <span className="font-bold">۸</span> از{" "}
                  <span className="font-bold">۴۲۸</span>
                  پیشنهاد
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
