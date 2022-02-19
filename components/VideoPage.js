import React, { useState } from "react";

const videos = [
  "http://media.w3.org/2010/05/sintel/trailer.mp4",
  "http://techslides.com/demos/sample-videos/small.mp4",
  "http://media.w3.org/2010/05/sintel/trailer.mp4",
  "http://techslides.com/demos/sample-videos/small.mp4",
  "http://media.w3.org/2010/05/sintel/trailer.mp4",
  "http://techslides.com/demos/sample-videos/small.mp4",
  "http://media.w3.org/2010/05/sintel/trailer.mp4",
  "http://techslides.com/demos/sample-videos/small.mp4",
  "http://media.w3.org/2010/05/sintel/trailer.mp4",
];
export default function VideoPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  return (
    <div>
      {videos?.[activeIndex - 1] && (
        <video
          style={{ height: "50vh", width: "100vw", display: "none" }}
          src={videos[activeIndex - 1]}
          muted
          playsInline
          autoPlay
        />
      )}
      <video
        style={{ height: "50vh", width: "100vw" }}
        src={videos[activeIndex]}
        muted={muted}
        playsInline
        autoPlay
      />
      {videos?.[activeIndex + 1] && (
        <video
          style={{ height: "50vh", width: "100vw", display: "none" }}
          src={videos[activeIndex + 1]}
          muted
          playsInline
          autoPlay
        />
      )}
      {activeIndex !== 0 && (
        <button
          onClick={() => {
            setActiveIndex(activeIndex - 1);
            setMuted(false);
          }}
        >
          prev
        </button>
      )}

      {activeIndex < videos.length - 1 && (
        <button
          onClick={() => {
            setActiveIndex(activeIndex + 1);
            setMuted(false);
          }}
        >
          next
        </button>
      )}
    </div>
  );
}
