"use client"

import { useEffect } from "react";

export default function Stores({ className }) {

  // horizontal scroll setup
  useEffect(() => {
    const scrollContainer = document.getElementById("scrollContainer");

    scrollContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
    });
  }, [])

  return (
    <section id="scrollContainer" className={`${className}`}>
      <div>
        <a href="https://maps.app.goo.gl/5aRsFkzi6TLm5iwSA" target="_blank">Manchester</a>
        <img loading="lazy" src="/images/manchester.webp" alt="Manchester store" draggable="false" />
      </div>
      <div>
        <a href="https://maps.app.goo.gl/P3wLowDNPTgUPjFXA" target="_blank">Stockport</a>
        <img loading="lazy" src="/images/stockport.webp" alt="Stockport store" draggable="false" />
      </div>
      <div>
        <a href="https://maps.app.goo.gl/3rt71XjjW9YcBMCM8" target="_blank">Bolton</a>
        <img loading="lazy" src="/images/bolton.webp" alt="Bolton Store" draggable="false" />
      </div>
      <div>
        <a href="https://maps.app.goo.gl/4vsCA8x8t3BMMu8q7" target="_blank">Bury</a>
        <img loading="lazy" src="/images/bury.webp" alt="Bury Store" draggable="false" />
      </div>
    </section>
  );
}