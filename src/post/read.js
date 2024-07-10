import React, { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom"; 

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

    return (
        <div className="py-4 px-4 text-center">

        </div>
    );
}