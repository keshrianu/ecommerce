import React from "react";
import "./VideoPlayer.css";
const VideoPlayer = ({ src }) => {
  return (
    <div className="video-container">
      <video src={src} className="video-player" autoPlay muted playsInline loop />
    </div>
  );
};

export default VideoPlayer;
