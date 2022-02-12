import React, { useEffect, useRef } from "react";

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
    <video
      ref={videoRef}
      style={{
        height: "100vh",
        width: "100vw",
        objectFit: "cover",
      }}
      src={src}
      muted={muted}
      playsInline
      autoPlay
    />
  );
}
