import React, { useState } from "react";
import Star01 from "../stars/star01"; 
import Star02 from "../stars/star02";
import careerList  from "../data/careerList";

const Stacks = ["All", "Unity", "C#", "Js", "React", "Kotlin", "Java", "JSP"];

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
              ? "bg-[#47338C] text-white"
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

  //const careerList 를 모듈화해서 import해서 careerList 이름 그대로 전달 
  const filteredCareers =
    selStack.length === 0 || selStack.includes("All")
      ? careerList
      : careerList.filter((item) =>
          item.Stack.some((stack) => selStack.includes(stack))
        );

  return (
    <>
    <Star02/>
    <Star01/>
    <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-[2]">
      {/* 왼쪽 필터 영역 */}
      <div className="lg:w-1/4 w-full mb-8 lg:mb-0 lg:-ml-6">

        <div className="flex flex-col items-center space-y-4">
          <img
            src={process.env.PUBLIC_URL + "/Image/앵무.jpg"}
            alt="user Profile"
            className="rounded-full w-24 h-24 ring-2 ring-white"
          />
          <div className="text-center">
            <h1 className="text-3xl font-bold  text-white">승연</h1>
            <p className="text-stone-500 text-white">게임개발자와 웹개발자</p>
          </div>
          <p className="text-stone-400 text-sm text-center px-2">
            돈과 자유 그리고 내가 죽어도 남을 작품들.
          </p>
          <br></br>
        </div>
        <StackFilter selStack={selStack} onChange={setSelStack} />
      </div>

      {/* 오른쪽 프로젝트 리스트 */}
      <div className="lg:w-3/4 w-full lg:ml-6 relative z-[2]">
        <h2 className="text-2xl font-bold mb-4  text-white">프로젝트</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredCareers.map((project, idx) => (
            <a
            key={idx}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="border p-4 rounded-lg shadow-md bg-white flex flex-col lg:flex-row gap-4">
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
          </a>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}