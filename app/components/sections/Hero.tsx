"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "./home-hero-slider.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

type SliderItem = {
  id: number;
  title: string;
  subtitle: string;
  reference?: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  bgColor: string;
  navTitle: string;
  navSubTitle: string;
};

const sliderData: SliderItem[] = [
  {
    id: 1,
    title: "Reduced Stress & Anxiety",
    subtitle:
      "Experience a calmer mind and a more settled nervous system. Transcendental Meditation helps reduce daily stress, ease mental overload, and support clear, steady responses under pressure.",
    buttonText: "Discover Now",
    buttonLink: "/programme",
    image: "/images/tm-hero-1.png",
    bgColor: "#f4e8b4",
    navTitle: "Reduced Stress",
    navSubTitle: "& Anxiety",
  },
  {
    id: 2,
    title: "Increased Mental Clarity & Creativity",
    subtitle:
      "Improve focus, unlock fresh thinking, and access better decisions when it matters most. TM supports integrated brain functioning, helping your best ideas surface with greater ease.",
    reference:
      "International Journal of Psychophysiology, 2009. https://doi.org/10.1016/j.ijpsycho.2008.09.007",
    buttonText: "Explore Now",
    buttonLink: "/science",
    image: "/images/tm-hero-2.png",
    bgColor: "#eef3d8",
    navTitle: "Mental Clarity",
    navSubTitle: "& Creativity",
  },
  {
    id: 3,
    title: "Better Sleep & Health",
    subtitle:
      "Support deeper rest, steadier energy, and long-term well-being. By reducing stress at its root, TM helps the body recover naturally while keeping the mind alert and refreshed.",
    buttonText: "Learn More",
    buttonLink: "/benefits",
    image: "/images/tm-hero-3.png",
    bgColor: "#e4f0e8",
    navTitle: "Better Sleep",
    navSubTitle: "& Health",
  },
  {
    id: 4,
    title: "Stronger Relationships",
    subtitle:
      "Build emotional balance, patience, and presence in the way you connect with others. TM helps you respond with calm awareness, making relationships feel more thoughtful and less reactive.",
    reference:
      "Permanente Journal, 2018. https://doi.org/10.7812/TPP/17-172",
    buttonText: "Consult Now",
    buttonLink: "/consultation",
    image: "/images/tm-hero-4.png",
    bgColor: "#f1e7c8",
    navTitle: "Stronger",
    navSubTitle: "Relationships",
  },
];

export default function HomeHeroSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index: number) => {
    swiperRef.current?.slideTo(index);
    setActiveIndex(index);
  };

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f7d957_0%,#fff4c6_42%,#9fdcff_100%)]">
       <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.82),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(255,255,255,0.42),transparent_22%),radial-gradient(circle_at_76%_78%,rgba(22,40,79,0.08),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,40,79,0.14)_0%,rgba(22,40,79,0)_18%,rgba(255,255,255,0.08)_100%)]" />
      </div>
      <Swiper
        modules={[EffectFade, Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        loop={false}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        speed={900}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
        className="tm-hero-swiper"
      >
        {sliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="tm-hero-slide"
              // style={{ backgroundColor: item.bgColor }}
            >
              <div className="tm-hero-circle tm-hero-circle-one" />
              <div className="tm-hero-circle tm-hero-circle-two" />

              <div className="tm-hero-container">
                <div className="tm-hero-content">
                  <p className="tm-hero-pretitle uppercase">Maharishi Center for Leadership
              <span className="block pt-2 text-primary-foreground/58">
                In Partnership with CII
              </span></p>

                  <h1 className="tm-hero-title">
                    {item.title}
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

      {/* Arrow buttons */}
      <div className="tm-hero-arrows ">
        <button
        className="rounded-full bg-white/80"
          type="button"
          aria-label="Previous slide"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ArrowLeft/>
        </button>

        <button
        className="rounded-full bg-white/80"
          type="button"
          aria-label="Next slide"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ArrowRight/>
        </button>
      </div>

      {/* Replaced dots with auto-scroll title navigation */}
      {/* <div className="tm-hero-nav">
        <div
          className="tm-hero-nav-track"
          style={{
            transform: `translateY(-${activeIndex * 74}px)`,
          }}
        >
          {sliderData.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goToSlide(index)}
              className={`tm-hero-nav-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <span className="tm-hero-nav-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="tm-hero-nav-text">
                <strong>{item.navTitle}</strong>
                <small>{item.navSubTitle}</small>
              </span>
            </button>
          ))}
        </div>
      </div> */}
    </section>
  );
}