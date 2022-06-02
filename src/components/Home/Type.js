import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Owner of Ruthless Ink",
          "Tattoo artist",
          "Neo-traditional tattoo artist",
          "Realism or Realistic Tattoo artist",
          "Traditional Tattoo specialist",
          "Tribal Tattoo artist",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
