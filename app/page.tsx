"use client";

import { AppleCardsSlider } from "@/components/AppleCardsSlider";
import Clients from "@/components/Clients";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { ImagesBanner } from "@/components/ImagesBanner";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import VideoBanner from "@/components/VideoBanner";
import { navItems } from "@/data";
import vid1 from '/videos/v111.mp4';
import vid2 from '/videos/v22.mp4';
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <ImagesBanner />
        <AppleCardsSlider />
        <VideoBanner title={"ARAB MONEY:"} subTitle={"Culture | Music and Creativity"} vid={vid1} />
        {/* <Grid /> */}
        <RecentProjects />
        <Clients />
        <VideoBanner title={"SAUDI ARABIA:"} subTitle={"The Turn Up Project"} vid={vid2} classy={"mt-36"} />
        <Experience />
        {/* <Approach /> */}
        <Footer />
      </div>
    </main>
  );
}
