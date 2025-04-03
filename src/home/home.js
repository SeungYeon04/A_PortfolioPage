import React, { useState } from "react";
import person from "../image/임시.jpg";
import Career from "./career";

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
      title: "공부정리 블로그",
      subtitle: "개인 프로젝트",
      date: "24.XX ~ 24.XX",
      comment: "대학교를 다니며 만든 공부 정리 사이트. 해시태그를 사용하여 markdown file을 렌더링하며 github.io 전용 블로그로 만들었다.",
      img: "/Image/studyBlog.png",
      Stack: ["React"],
      url: "https://github.com/SeungYeon04/A_Study"
    },
    {
      title: "새 터치형 Open RPG",
      subtitle: "개인 프로젝트",
      date: "24.XX ~ 25.XX",
      comment: "모바일 터치형 Open RPG 게임, 낚시 수집 사냥 꾸미기 등 여러 콘텐츠가 존재함. 최종목표는 P2P 등으로 멀티구현하는 것이다.",
      img: "/Image/birdGame.jpg",
      Stack: ["Unity", "C#", "Json"],
    },
    {
      title: "끄아 웹게임",
      subtitle: "팀프로젝트 (프론트2/백1)",
      date: "25.XX ~ 25.XX",
      comment: "끝말잇기 아케이드로 웹게임을 개발중. 본인은 프론트엔드의 디자인, UI화면, 기능 등을 담당하였다.",
      img: "/Image/kkuaWeb.png",
      Stack: ["React", "Docker", "git", "Figma"],
    },
    {
      title: "간단한 게임 공식사이트",
      subtitle: "개인프로젝트",
      date: "24.XX ~ 24.XX",
      comment: "나중에 게임개발 끝나면, 사람들이 게임을 쉽게 찾을 수 있도록 열어둘 게임 공식 사이트. 처음엔 대학교 리눅스 수업으로 버츄얼박스 우분투 써서 호스팅하여 쓰던 웹이다. 나중에 쓸듯",
      img: "/Image/linuxWeb.png",
      Stack: ["HTML", "CSS"],
    },
    {
      title: "토끼 일기 & 메모 사이트",
      subtitle: "개인프로젝트",
      date: "24.XX ~ 24.XX",
      comment: "파이어베이스를 이용해 로그인과 글작성 구현. 디자인 비율 등 보완이 필요한 상태이다.",
      img: "/Image/RabbitBlog.png",
      Stack: ["HTML", "CSS", "Js", "Firebace"],
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
  );
}