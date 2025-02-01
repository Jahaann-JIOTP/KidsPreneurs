"use client";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import Footer from "./components/Footer";
import Countdown from "./components/Countdown";
import EventSpeakers from "./components/EventSpeakers";
import Gallery from "./components/Gallery";
import Sponsors from "./components/Sponsors";
import Contact from "./components/Contact";
import EventSchedule from "./components/EventSchedule";
import EventVenue from "./components/EventVenue";
import SponsorshipPackages from "./components/SponsorshipPackages";
import CardSection from "./components/CardSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import EventMission from "./components/EventMission";
import Elearning from "./components/EventSession"; 

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation happens only once
    });
  }, []);
  return (
    <>
    <div >
      <Navbar />
      </div>
      <div className="h-3/4">
        <HeroSection />
      </div>
      <div className="bg-black p-3"  data-aos="fade-up">
        <Countdown />
      </div>
      <div data-aos="fade-up" className="bg-white">
      <EventMission/>
    </div>
    <div data-aos="fade-up" className="bg-white">
        <CardSection />
      </div>
      <div data-aos="fade-up" className="bg-white mt-7 p-5">
        <Elearning/>
      </div>
     
      <div data-aos="fade-up">
      <Gallery/>
    </div>
    
   
    
    <div id="sponsors"data-aos="fade-up" className="bg-white">
      <Sponsors/>
    </div>
    <div  data-aos="fade-up">
      <SponsorshipPackages/>
    </div>
    <div id="eventschedule" className="bg-white" data-aos="fade-up">
        <EventSchedule />
      </div>
      
      <div id="eventvenue" data-aos="fade-up">
        <EventVenue/>
      </div>
      <div className="bg-white"  data-aos="fade-up">
        <EventSpeakers />
      </div>
    <section>
    <div id="contact" data-aos="fade-up" className="bg-white">
      <Contact/>
    </div>
    </section>
    <div data-aos="fade-up">
      <Footer/>
    </div>
    </>
  );
}
