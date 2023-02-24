
import { ProjectBox } from "../components/ProjectBox";
import pongPangEsc from "../images/pongpangEsc.png"
import whoKillMariam from "../images/who-kill-mariam.gif";
import howHumanBegin from "../images/human-begin.gif";
import cts from "../images/cts.gif";

export function ProjectsPage(){
  
    return (
        <div id="projects" className='h-full md:h-screen w-full bg-main flex flex-col justify-around items-center p-4'>
            <span className="text-2xl md:text-5xl color-main my-4 md:my-6">PROJECTS</span>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <ProjectBox text="PONGPANG ESCAPE" image={pongPangEsc} url="https://www.pongpangescape.com/"/>
                <ProjectBox text="WHO KILLED MARIAM" image={whoKillMariam} url="https://who-killed-mariam.netlify.app/"/>
                <ProjectBox text="HOW HUMAN BEGIN" image={howHumanBegin} url="https://how-human-begin.netlify.app/"/>
                <ProjectBox text="COMPUTER THINKING SKILLS" image={cts} url="https://61070055.github.io/Web-Tech-Project-2019/"/>
            </div>
        </div>
      );
}