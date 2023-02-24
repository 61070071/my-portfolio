
import call from "../images/call.png";
import mail from "../images/mail.png";
import github from "../images/github.png";

export function Footer(){
    const openNewTab = (link) => {
        console.log(link);
        window.open(link, '_blank', 'noreferrer');
      };
    return (
        <div className='w-full bg-third flex flex-col md:flex-row justify-center items-center text-base text-white p-4'>
            <div className="flex mr-0 md:mr-6 mb-4 md:mb-0">
                <img className="w-6 aspect-square mr-2" src={call} alt="call"/>
                <span className="">080-919-8671</span>
            </div>
            <div className="flex mb-4 md:mb-0">
                <img className="w-6 aspect-square mr-2" src={mail} alt="call"/>
                <span className="">chanlaor.t@gmail.com</span>
            </div>
            <div className="flex">
                <span className="hidden md:inline px-4">|</span>
                <img onClick={() => openNewTab("https://github.com/61070071")} className="w-6 aspect-square mr-2 cursor-pointer" src={github} alt="call"/>
            </div>
        </div>
      );
}