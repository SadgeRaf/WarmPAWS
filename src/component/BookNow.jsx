import React, { useRef } from 'react';
import banner from '../assets/videos/1542392765326_342.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router';

gsap.registerPlugin(ScrollTrigger);

const BookNow = () => {
   const animref = useRef();
   const navigate = useNavigate();
   useGSAP(()=>{
    gsap.from(animref.current,{
     scrollTrigger: {
        trigger: animref.current, 
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
   })

   const handleNavigation = ()=>{
      navigate("/services");
   }

   return (
    <div className="relative w-11/12 mx-auto mt-6 mb-6 rounded-2xl overflow-hidden shadow-lg">
      
      <img className="w-full h-[400px] object-cover rounded-2xl" src={banner} alt="Vet care banner"/>

      
      <div ref={animref} className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      
      <div ref={animref} className="absolute inset-0 flex flex-col justify-center items-start text-white px-8 md:px-16">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 drop-shadow-lg">
          Get Expert Care from Our Professional Vets!
        </h1>
        <button onClick={handleNavigation} className="bg-accent text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-accent/80 transition-all">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookNow;
