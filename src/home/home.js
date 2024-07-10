import React from "react"; 
import person from "../image/임시.jpg"
import Career from "./career";

export default function Home(){

    const careerList = [
        {title : "제목1", subtitle: "부제목1", date:"21.02 ~ 21.02", comment:"ㅇ"},
        {title : "개발자2", subtitle: "부제목2", date:"22.02 ~ 21.02", comment:"ㅇ"},
        {title : "제목3", subtitle: "부제목3", date:"23.02 ~ 21.02", comment:"ㅇ"}
    ]

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
            <div>
            <h2 className="text-2x1 font-bold mb-4">경력</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"> 
                {careerList.map((option)=>(
                    <Career title={option.title}
                            subtitle={option.subtitle}
                            date={option.date}
                            comment={option.comment}
                    />
                ))}
            </div>
        </div>  
</div>
    );
} 