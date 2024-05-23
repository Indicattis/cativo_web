import FaceComponent from "@/components/home/face";
import ServicesComponent from "@/components/home/services";
import HeaderComponent from "@/components/inc/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center m-auto w-full relative">
      <HeaderComponent/>
      <FaceComponent/>
      <ServicesComponent/>
    </main>
  );
}
