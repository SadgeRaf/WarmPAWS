import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import dog from '../assets/videos/download (1).jpg'

const Loading = () => {
    const dogRef = useRef();
    useGSAP(()=>{
        gsap.from(dogRef.current,{
            x: 2000,
            yoyo: true,
            repeat: -1,
            ease: "power3.inOut"
        })
    })

    return (
        <div className='flex flex-col items-center justify-center w-11/12 mx-auto'>
            <h1>Loading...</h1>
            <img ref={dogRef} src={dog}></img>
        </div>
    );
};

export default Loading;