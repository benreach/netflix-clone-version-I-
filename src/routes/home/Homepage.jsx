import React from "react";
import "./homepage.css";
import Navbar from "../../components/navbar/Navbar";
import CardLists from "../../components/cardlists/CardLists";
import Footer from "../../components/footer/Footer";
import { ToastContainer, toast } from "react-toastify";


function Homepage() {
  return (
      <div className="homepage">
        <ToastContainer  theme="dark"/>
        <Navbar />
        <div className="hero">
          <img src="/imgs/babydriver.jpg" alt="" />

          <div className="hero-captions">
            <img src="/imgs/hero-title.png" alt="" />
            <p>
              From the same director that brought us Shaun of the Dead and Scott
              Pilgrim vs. The World, Baby Driver brings a similar, whimsical
              quality to action films we know and love. Stuck in a life of crime
              as a getaway driver to pay off his dues, Baby (Ansel Elgort) works
              with a team of crazed criminals for his supposed last job. Besides
              the sweet and endearing romance sub-plot that weaves seamlessly
              throughout the film, the editing of music rhythm with its stellar
              soundtrack is lined up perfectly with the action, each gunshot
              playing along like percussion to the melody.
            </p>
            <div className="btns-container">
              <button className="hero-btn">
                <img src="/play.svg" alt="" />
                <span>Play</span>
              </button>
              <button className="hero-btn color">
                <img src="/info.svg" alt="" />
                <span>More Info</span>
              </button>
            </div>
          </div>
        </div>
        <CardLists />
        <CardLists title={"Blockbuster Movies"} category="top_rated" />
        <CardLists title={"Upcoming"} category={"upcoming"} />
        <Footer />
      </div>
  );
}

export default Homepage;
