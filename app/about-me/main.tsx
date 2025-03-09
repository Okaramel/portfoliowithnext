"use client";

import Image from 'next/image';

export default function AboutMe() {
    return (
        <div className="flex flex-col items-center justify-center gap-6 m-4 md:gap-12 md:m-12 relative">
            <Image
                src="/cloud_1.png"
                alt="Cloud 1"
                width={200}
                height={100}
                className="absolute top-0 left-0 -z-10 opacity-10"
            />
            <Image
                src="/cloud_1.png"
                alt="Cloud 2"
                width={200}
                height={100}
                className="absolute bottom-2/3 right-0 -z-10 opacity-10"
            />
            <Image
                src="/cloud_1.png"
                alt="Cloud 3"
                width={200}
                height={100}
                className="absolute bottom-0 left-16 z-10 opacity-10"
            />
            <Image
                src="/cloud_1.png"
                alt="Cloud 3"
                width={200}
                height={100}
                className="absolute bottom-96 left-1/4 -z-10 opacity-10"
            />
            <Image
                src="/cloud_1.png"
                alt="Cloud 3"
                width={200}
                height={100}
                className="absolute bottom-1.5 left-5/6 -z-10 opacity-10"
            />
            <h1 className="text-4xl md:text-6xl lg:text-7xl">About me</h1>
            <p className="text-[#F2E3DE] p-10 m-0 w-full max-w-md bg-[#373b47]/[50%] rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
                Hello! I am a student at IIM Digital School specializing in Coding and Digital Innovation. I am passionate about the field of programming and its transformative potential.
            </p>

            <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-8 ">
                <p className="text-[#F2E3DE] p-10 m-0 w-full max-w-md bg-[#373b47]/[50%] rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
                    I consistently approach design tasks with creativity, particularly when working independently. My focus is on designing user interfaces that are visually appealing and intuitive, as well as developing databases that are both comprehensive and easy to understand.
                </p>

                <p className="text-[#F2E3DE] p-10 m-0 w-full max-w-md bg-[#373b47]/[50%] rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
                    I approach projects with enthusiasm and a genuine passion for teamwork. I thrive in collaborative environments and value the synergy that comes from working as part of a team.
                </p>
            </div>
        </div>


    );
}