import AssessmentComponent from "@/components/Home/Assessments";
import CaptationComponent from "@/components/Home/Captations";
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
        <Layout.Separator/>
        <ShowcaseComponent/>
        <Layout.Separator/>

        <CaptationComponent/>
        <Layout.Separator/>
        {/* <AssessmentComponent/> */}
        </Root.Content>
      <Root.Footer/>
    </Root.Body>
  );
}
