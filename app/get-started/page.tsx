import CaptationComponent from "@/components/Get-Started/Captations";
import { Root } from "@/components/Root";
import { ToastContainer } from "react-toastify";


export default function GetStarted() {
  return (
    <Root.Body className="">
      <Root.Header/>
      {/* <HeaderComponent/> */}
      <Root.Content className="">
        <CaptationComponent/>
        </Root.Content>
      <Root.Footer/>
      <ToastContainer
        draggable 
        position="top-center"
        closeOnClick
        hideProgressBar
        theme="dark"/>
    </Root.Body>
  );
}
