import AssessmentComponent from "@/components/Assessments";
import CaptationComponent from "@/components/Captations";
import { Exhibition } from "@/components/Exhibition";
import ExhibitionComponent from "@/components/Exhibitions";
import { Root } from "@/components/Root";
import ShowcaseComponent from "@/components/Showcases";

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
