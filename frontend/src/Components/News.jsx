import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import NewCard from "./NewCard";
const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div className="py-16">
      <h2 className="text-3xl font-semibold mb-6">News</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {news && news.length > 0 ? (
          news.map((newc, index) => (
            <SwiperSlide key={index}>
              <NewCard newCard={newc} />
            </SwiperSlide>
          ))
        ) : (
          <p>No News.</p>
        )}
      </Swiper>
    </div>
  );
};

export default News;
