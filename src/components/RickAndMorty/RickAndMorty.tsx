import React from "react";
import { useEffect, useRef } from "react";
import "./RickAndMorty.css";

function angle(cx: number, cy: number, ex: number, ey: number) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx); // range (-PI, PI]
  const deg = (rad * 180) / Math.PI; // rads to degs, range (-180, 180]
  return deg;
}

const RickAndMorty = () => {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const imgBox = ref.current?.getBoundingClientRect() as DOMRect;
    const eyes = document.querySelectorAll(".eye");
    const cx = imgBox.left + imgBox.width * 0.5;
    const cy = imgBox.top + imgBox.height * 0.5;

    window.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const angleDeg = angle(mouseX, mouseY, cx, cy);

      eyes.forEach((eye) => {
        //@ts-ignore
        eye.style.transform = `rotate(${-90 + angleDeg}deg)`;
        //@ts-ignore
        eye.filter = `hue-rotate(${angleDeg}deg)`;
      });
    });
  }, []);

  return (
    <main id="main-div">
      <img
        src={
          "https://firebasestorage.googleapis.com/v0/b/msg-chat-app-47f2c.appspot.com/o/Rick_and_morty.webp?alt=media&token=5e9f8b1e-4f46-442e-ac01-d3887c417fd7"
        }
        alt="rick"
        id="mainIMG"
        ref={ref}
      />
      <div id="eyes">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/msg-chat-app-47f2c.appspot.com/o/33370-smaller-blue-dot-clipart.webp?alt=media&token=cf825446-bea4-4aa8-aef9-4b9f9ee56e05"
          style={{
            top: "59px",
            right: "40px",
          }}
          className="eye"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/msg-chat-app-47f2c.appspot.com/o/33370-smaller-blue-dot-clipart.webp?alt=media&token=cf825446-bea4-4aa8-aef9-4b9f9ee56e05"
          style={{
            top: " 50px",
            right: "-8px",
          }}
          className="eye"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/msg-chat-app-47f2c.appspot.com/o/33370-smaller-blue-dot-clipart.webp?alt=media&token=cf825446-bea4-4aa8-aef9-4b9f9ee56e05"
          style={{
            bottom: "19px",
            left: "40px",
          }}
          className="eye"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/msg-chat-app-47f2c.appspot.com/o/33370-smaller-blue-dot-clipart.webp?alt=media&token=cf825446-bea4-4aa8-aef9-4b9f9ee56e05"
          style={{
            bottom: "21px",
            left: "83px",
          }}
          className="eye"
        />
      </div>
    </main>
  );
};

export default RickAndMorty;
