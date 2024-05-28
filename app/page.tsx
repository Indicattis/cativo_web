import DesignComponent from "@/components/home/design";
import FaceComponent from "@/components/home/face";
import PortifolioComponent from "@/components/home/portifolio";
import ServicesComponent from "@/components/home/services";
import HeaderComponent from "@/components/inc/header";
import designs_array from "@/data/json/designs";
import projects_array from "@/data/json/projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center m-auto w-full relative">
      <HeaderComponent/>
      <FaceComponent/>
      <ServicesComponent/>
      <PortifolioComponent data={projects_array}/>
      <ServicesComponent/>
      <DesignComponent data={designs_array}/>
    </main>
  );
}
