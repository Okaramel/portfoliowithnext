"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';


//Projets stockés dans un tableau
const projects = [
    { id: 1,
    title: 'Le musée Grévin',
    description: 'This project aimed to redo a website on two pages and make it accessible for two types of disabilities. Here with my colleague, we did the motor and visual disabilities. Here, I did the contact page.',
    image: '/project_grevin.png',  
    url: 'https://ian-nine.vercel.app/index.html'
    },

    {id: 2,
    title: 'The Mood Studio', 
    description: 'One of my most proud projects because here we developed both our creativity and our technique. We had to create a website that referred to 3 types of emotions. In this project, I actively participated in the creation of the models but also the home page and the emotion of fear.', 
    image: '/project_mood_studio.png', 
    url: 'https://the-mood-studio.vercel.app/'
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100
        }
    }
};

export default function Project() {
    return (
        <div className="container mx-auto px-4">
            <motion.h1 
                className='text-4xl md:text-6xl lg:text-7xl text-center my-8'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Mes Projets
            </motion.h1>
            <motion.div 
                className="flex flex-wrap justify-center gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {projects.map((project) => (
                    <motion.div 
                        key={project.id} 
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                        variants={itemVariants}
                    >
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden ">
                            <Image 
                                src={project.image} 
                                alt={project.title}
                                width={300}
                                height={200}
                                className="object-cover w-full h-48"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-[#c49eaa] transition-all duration-300 hover:scale-105">
                                    <a href={project.url}>{project.title}</a>
                                </h2>
                                <p className="text-[#c49eaa] pt-2">{project.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}