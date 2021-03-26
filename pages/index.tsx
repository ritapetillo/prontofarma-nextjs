import Head from "next/head";
import styles from "../styles/Home.module.css";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ComeFunziona from "../components/ComeFunziona";
import ChiSiamo from "../components/ChiSiamo";
import Valori from "../components/Valori";
import Partners from "../components/Partners";

export default function Home() {
  return (
    <>
      <Hero />
      <ComeFunziona />
      <ChiSiamo />
      <Valori />
      <Partners/>
  
    </>
  );
}
