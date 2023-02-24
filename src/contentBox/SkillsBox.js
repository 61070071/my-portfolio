
import { IconSkillBox } from "../components/IconSkillBox";
import html from "../images/html-5.png";
import css from "../images/css-3.png";
import js from "../images/js.png";
import reactImg from "../images/React-icon.png";
import php from "../images/php.png";
import bootstrap from "../images/bootstrap.png";
import tailwind from "../images/tailwind.svg";
import wordpress from "../images/wordpress.png";

export function SkillsBox(){
  
    return (
        <div className="col-span-1 md:col-span-2 flex flex-col w-full justify-center items-center">
            <span className="color-main text-2xl md:text-3xl mb-6">SKILLS</span>
            <div className="grid grid-rows-4 md:grid-rows-2 grid-flow-col gap-6 py-6 px-6 md:px-16 text-xl border-x-2 rounded-xl border-slate-400">
                <IconSkillBox text="HTML" image={html}/>
                <IconSkillBox text="CSS" image={css}/>
                <IconSkillBox text="PHP" image={php}/>
                <IconSkillBox text="JavaScript" image={js}/>
                <IconSkillBox text="ReactJS" image={reactImg} className=""/>
                <IconSkillBox text="WordPress" image={wordpress} className=""/>
                <IconSkillBox text="Bootstrap" image={bootstrap}/>
                <IconSkillBox text="Tailwind" image={tailwind}/>
                
            </div>
        </div>
      );
}