import React from "react";

export default function Career({ title, subtitle, date, comment, stackList, selectedStack, img, url }) {
  return (
<div className="flex flex-col sm:flex-row gap-6 p-6">

      {/* 왼쪽 */}
      <div className="flex flex-col items-start sm:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <img 
            src={img} 
            alt={title} 
            className="w-40 aspect-video object-cover rounded-md mb-2"
        />

        <div className="flex flex-wrap gap-2 mt-2">
          {stackList.map((stack, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 text-sm rounded-full 
                ${selectedStack.includes(stack) ? "bg-red-500 text-white" : "bg-gray-600 text-white"}`}
            >
              {stack}
            </span>
          ))}
        </div>
      </div>

      {/* 오른쪽 */}
      <div className="flex flex-col justify-start sm:w-1/2 space-y-2 text-left">
        <p className="text-sm text-gray-400">{subtitle} | {date}</p>
        <p className="text-sm text-gray-300 whitespace-pre-line">{comment}</p>
      </div>
    </div>
  );
}
