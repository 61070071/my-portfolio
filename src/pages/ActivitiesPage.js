
import { ActivityBox } from "../components/ActivityBox";
import itCamp from "../images/it-camp-15.jpg";
import itEK from "../images/it-3k.jpg";
import toBeIT from "../images/To-be-it.jpg";
import unite from "../images/unite-4.jpg";

export function ActivitiesPage(){
  
    return (
        <div id="activities" className='h-full md:h-screen w-full bg-second flex flex-col justify-around items-center p-4'>
            <span className="text-2xl md:text-5xl color-main my-4 md:my-6">ACTIVITIES</span>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <ActivityBox text="IT CAMP 15" image={itCamp}/>
                <ActivityBox text="IT3K" image={itEK}/>
                <ActivityBox text="TO BE IT" image={toBeIT}/>
                <ActivityBox text="UNITE CAMP 4" image={unite}/>
            </div>
        </div>
      );
}