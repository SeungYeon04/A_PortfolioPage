import React from "react";

export default function Career({ title, subtitle, date, stackList = [], selectedStack = [] }) {
  return (
    <div className="p-4 border rounded-xl shadow-sm space-y-2">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-stone-500">{subtitle}</p>
      <p className="text-sm text-stone-400">{date}</p>

      {/* 기술 스택 뱃지들 */}
      <div className="flex flex-wrap gap-2 mt-2">
        {stackList.map((tech, index) => (
          <span
            key={index}
            className={`px-2 py-1 rounded-full text-sm border transition-all
              ${selectedStack.includes(tech)
                ? "bg-red-200 text-red-800 border-red-400"
                : "bg-gray-100 text-gray-600 border-gray-300"}
            `}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
