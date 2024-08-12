import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import MyApproach from "@/components/MYApproach";
import RecentProjects from "@/components/RecentProject";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";


export default function Home() {
  return (
    <main className="relative bg-black-100  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full ">  
    <Hero/>
 


    <Grid/>
<RecentProjects/>
<Clients/>
<Experience/>
<MyApproach/>

<Footer/>
  
 

    </div>
  
  </main>
  );
}
