import React, { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";

import remarkGfm from "remark-gfm"; 
import ReactMarkdown from "react-markdown";

export default function Read(){ 
    
    const {fileName} = useParams(); //파라미터에서 갖고오다 
    const [markdown, setMarkdown] = useState("") //마크다운이란 변수, 초기값 공백, 
    console.log(fileName);
    useEffect(()=> { 
        const markdownPath = `/markdown/${fileName}.md`; 
        fetch(markdownPath)
        .then((res)=> res.text())
        .then((text)=> {
            setMarkdown(text); 
            console.log(text); 
        },[fileName]); 
    })

     //더 꾸밀 거면 플러그인 추가하기 {[remarkGfm]}> 같은 거 
    return (
        <div className="py-4 px-4 text-center">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown> 
        </div>
    );
}