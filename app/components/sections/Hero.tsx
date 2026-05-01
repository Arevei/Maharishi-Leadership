"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "./home-hero-slider.css";

type SliderItem = {
  id: number;
  preTitle: string;
  title: string;
  subtitle: string;
  reference?: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  bgColor: string;
};

const sliderData: SliderItem[] = [
  {
    id: 1,
    preTitle: "Stress & Anxiety",
    title: "Calm Under Pressure",
    subtitle:
      "A practical way to reduce inner overload, settle the nervous system, and respond with clarity instead of reacting from stress.",
    buttonText: "Discover Now",
    buttonLink: "/programme",
    image: "/images/tm-hero-1.png",
    bgColor: "#f4e8b4",
  },
  {
    id: 2,
    preTitle: "Clarity Under Pressure",
    title: "Peak Mental Performance",
    subtitle:
      "Develop the same integrated brain functioning seen in Olympic medallists and top executives, so your best thinking shows up exactly when the stakes are highest.",
    reference:
      "International Journal of Psychophysiology, 2009. https://doi.org/10.1016/j.ijpsycho.2008.09.007",
    buttonText: "Explore Now",
    buttonLink: "/science",
    image: "/images/tm-hero-2.png",
    bgColor: "#eef3d8",
  },
  {
    id: 3,
    preTitle: "Better Health",
    title: "Restful Recovery",
    subtitle:
      "Support deeper rest, steadier energy, and a healthier stress response so your body can recover while your mind becomes more settled and alert.",
    buttonText: "Learn More",
    buttonLink: "/benefits",
    image: "/images/tm-hero-3.png",
    bgColor: "#e4f0e8",
  },
  {
    id: 4,
    preTitle: "Heightened Emotional Intelligence",
    title: "Lead With Presence",
    subtitle:
      "Read the room, hold your center, and lead the people in front of you — not the pressure on your shoulders.",
    reference:
      "Permanente Journal, 2018. https://doi.org/10.7812/TPP/17-172",
    buttonText: "Consult Now",
    buttonLink: "/consultation",
    image: "/images/tm-hero-4.png",
    bgColor: "#f1e7c8",
  },
];
function Shape({ img, num } :{ img : string, num : string}) {
  return (
    <Image className={`tp-slider-shape-${num}`} src={img} alt="slider-shape" height={100} width={100} priority />
  );
}

export default function HomeHeroSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f7d957_0%,#fff4c6_42%,#9fdcff_100%)]">
       <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.82),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(255,255,255,0.42),transparent_22%),radial-gradient(circle_at_76%_78%,rgba(22,40,79,0.08),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,40,79,0.14)_0%,rgba(22,40,79,0)_18%,rgba(255,255,255,0.08)_100%)]" />
      </div>
      <Swiper
        modules={[EffectFade]}
        slidesPerView={1}
        spaceBetween={0}
        loop={false}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        speed={900}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
        className="tm-hero-swiper"
      >
        {sliderData.map((item) => (
          <SwiperSlide key={item.id} className={`tp-slider-item tp-slider-height d-flex align-items-center 
              }`}
              style={{ backgroundColor:  "#E3EDF6" }}>
            <div
              className="tm-hero-slide"
              // style={{ backgroundColor: item.bgColor }}
            >
              {/* Background circles */}
              <div className="tm-hero-circle tm-hero-circle-one" />
              <div className="tm-hero-circle tm-hero-circle-two" />

              {/* <div className="tp-slider-shape">
                              <Shape img={item.image} num="1" />
                              <Shape img={item.image} num="2" />
                              <Shape img={item.image} num="3" />
                              <Shape img={item.image} num="4" />
                            </div> */}

              {/* Content */}
              <div className="tm-hero-container">
                <div className="tm-hero-content">
                  <p className="tm-hero-pretitle">{item.preTitle}</p>

                  <h1 className="tm-hero-title">
                    {item.title.split(" ").map((word) => (
                      <span key={word}>{word}</span>
                    ))}
                  </h1>

                  <p className="tm-hero-subtitle">{item.subtitle}</p>

                  {item.reference && (
                    <p className="tm-hero-reference">{item.reference}</p>
                  )}

                  <Link href={item.buttonLink} className="tm-hero-button">
                    {item.buttonText}
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Image must stay inside each slide */}
              <div className="tm-hero-image">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={900}
                  height={900}
                  priority={item.id === 1}
                  className="tm-hero-img"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrows */}
      <div className="tm-hero-arrows">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          ←
        </button>

        <button
          type="button"
          aria-label="Next slide"
          onClick={() => swiperRef.current?.slideNext()}
        >
          →
        </button>
      </div>

      {/* Dots */}
      <div className="tm-hero-dots">
        {sliderData.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => swiperRef.current?.slideTo(index)}
            className={activeIndex === index ? "active" : ""}
          />
        ))}
      </div>
    </section>
  );
}