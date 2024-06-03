import FaceComponent from "@/components/home/face";
import PortifolioComponent from "@/components/home/portifolio";
import ServicesComponent from "@/components/home/services";
import VisualComponent from "@/components/home/visual";
import HeaderComponent from "@/components/inc/header";
import projects_array from "@/data/json/projects";
import visual_data_array from "@/data/json/visual_data";
import visual_serv_array from "@/data/json/visual_services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center m-auto w-full relative">
      <HeaderComponent/>
      <FaceComponent/>
      <ServicesComponent/>
      <PortifolioComponent data={projects_array}/>
      <ServicesComponent/>
      <VisualComponent visual_data={visual_data_array} visual_services={visual_serv_array}/>
    </main>
  );
}
