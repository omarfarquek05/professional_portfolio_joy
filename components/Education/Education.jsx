import React from "react";
import { educations } from "@/constants";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { LuGraduationCap } from "react-icons/lu";
import { LiaSchoolSolid } from "react-icons/lia";
import { CiTimer } from "react-icons/ci";
import lottieFile from  "../../public/study.json"
import Animate from "./Animate";

const Education = () => {
  return (
    <>
      <h1
        className="h1-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500
    via-yellow-400 to-indigo-400"
      >
        Education
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 py-2 justify-center items-center id="  id="#education">
        <div className="w-3/4 h-3/4 mb-7">
          {/* <Image src="/edu.png" alt="graduaction" height={400} width={400}  /> */}
         <Animate  animationPath={lottieFile} />
        </div>

        <div>
          {educations.map((edu) => {
            return (
              <Card  className=" border border-sky-500 mb-5 lg:max-w-[470px]" >
                <CardContent className="sm:w-auto">
                <div className="flex flex-col gap-2  ">

                  <div className="flex gap-1 pt-3">
                  <LuGraduationCap className="text-xl"/>
                  <p>Degree :   {edu.title} </p>
                  </div>
                   
                  <div className="flex gap-1  ">
                  <CiTimer className="text-xl" />
                  <p>duration :   {edu.duration} </p>
                  </div>

                  <div className="flex gap-1 ">
                  <LiaSchoolSolid className="text-xl" />
                  <p>Institution :   {edu.institution} </p>
                  </div>
                 
                  </div>
                
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </>
  );
};

export default Education;
