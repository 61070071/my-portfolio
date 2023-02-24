
import { NavBar } from "./Navbar";
import { NamePage } from "../pages/NamePage";
import { AboutMePage } from "../pages/AboutMePage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { ActivitiesPage } from "../pages/ActivitiesPage";
import { Footer } from "./Footer";

export function PageContent(){
  
    return (
        <div className='flex flex-col w-full justify-center items-center'>
          <NavBar />
          <NamePage />
          <AboutMePage />
          <ProjectsPage />
          <ActivitiesPage />
          <Footer />
        </div>
      );
}