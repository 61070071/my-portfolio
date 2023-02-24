
import { useState } from "react"
import hamburger from "../images/more.png"


export function NavBar(){
    const [navbarToggle, setNavbarToggle] = useState(false);
    return (
        <div className='w-full bg-navbar text-white px-4 py-2 absolute top-0 left-0 flex justify-between items-center'>
            <div>
                <span className="text-xl md:px-6">PORTFOLIO</span>
            </div>
            <div className={` ${navbarToggle ? "flex" : "hidden"} w-full flex-col justify-center items-center bg-navbar-opacity py-2 absolute left-1/2 top-full -translate-x-1/2 md:w-fit md:flex md:flex-row md:pr-2 md:py-0 md:relative md:left-0 md:top-0 md:translate-x-0`}>
                <a className=" mx-4 pb-1 pt-2 text-lg navbar-underline" href="#about_me">ABOUT ME</a>
                <a className=" mx-4 pb-1 pt-2 text-lg navbar-underline" href="#projects">PROJECTS</a>
                <a className=" mx-4 pb-1 pt-2 text-lg navbar-underline" href="#activities">ACTIVITIES</a>
            </div>
            <div className="flex md:hidden">
                <img onClick={() => {setNavbarToggle(!navbarToggle)}} className="w-6" src={hamburger} alt="hamburderIcon"/>
            </div>
        </div>
      );
}