import "../styles/globals.css";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import { WhatsAppWidgetWrap } from "../styles/uiElements.ts";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import Footer from "../components/Footer";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (document) {
      document.querySelector("._2-mAj").placeholder = "scrivi il tuo ordine";
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <WhatsAppWidgetWrap>
        <WhatsAppWidget
          phoneNumber="+393279460178"
          companyName="Prontofarma"
          sendButton="Invia"
          message="'Ciao! 👋🏼  Per procedere con il tuo ordine inserisci i tuoi dati (nome, cognome, indirizzo) e scegli tra le farmacie convenzioante piu' vicine a te"
          textReplyTime="Risposta immediata"
        />
      </WhatsAppWidgetWrap>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
