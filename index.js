import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { themeContext } from "../hooks/themeContext";
import { useContext } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
   const theme = useContext(themeContext)
  const darkMode = theme?.state.darkMode

  return (
    <div   style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}>
      <Head>
        <title>Tracy | Front-End Developer</title>
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <Navbar/>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact/>
    </div>
  );
}
