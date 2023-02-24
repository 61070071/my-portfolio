
import me from "../images/me.jpg"

export function NamePage(){
  
    return (
        <div className='h-screen w-full bg-main flex flex-col md:flex-row justify-center items-center p-4'>
            <img className="rounded-lg w-60 md:w-80 m-10" src={me} alt="me"/>
            <div className="flex flex-col items-center md:items-start md:m-10">
                <span className="text-2xl text-center md:text-5xl color-main mb-4">THANAPON CHANLA-OR</span>
                <span className="text-2xl text-center md:text-5xl text-white">Front-End Developer</span>
            </div>
        </div>
      );
}