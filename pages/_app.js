import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <NavBar />
      <div style={{ paddingTop: 100 }}>
        <Component {...pageProps} />
      </div>
    </AnimatePresence>
  );
}

export default MyApp;
