//Milestone 2: Basic UI Design, Custom CSS & Tailwind CSS
//Build a simple multi-page website using React components.

import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection
        title="Welcome to ZRSoft"
        subtitle="We are in mission to Build a better future"
      />
      <p className='text-center'>
        This website is the part of Milestone2: <br /> Assignments:01 . <br /> To Build
        a simple multi-page website using React components.
      </p>
    </div>
  );
}
