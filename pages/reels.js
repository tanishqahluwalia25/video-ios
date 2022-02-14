import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReelsPage = dynamic(() => import("../components/ReelsPage"), {
  ssr: false,
});

export default function Reels() {
  return <ReelsPage />;
}
