import React from "react";

const Stack1 = ["All", "Unity", "Unreal", "Godot", "Js", "React", "Java"];
const Stack2 = ["All", "MediBang", "UIUX", "Bleander"]; 

export default function StackFilter({ selStack, onChange }) {
  const toggleStack = (tech) => {
    if (tech === "All") {
      onChange([]);
    } else if (selStack.includes(tech)) {
      onChange(selStack.filter((stack) => stack !== tech));
    } else {
      onChange([...selStack, tech]);
    }
  };

  return (
  <div className="space-y-4 mb-6 text-[15px]">
    <h2 className="text-center text-white">개발 프로젝트</h2>
    <div className="flex flex-wrap justify-center gap-2">
      {Stack1.map((tech) => (
        <button
          key={tech}
          onClick={() => toggleStack(tech)}
          className={`px-2 py-0.5 rounded-full border ${
            selStack.includes(tech) || (tech === "All" && selStack.length === 0)
              ? "bg-[#47338C] text-white"
              : "bg-white text-gray-800 border-gray-300"
          }`}
        >
          {tech}
        </button>
      ))}
    </div>

    <h2 className="text-center text-white">디자인 프로젝트</h2>
    <div className="flex flex-wrap justify-center gap-2">
      {Stack2.map((tech) => (
        <button
          key={tech}
          onClick={() => toggleStack(tech)}
          className={`px-2 py-0.5 rounded-full border ${
            selStack.includes(tech) || (tech === "All" && selStack.length === 0)
              ? "bg-[#155e75] text-white"
              : "bg-white text-gray-800 border-gray-300"
          }`}
        >
          {tech}
        </button>
      ))}
    </div>
  </div>
);
}
