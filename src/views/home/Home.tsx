import { FunctionComponent } from "react";
import { About } from "@views/about";
import { Experience } from "@views/experience";
import { Intro } from "@views/intro";
import { Technologies } from "@views/technologies";
import { Testimonials } from "@views/testimonials";

const Home: FunctionComponent = () => {
  return (
    <>
      <Intro />
      <About />
      <Technologies />
      <Experience />
      <Testimonials />
    </>
  );
};

export default Home;
