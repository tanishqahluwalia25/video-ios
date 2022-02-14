import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function Player({ active, src, muted }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (Hls.isSupported() && videoRef) {
      const video = videoRef.current;
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        video.play();
      });
    }
  }, [videoRef]);

  useEffect(() => {
    if (videoRef) {
      if (active) videoRef?.current?.play();
      else {
        videoRef?.current?.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [videoRef, active]);

  return (
    <>
      <video
        data-dashjs-player
        ref={videoRef}
        id={"videoPlayer"}
        style={{
          height: "100vh",
          width: "100vw",
          objectFit: "cover",
        }}
        src={src}
        muted={muted}
        playsInline
        autoPlay
        // controls
      />
    </>
  );
}
