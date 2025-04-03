import React, { useState } from "react";
import person from "../image/임시.jpg";
import Career from "./career";

const Stacks = ["All", "Unity", "C#", "React", "Node.js", "Python", "Django"];

function StackFilter({ selStack, onChange }) {
  const toggleStack = (tech) => {
    if (tech === "All") {
      onChange([]); // All 클릭 시 전체 선택 해제
    } else if (selStack.includes(tech)) {
      onChange(selStack.filter((stack) => stack !== tech));
    } else {
      onChange([...selStack, tech]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2 mb-6 sticky top-4">
      {Stacks.map((tech) => (
        <button
          key={tech}
          onClick={() => toggleStack(tech)}
          className={`px-3 py-1 rounded-full border ${
            selStack.includes(tech) || (tech === "All" && selStack.length === 0)
              ? "bg-red-500 text-white"
              : "bg-white text-gray-800 border-gray-300"
          }`}
        >
          {tech}
        </button>
      ))}
    </div>
  );
}

export default function Home() {
  const [selStack, setSelStack] = useState([]);

  const careerList = [
    {
      title: "터치형 RPG",
      subtitle: "개인 프로젝트",
      date: "21.02 ~ 21.02",
      comment: "몬스터를 터치하여 잡는 간단한 모바일 RPG",
      img: "/Image/temp.jpg",
      Stack: ["Unity", "C#"],
    },
    {
      title: "개발자2",
      subtitle: "개인 프로젝트",
      date: "22.02 ~ 22.12",
      comment: "웹 포트폴리오 제작 프로젝트",
      img: "/Image/temp.jpg",
      Stack: ["React", "Node.js"],
    },
    {
      title: "제목3",
      subtitle: "팀 프로젝트",
      date: "23.01 ~ 23.06",
      comment: "장고를 이용한 백엔드 시스템 구축",
      img: "/Image/temp.jpg",
      Stack: ["Python", "Django"],
    },
  ];

  const filteredCareers =
    selStack.length === 0 || selStack.includes("All")
      ? careerList
      : careerList.filter((item) =>
          item.Stack.some((stack) => selStack.includes(stack))
        );

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* 왼쪽 필터 영역 */}
      <div className="lg:w-1/4 w-full mb-8 lg:mb-0">
        <div className="flex flex-col items-center space-y-4">
          <img
            src={person}
            alt="user Profile"
            className="rounded-full w-24 h-24 ring-2 ring-primary"
          />
          <div className="text-center">
            <h1 className="text-3xl font-bold">승연</h1>
            <p className="text-stone-500">게임개발자와 웹개발자</p>
          </div>
          <p className="text-stone-400 text-sm text-center px-2">
            돈과 자유 그리고 내가 죽어도 남을 작품들.
          </p>
        </div>
        <StackFilter selStack={selStack} onChange={setSelStack} />
      </div>

      {/* 오른쪽 프로젝트 리스트 */}
      <div className="lg:w-3/4 w-full">
        <h2 className="text-2xl font-bold mb-4">프로젝트</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredCareers.map((project, idx) => (
            <div
              key={idx}
              className="border p-4 rounded-lg shadow-md bg-white flex flex-col lg:flex-row gap-4"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full lg:w-40 h-40 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-1">{project.subtitle}</p>
                <p className="text-xs text-gray-400 mb-2">{project.date}</p>
                <p className="text-sm text-gray-600 mb-2">{project.comment}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.Stack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 text-xs rounded-full border ${
                        selStack.includes(tech)
                          ? "bg-red-500 text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}