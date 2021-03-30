import React from "react";
import Certificate from "./Certificate";

function Certificatee(){
    return(
        <div className="certificateeDiv"  id="certification">
            <h1>Certification</h1>
            <div className="certificates">
                <Certificate imageSrc="images/lab.png" imageAlt="london App Brewery" title="Full Stack Web Developement" description="London App Brewery (Udemy)"  />
                <Certificate imageSrc="images/aptech.png" imageAlt="Aptech" title="Website Designing" description="Aptech Pakistan"  />
                <Certificate imageSrc="images/iqra.png" imageAlt="Iqra University" title="NSAIC 2019" description="Iqra University"  />
                <Certificate imageSrc="images/aptech.png" imageAlt="Aptech" title="Ethical Hacking" description="Aptech Pakistan"  />
            </div>
        </div>
    );
}

export default Certificatee;