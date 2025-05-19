import React from "react";

const Types = ["All", "App", "Web", "Game"];

export default function TypeFilter({ selType, onChange }) {
  const toggleType = (type) => {
        if (type === "All") {
            onChange([]);
        } else if (selType.includes(type)) {
            onChange(selType.filter((t) => t !== type));
        } else {
            onChange([...selType, type]);
        }
    };

  return (
    <div className="flex flex-wrap gap-2 mb-6 mt-4 text-[15px]">
      {Types.map((type) => (
        <button
          key={type}
          onClick={() => toggleType(type)}
          className={`px-2 py-0.5 rounded-full border ${
            selType.includes(type) || (type === "All" && selType.length === 0)
              ? "bg-[#155e75] text-white"
              : "bg-white text-gray-800 border-gray-300"
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
}
