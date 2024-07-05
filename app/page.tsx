import AssessmentComponent from "@/components/Home/Assessments";
import CaptationComponent from "@/components/Home/Captations";
import ExhibitionComponent from "@/components/Home/Exhibitions";
import ShowcaseComponent from "@/components/Home/Showcases";
import { Root } from "@/components/Root";


export default function Home() {
  return (
    <Root.Body className="">
      <Root.Header/>
      {/* <HeaderComponent/> */}
      <Root.Content className="">
        <ExhibitionComponent />
        <ShowcaseComponent/>
        <CaptationComponent/>
        <AssessmentComponent/>
      </Root.Content>
      <Root.Footer/>
    </Root.Body>
  );
}
