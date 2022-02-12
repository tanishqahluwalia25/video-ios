import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Virtual } from "swiper";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import Player from "../components/Player";
import Script from "next/script";

const videos = [
  "https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd",
  "https://d33tbglx0zf09c.cloudfront.net/5e803630-4888-4a2d-a163-b28135644214-1644658890.5965555converted.mp4",
  "https://livesim.dashif.org/livesim/chunkdur_1/ato_7/testpic4_8s/Manifest.mpd",
  "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd",
  "https://dash.akamaized.net/dash264/TestCasesUHD/2b/11/MultiRate.mpd",
];

export default function Reels() {
  const [muted, setMuted] = useState(true);

  return (
    <>
      <Swiper
        modules={[Pagination]}
        direction="vertical"
        pagination={{ clickable: true }}
        style={{
          height: "100vh",
        }}
      >
        {videos.map((video, index) => (
          <SwiperSlide
            key={index}
            onClick={() => {
              setMuted(!muted);
            }}
          >
            {({ isActive }) => (
              <Player src={video} active={isActive} muted={muted} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
