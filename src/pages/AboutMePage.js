
import { AboutMeBox } from "../contentBox/AboutMeBox";
import { SkillsBox } from "../contentBox/SkillsBox";
import { EducationBox } from "../contentBox/EducationBox";

export function AboutMePage(){
  
    return (
        // <div className='h-screen w-full bg-second flex flex-wrap md:flex-nowrap justify-center items-center'>
            
        //     <div className="flex flex-col w-full h-1/2 justify-between items-center">
        //         <AboutMeBox />
        //         <EducationBox />    
        //     </div>
        //     <SkillsBox />
        // </div>
        <div id="about_me" className='h-full md:h-screen p-4 w-full bg-second grid grid-cols-1 md:grid-cols-2'>
            <AboutMeBox />
            <EducationBox />
            <SkillsBox />
        </div>
      );
}