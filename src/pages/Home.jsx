import React, { useRef } from 'react';
import video from '../assets/videos/857032-hd_1920_1080_30fps.mp4';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import Hero from '../component/Hero';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const bannerRef = useRef();
  const textRef = useRef();
  useGSAP(() => {
    gsap.from(bannerRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.5,
      delay: 0.2,
      ease: 'power3.out',
    });
    gsap.from('.video', {
      opacity: 0,
      duration: 2,
      ease: 'power2.out',
    });
    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: textRef.current, 
        start: "top 80%",        
        end: "bottom 20%", 
        toggleActions: "restart none restart none",
        markers: false,       
      },
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    })
  });

  return (
    <>
      {/*  Video */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          src={video}
          className="absolute top-0 left-0 w-full h-full object-cover video"
        ></video>

        {/* Banner section */}
        <div
          ref={bannerRef}
          className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center bg-black/40"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Keep Your Pets<span className='text-base-200'> Warm</span> This <span className='text-secondary'> Winter</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl">
            Cozy up your furry friends with our winter care services.
          </p>
          <button className="bg-secondary text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-base-200 hover:text-primary transition">
            Explore Services
          </button>
        </div>
      </section>

      {/* Hero section */}
      <section className="relative w-11/12 mx-auto py-20 z-20 bg-base-100">
        <div ref={textRef} className='font-extrabold text-5xl mb-10'>EXPLORE WHAT WE HAVE TO OFFER</div>
        <Hero />
      </section>
    </>
  );
};

export default Home;
