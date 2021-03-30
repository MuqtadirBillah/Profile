import React from "react";
import MainCarousel from "./MainCarousel";
import AboutSmall from "./AboutSmall";
import Education from "./Education";
import Skills from "./Skills";
import Certificatee from "./Certificatee";

function Section(){
    return(
        <div className="section">
            {/* <MainCarousel /> */}
            <AboutSmall />
            <Education />
            <Skills />
            <Certificatee />
        </div>
    );
}

export default Section;