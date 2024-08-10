"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/AppleCardsCarousel";

export function AppleCardsSlider() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h1 className="heading">
        Empowering Your Vision{" "}
        <span className="text-purple">with high-tech Services</span>
      </h1>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Marketing & Advertising",
    title: "Strategic solutions to elevate your brand.",
    src: "https://wwh-415980760.imgix.net/photo-1517292987719-0369a794ec0f",
    content: <DummyContent />,
  },
  {
    category: "Web & App Development",
    title: "Cutting-edge digital solutions.",
    src: "https://wwh-415980760.imgix.net/photo-1534972195531-d756b9bfa9f2",
    content: <DummyContent />,
  },
  {
    category: "Audio/Video Production",
    title: "High-quality production services for all your media needs.",
    src: "https://wwh-415980760.imgix.net/photo-1525183480399-e8706926adac",
    content: <DummyContent />,
  },

  {
    category: "Models",
    title: "Access to a diverse pool of talented models.",
    src: "https://wwh-415980760.imgix.net/photo-1582639590011-f5a8416d1101",
    content: <DummyContent />,
  },
  {
    category: "Social Media Management",
    title: "Effective strategies to boost your online presence.",
    src: "https://wwh-415980760.imgix.net/photo-1656164631076-5052b84f9152",
    content: <DummyContent />,
  },
  {
    category: "Content Creation",
    title: "Engaging content tailored to your audience.",
    src: "https://wwh-415980760.imgix.net/photo-1620403724129-23fc81e1e0df",
    content: <DummyContent />,
  },
  {
    category: "SEO Search Engine Optimization",
    title: "Enhance your website's visibility.",
    src: "https://wwh-415980760.imgix.net/photo-1686061594183-8c864f508b00",
    content: <DummyContent />,
  },
];
