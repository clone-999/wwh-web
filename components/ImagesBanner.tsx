"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/ImagesSlider";
import { BackgroundGradient } from "./ui/BackgroundGradient";

export function ImagesBanner() {
  const images = [
    "/images/p1.png",
    "/images/p2.jpeg",
    "/images/p3.jpeg",
    "/images/p4.jpeg",
    "/images/p5.jpeg",
    "/images/p6.jpeg",
    "/images/p7.jpeg",
    "/images/p8.jpeg",
    "/images/p9.jpeg",
    "/images/p10.jpeg",
    "/images/p11.jpeg",
    "/images/p12.jpeg",
    "/images/p13.jpeg",
    "/images/p14.jpeg",
    "/images/p15.jpeg",
    "/images/p16.jpeg",
    "/images/p17.jpeg",
    "/images/p18.jpeg",
    "/images/p19.jpeg",
    "/images/p20.jpeg",
  ];
  return (
    <section id="images-banner">
        <div className="w-full pb-16">
            <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900">
                <ImagesSlider className="h-[40rem] rounded-[22px]" images={images}>
                    <motion.div
                        initial={{
                        opacity: 0,
                        y: -80,
                        }}
                        animate={{
                        opacity: 1,
                        y: 0,
                        }}
                        transition={{
                        duration: 0.6,
                        }}
                        className="z-50 flex flex-col justify-center items-center"
                    >
                        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                          Experience the Essence <br /> of ARAB MONEY
                        </motion.p>
                        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                        <span>Join now →</span>
                        <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                        </button>
                    </motion.div>
                </ImagesSlider>
            </BackgroundGradient>
        </div>
    </section>
  );
}
