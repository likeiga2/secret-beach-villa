import dynamic from "next/dynamic";

const eslint.config = dynamic(() => import("../components/eslint.config.js"));
const postcss.config = dynamic(() => import("../components/postcss.config.js"));
const tailwind.config = dynamic(() => import("../components/tailwind.config.js"));
const vite.config = dynamic(() => import("../components/vite.config.js"));
const index-DvMg6Zq8 = dynamic(() => import("../components/index-DvMg6Zq8.js"));
const App = dynamic(() => import("../components/App.js"));
const main = dynamic(() => import("../components/main.js"));
const vite-env.d = dynamic(() => import("../components/vite-env.d.js"));
const About = dynamic(() => import("../components/About.js"));
const Access = dynamic(() => import("../components/Access.js"));
const Contact = dynamic(() => import("../components/Contact.js"));
const ErrorBoundary = dynamic(() => import("../components/ErrorBoundary.js"));
const Experiences = dynamic(() => import("../components/Experiences.js"));
const HeroCarousel = dynamic(() => import("../components/HeroCarousel.js"));
const Navigation = dynamic(() => import("../components/Navigation.js"));
const Rooms = dynamic(() => import("../components/Rooms.js"));
const use-mobile = dynamic(() => import("../components/use-mobile.js"));
const utils = dynamic(() => import("../components/utils.js"));

export default function Home() {
  return (
    <>
      <eslint.config />
      <postcss.config />
      <tailwind.config />
      <vite.config />
      <index-DvMg6Zq8 />
      <App />
      <main />
      <vite-env.d />
      <About />
      <Access />
      <Contact />
      <ErrorBoundary />
      <Experiences />
      <HeroCarousel />
      <Navigation />
      <Rooms />
      <use-mobile />
      <utils />
    </>
  );
}
