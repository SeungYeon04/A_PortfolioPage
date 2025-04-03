import React, { useEffect } from "react";

export default function Star() {
  useEffect(() => {
    const container = document.getElementById("star-container");
    if (!container) return;

    const stars = [];

    // 🌟 슈팅스타 생성 함수
    const createShootingStar = () => {
        const shooting = document.createElement("img");
        shooting.src = "/Image/star01.png"; // 너가 만든 별 이미지 경로
        shooting.className = "shooting-star-img";
        shooting.style.top = `${Math.random() * 60}vh`;
        shooting.style.left = `${Math.random() * 80}vw`;
        document.getElementById("star-container").appendChild(shooting);
      
        setTimeout(() => {
          shooting.remove();
        }, 1000);
    };

    // ⏱️ 주기적으로 슈팅스타 생성
    const interval = setInterval(() => {
      createShootingStar();
    }, 500); // 2초마다

    // 정리
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="star-container"
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"
    ></div>
  );
}
