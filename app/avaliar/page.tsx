"use client"
import EvaluetionComponent from "@/components/Avaliar/Evaluetions";
import { Root } from "@/components/Root";


export default function Home() {
  return (
    <Root.Body className="">
      <Root.Header/>
      {/* <HeaderComponent/> */}
      <Root.Content className="">
        <EvaluetionComponent/>
        </Root.Content>
      <Root.Footer/>
    </Root.Body>
  );
}
