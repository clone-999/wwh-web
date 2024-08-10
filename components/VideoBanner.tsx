"use client";

import React from 'react'
import { BackgroundGradient } from './ui/BackgroundGradient';
import Video from 'next-video';

const VideoBanner = ({vid, title, subTitle, classy = ""} : {vid: any; title: string; subTitle: string; classy?: any}) => {
  return (
    <section id="images-banner">
        <div className={classy}>
            <h1 className="heading">
                {title} {" "}
                <span className="text-purple">{subTitle}</span>
            </h1>
            <div className="w-full mt-20">
                <BackgroundGradient className="bg-white dark:bg-zinc-900">
                    <Video 
                        src={vid}
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls={false}
                        className=""
                    ></Video>
                </BackgroundGradient>
            </div>
        </div>
    </section>
  )
}

export default VideoBanner