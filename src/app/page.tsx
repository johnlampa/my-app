import Image from "next/image";
import Navbar from "./components/navbar";
import "./styles.css"
import MainButton from "./components/MainButton";
import Content from "./components/Content";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      
      <Content></Content>
    </>
  );
}
