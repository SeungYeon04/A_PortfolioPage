import React, { useState } from "react";
import person from "../image/임시.jpg"
import Career from "./career";

const Stacks = ["All", "Unity", "C#", "React", "Node.js", "Python", "Django"];

function StackFilter({ selStack, onChang }) {
    
    const checkBox = (tech) => {
        if(selStack.includes(tech)) {
            onChang(selStack.filter(stack => stack !== tech)); 
        } else {
            onChang([...selStack, tech]); 
        }
    }; 

    return (
        <div className="flex flex-wrap gap-2 mb-6">
            {Stacks.map(tech => (
                <label key={tech} className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={selStack.includes(tech)}
                        onChange={() => checkBox(tech)}
                    />
                    <span>{tech}</span>
                </label>
            ))}
        </div>
    );
    
}



export default function Home(){
    const [selStack, setSelStack] = useState([]);

    
    const careerList = [
        {title : "터치형 RPG", subtitle: "유니티2D", date:"21.02 ~ 21.02", Stack:["Unity", "C#"]},
        {title : "개발자2", subtitle: "부제목2", date:"22.02 ~ 21.02", Stack:["Unity", "C#"]},
        {title : "제목3", subtitle: "부제목3", date:"23.02 ~ 21.02", Stack:["Unity", "C#"]}
    ]

    const filteredCareers = 
    selStack.length === 0 || selStack.includes("All")
    ? careerList
    : careerList.filter(item =>
        item.Stack.some(stack => selStack.includes(stack))
    );

    return (
        <div className="w-full max-w-3-xl mx-auto py-12 px4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-6">
                <div className="flex flex-col items-center space-y-2">
                    <span className="flex overflow-hidden rounded-full w-24 h-24 ring-2 ring-primary">
                        <img alt="user Profile" src={person}/>
                    </span>
                    <div className="text-center">
                        <h1 className="test-3x1 font-bold">승연</h1>
                        <p className="text-stone-500">풀스텍 개발자</p>

                    </div>
                </div>
                <div className="text-center max-w-x1">
                    <p className="text-stone-400">
                        나를 소개합니다.
                    </p>
                </div>
            </div>
            <StackFilter selStack={selStack} onChang={setSelStack} />

            <div>
            <h2 className="text-2x1 font-bold mb-4">프로젝트</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"> 
                {filteredCareers.map((option)=>(
                    <Career 
                    title={option.title}
                    subtitle={option.subtitle}
                    date={option.date}
                    stackList={option.Stack}
                    selectedStack={selStack} // 이게 중요!
                    />
                ))}
            </div>
        </div>  
</div>
    );
} 