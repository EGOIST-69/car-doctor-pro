import React from "react";

const Banner = () => {
  const banners = [
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages available, but the majority have suffered alteration in some form.",
      next: "#slide2",
      prev: "#slide6",
      image: "/assets/images/banner/1.jpg",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages available, but the majority have suffered alteration in some form.",
      next: "#slide3",
      prev: "#slide1",
      image: "/assets/images/banner/2.jpg",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages available, but the majority have suffered alteration in some form.",
      next: "#slide4",
      prev: "#slide2",
      image: "/assets/images/banner/3.jpg",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages available, but the majority have suffered alteration in some form.",
      next: "#slide5",
      prev: "#slide3",
      image: "/assets/images/banner/4.jpg",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages available, but the majority have suffered alteration in some form.",
      next: "#slide6",
      prev: "#slide4",
      image: "/assets/images/banner/5.jpg",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages available, but the majority have suffered alteration in some form.",
      next: "#slide1",
      prev: "#slide5",
      image: "/assets/images/banner/6.jpg",
    },
  ];
  return (
    <div>
      <div className="carousel w-full">
        {banners.map((banner, index) => {
          <div
            id={`slide${index + 1}`}
            className="carousel-item relative w-full h-screen"
            style={{
              backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3)),url(/assets/images/banner/${
                index + 1
              }.jpg)`,
              backgroundSize: "cover",
            }}
          >
            <div>
              <h2 className="text-4xl font-bold text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                dolore?
              </h2>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href={banner.prev} className="btn btn-circle">
                ❮
              </a>
              <a href={banner.next} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Banner;
