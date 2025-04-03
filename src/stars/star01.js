import React, { useEffect } from "react";

export default function Star() {
  useEffect(() => {
    const container = document.getElementById("star-container");
    if (!container) return;

    const NUM_STARS = 20;
    const stars = [];

    for (let i = 0; i < NUM_STARS; i++) {
      const star = document.createElement("img");
      star.src = "/Image/star01.png"; // 투명 배경 gif
      star.className = "star twinkle-star";

      // 무작위 위치
      star.style.position = "absolute";
      star.style.width = "15px";     // ⭐ 크기 제한!
      star.style.height = "15px";
      star.style.opacity = "0";
      star.style.animation = `twinkle ${1.2 + Math.random() * 0.8}s ease-in-out infinite`;

      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;

      // 애니메이션 지연시간 추가
      star.style.animationDelay = `${Math.random() * 2}s`;

      container.appendChild(star);
      stars.push(star);
    }

    return () => {
      stars.forEach((star) => container.removeChild(star));
    };
  }, []);

  return (
    <div
      id="star-container"
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[1]"
    ></div>
  );
}
