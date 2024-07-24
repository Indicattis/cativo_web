import AssessmentComponent from "@/components/Home/Assessments";
import ContactComponent from "@/components/Home/Contact";
import ExhibitionComponent from "@/components/Home/Exhibitions";
import ExploreComponent from "@/components/Home/ExploreComponent";
import ShowcaseComponent from "@/components/Home/Showcases";
import { Layout } from "@/components/Layouts";
import { Root } from "@/components/Root";

export default function Home() {
  return (
    <Root.Body className="">
      <Root.Header />
      {/* <HeaderComponent/> */}
      <Root.Content className="">
        <ExhibitionComponent />
        <ShowcaseComponent />
        <Layout.Separator />
        <ExploreComponent />
        <AssessmentComponent />
        <ContactComponent />
        <Layout.Separator />
      </Root.Content>
      <Root.Footer />
    </Root.Body>
  );
}