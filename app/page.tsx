import AssessmentComponent from "@/components/Home/Assessments";
import CaptationComponent from "@/components/Home/Captations";
import ContactComponent from "@/components/Home/Contact";
import ExhibitionComponent from "@/components/Home/Exhibitions";
import ShowcaseComponent from "@/components/Home/Showcases";
import { Layout } from "@/components/Layouts";
import { Root } from "@/components/Root";


export default function Home() {
  return (
    <Root.Body className="">
      <Root.Header/>
      {/* <HeaderComponent/> */}
      <Root.Content className="">
        <ExhibitionComponent />
        <ShowcaseComponent/>
        <Layout.Separator/>
        <CaptationComponent/>
        <Layout.Separator/>
        <AssessmentComponent/>
        <ContactComponent/>
        <Layout.Separator/>
        </Root.Content>
      <Root.Footer/>
    </Root.Body>
  );
}
