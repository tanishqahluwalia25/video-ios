import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function Reels() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef) {
      videoRef?.current?.play();
    }
  }, [videoRef]);

  return (
    <>
      <video
        ref={videoRef}
        style={{
          height: "100vh",
          width: "100vw",
          objectFit: "cover",
        }}
        src="https://d1utto4bohjv3p.cloudfront.net/test-converted.mp4"
        // autoPlay
        playsInline
        muted
      />
    </>
  );
}
