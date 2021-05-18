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
import LavoraShort from "../components/LavoraShort";
import client from "../lib/api/client";
import gql from "graphql-tag";

export default function Home({ pharmacies }) {
  return (
    <>
      <Hero pharmacies={pharmacies} />
      <ComeFunziona />
      <ChiSiamo />
      <Valori />
      <Partners partners={pharmacies} />
      <LavoraShort />
    </>
  );
}

export async function getStaticProps() {
  const req = await client.query({
    query: gql`
      query {
        pharmacies {
          name
          city
          address
          zipcode
          country
          state
          latitude
          longitude
        }
      }
    `,
  });
  const { pharmacies } = await req.data;
  return {
    props: { pharmacies },
  };
}
