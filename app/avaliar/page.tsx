import EvaluetionComponent from "@/components/Avaliar/Evaluetions";
import { Root } from "@/components/Root";
import { ToastContainer } from "react-toastify";


export default function Rate() {
  return (
    <Root.Body className="">
      <Root.Header/>
      {/* <HeaderComponent/> */}
      <Root.Content className="">
        <EvaluetionComponent/>
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
