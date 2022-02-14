import React, { useEffect, useRef } from "react";
import Script from "next/script";

// import dashjs from "dashjs";

export default function Player({ active, src, muted }) {
  const videoRef = useRef(null);

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
        controls
      />
    </>
  );
}
