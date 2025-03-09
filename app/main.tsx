"use client";

import Image from 'next/image';

export default function Main() {
    return (
        <div className="mt-40 mb-0 flex justify-evenly items-center">
            <div className="mt-16 text-center md:text-left">
                <h1 className="text-white text-4xl font-bold">Mathilde Morell</h1>
                <p className="text-gray-300 text-xl">Web Developer</p>
            </div>
            <div className="w-60 h-60 relative">
                <Image
                src="/pdp.png"
                alt="Photo de Mathilde Morell"
                layout="fill"
                objectFit="cover"
                className="rounded-full shadow-lg"
                />
            </div>
        </div>
    );
}