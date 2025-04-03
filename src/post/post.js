import React from "react"; 
import { Link } from "react-router-dom"; 

export default function Post(){

    const markdownFiles = [
        {name:"글1", content:"내여ㅛㅇ"}, 
        {name:"글테스트", content:"내여ㅛㅇ"} 
    ] //여기 자동으로 받아오게 하고 싶은데... 블로그라면 글 하나 갖고 계속 편집 에바임


    return ( <div className="flex-1 py-8 px-6">
        <div className="container mx-auto grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-3"> 
                <h2 className="text-2x1 font-bold mb-4 text-white">글</h2>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                    {markdownFiles.map((file,index)=> ( 
                        <Link
                            key={index}
                            to={`/blog/${file.name}`}
                            className="rounded-lg overflow-hidden shadow-md bg-white">  
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">{file.name}</h3>
                                <p className="text-muted">
                                    {file.content}
                                </p>
                            </div> 
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </div> 
    ); 
} 