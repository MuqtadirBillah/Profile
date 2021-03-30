import React from "react";
import Certificate from "./Certificate";

function Certificatee(){
    return(
        <div className="certificateeDiv"  id="certification">
            <h1>Certification</h1>
            <div className="certificates">
                {/* <Certificate imageSrc="images/aptech.png" imageAlt="london App Brewery" title="Full Stack Web Developement" description="London App Brewery (Udemy)" /> */}
                <div className="certificate">
                    <div className="cerImg">
                        <img src="images/lab.png" alt="london App Brewery" />
                    </div>
                    <div className="cerText">
                        <h3>Full Stack Web Developement</h3>
                        <p>London App Brewery (Udemy)</p>
                    </div>
                </div>
                <div className="certificate">
                    <div className="cerImg">
                        <img src="images/aptech.png" alt="Aptech" />
                    </div>
                    <div className="cerText">
                        <h3>Website Designing</h3>
                        <p>Aptech Pakistan</p>
                    </div>
                </div>
                <div className="certificate">
                    <div className="cerImg">
                        <img src="images/iqra.png" alt="Aptech" />
                    </div>
                    <div className="cerText">
                        <h3>NSAIC 2019</h3>
                        <p>Iqra University</p>
                    </div>
                </div>
                <div className="certificate">
                    <div className="cerImg">
                        <img src="images/aptech.png" alt="Aptech" />
                    </div>
                    <div className="cerText">
                        <h3>Ethical Hacking</h3>
                        <p>Aptech Pakistan</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Certificatee;