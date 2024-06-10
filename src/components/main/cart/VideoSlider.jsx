// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const VideoSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   const videos = [
//     "./Image/video.mp4",
//     "./Image/video.mp4",
//     "./Image/video.mp4",
//     "./Image/video.mp4",
//   ];

//   return (
//     <div className="container mx-auto my-8 w-full ">
//       <Slider {...settings}>
//         {videos.map((video, index) => (
//           <div key={index} className="px-2 flex justify-end">
//             <video controls className="w-full h-64 object-cover rounded-lg ">
//               <source src={video} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default VideoSlider;
import React from "react";

const NextArrow = ({ onClick }) => {
  return (
    <button
      className="absolute top-1/2 right-0 transform -translate-y-1/2 rounded-full p-2"
      onClick={onClick}
    >
      <img src="./Image/RighttBtn.png" />
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="absolute z-10 top-1/2 left-0 transform -translate-y-1/2 rounded-full p-2"
      onClick={onClick}
    >
      <img src="./Image/LeftBtn.png" />
    </button>
  );
};

export { NextArrow, PrevArrow };
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const videos = [
    "./Image/video.mp4",
    "./Image/video.mp4",
    "./Image/video.mp4",
    "./Image/video.mp4",
  ];

  return (
    <div className="container mx-auto my-8 w-full relative border-b-2 py-9">
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div key={index} className="px-2 flex justify-center">
            <video controls className="w-full h-64 object-cover rounded-lg">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoSlider;
