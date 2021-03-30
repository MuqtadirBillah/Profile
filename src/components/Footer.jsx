import React from "react";

function Footer(){
    return(
        <div className="footer">
            <div className="footerIn">
                <h3>Contact Details</h3>
                <p>Contact No: +923312455191<br />Email Address: abbasimuqtadir@gmail.com</p>
                <a href="https://www.linkedin.com/in/muqtadir-billah-musab-abbasi/" target="_blank"><img src="images/lin.png" alt=""/></a>
                <a href="https://github.com/MuqtadirBillah/" target="_blank"><img src="images/git.png" alt=""/></a>
            </div>
            <p className="DevCred">Developed by MBMA</p>
        </div>
    );
}

export default Footer;