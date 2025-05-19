import React from "react";

const Stacks = ["All", "Unity", "C#", "Js", "React", "Java", "JSP"]; // 확장 가능

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
    <div className="flex flex-wrap gap-2 mb-6 top-4 text-[15px]">
      {Stacks.map((tech) => (
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
  );
}
