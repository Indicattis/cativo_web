import NamespaceComponent from "@/components/home/home-namespace";
import FaceComponent from "@/components/home/home-slider";
import HeaderComponent from "@/components/inc/header";
import visual_data_array from "@/data/json/visual_data";
import visual_serv_array from "@/data/json/visual_services";
import web_data_array from "@/data/json/web_data";
import web_serv_array from "@/data/json/web_services";
import MaterialComponent from "@/components/home/home_material";
import HomeShowcase from "@/components/home/showcase";
import ProfessionalComponent from "@/components/home/professional";
import RatingComponent from "@/components/home/rating";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center m-auto w-full relative">
      <HeaderComponent/>
      <FaceComponent/>
      {/* <NamespaceComponent/> */}
      <ProfessionalComponent/>
      <HomeShowcase/>
      <NamespaceComponent/>
      <RatingComponent/>
      <MaterialComponent web_services={web_serv_array} web_data={web_data_array}/>
      {/* <VisualComponent visual_data={visual_data_array} visual_services={visual_serv_array}/> */}
    </main>
  );
}
