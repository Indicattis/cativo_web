import CaptationComponent from "@/components/Get-Started/Captations";
import { Root } from "@/components/Root";


export default function GetStarted() {
  return (
    <Root.Body className="">
      <Root.Header/>
      {/* <HeaderComponent/> */}
      <Root.Content className="">
        <CaptationComponent/>
        </Root.Content>
      <Root.Footer/>
    </Root.Body>
  );
}
